var React = require('react');
var ClientActions = require('../actions/client_actions.js');
var Dropzone = require('react-dropzone');

var SignUp = React.createClass({
  getInitialState: function() {
    return {username: "",
            email: "",
            password: "",
            picture: "",
            description: ""
          };
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var user = {user: {
      username: this.state.username,
      email: this.state.username,
      password: this.state.password,
      picture: this.state.password,
      description: this.state.description
    }}
    ClientActions.createUser(user);
  },

  onChange: function(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

  onDrop: function(file) {
    this.setState({picture: file});
  }

  render: function() {
    return (
      <form className='signup' onSubmit={this.handleSubmit}>

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
          <input type="text"
            value={this.state.email}
            onChange={this.onChange}
            id="email"/>
        </label>
        <br/>

        <Dropzone onDrop={this.onDrop} multiple="false">
          <p>
            Drag and drop a picture here.
          </p>
        </Dropzone>
        <img src={file.preview} />

        <label className="formLabel">
          Description:
          <br/>
          <input type="text"
            value={this.state.description}
            onChange={this.onChange}
            id="description"/>
        </label>
        <br/>

        <input type="submit" value="Create Profile"/>

      </form>
    );
  }
});

module.exports = Login;
