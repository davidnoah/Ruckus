var React = require('react'),
    ReactDOM = require('react-dom'),
    Login = require('./auth/login.jsx'),
    Signup = require('./auth/signup.jsx'),
    NavBar = require('./navbar.jsx'),
    Splash = require('./splash.jsx'),
    TrackIndex = require('./tracks/trackIndex.js'),
    TrackUpload = require('./tracks/trackUpload'),
    Modal = require('react-modal');


var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <NavBar />
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
