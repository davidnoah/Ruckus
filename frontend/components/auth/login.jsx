var React = require('react');
var ClientActions = require('../../actions/client_actions.js');

var Login = React.createClass({
  getInitialState: function() {
    return {username: "", password: ""};
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var user = {user: {
      username: this.state.username,
      password: this.state.password
    }};
    ClientActions.loginUser(user);
    this.props.parent.closeModal();
  },

  onChange: function(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

  render: function() {
    return (
      <div className="loginForm" >
        <form className='login' onSubmit={this.handleSubmit}>

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

          <input type="submit" value="Login"/>

        </form>
      </div>
    );
  }
});

module.exports = Login;
