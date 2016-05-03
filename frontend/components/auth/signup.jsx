var React = require('react');
var ClientActions = require('../../actions/client_actions.js');
var SessionStore = require('../../stores/session.js');
var UploadStore = require('../../stores/upload');
var Dropzone = require('react-dropzone');

var Signup = React.createClass({
  getInitialState: function() {
    return {username: "",
            email: "",
            password: "",
            picture: "",
            description: ""
          };
  },

  componentDidMount: function() {
    UploadStore.addListener(this.handleImageUrl);
  },

  handleImageUrl: function() {
    document.getElementById('createProfile').disabled = false;
    this.setState({picture: UploadStore.getImageUrl()});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var user = {user: {
      username: this.state.username,
      email: this.state.username,
      password: this.state.password,
      picture: this.state.picture,
      description: this.state.description
    }};
    ClientActions.createUser(user);
    this.props.parent.closeModal();
  },

  onChange: function(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

  onDrop: function(file) {
    document.getElementById('createProfile').disabled = true;
    ClientActions.fetchPresignedUrl("images/tracks", file[0].name, file[0]);
  },

  render: function() {

    var picturePreview = {
      backgroundImage: "url(" + this.state.picture + ")"
    };

    return (
      <div className='signupForm'>
        <div className="modal-title-container" >
          <h3 className="modal-title">Signup</h3>
          <button className="close-modal-button" onClick={this.props.parent.closeModal}>X</button>
        </div>

        <form className='signup' onSubmit={this.handleSubmit}>

          <Dropzone className="drop-zone" style={picturePreview} onDrop={this.onDrop} multiple={false} >
          <p className="drop-text">
          Drag and drop a profile picture here.
          </p>
          </Dropzone>
          <br/>

          <label className="formLabel">
            Username:
            <br/>
            <input type="text"
              value={this.state.username}
              onChange={this.onChange}
              id="username" />
          </label>
          <br/>

          <label className="formLabel">
            Password:
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.onChange}
              id="password"/>
          </label>
          <br/>

          <label className="formLabel">
            Email:
            <br/>
            <input type="email"
              value={this.state.email}
              onChange={this.onChange}
              id="email"/>
          </label>
          <br/>

          <label className="formLabel">
            Description:
            <br/>
            <input type="text"
              value={this.state.description}
              onChange={this.onChange}
              id="description"/>
          </label>
          <br/>

          <input className="submit-button" id="createProfile" type="submit" value="Create Profile"/>

        </form>


      </div>
    );
  }
});


module.exports = Signup;
