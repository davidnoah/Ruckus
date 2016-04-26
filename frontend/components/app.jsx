var React = require('react'),
    ReactDOM = require('react-dom'),
    Login = require('./auth/login.jsx'),
    Signup = require('./auth/signup.jsx'),
    NavBar = require('./navbar.jsx'),
    Modal = require('react-modal');


var App = React.createClass({
  render: function() {
    return (
      <NavBar />
    );
  }

});

module.exports = App;
