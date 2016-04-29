var React = require('react'),
    ReactDOM = require('react-dom'),
    Login = require('./auth/login.jsx'),
    Signup = require('./auth/signup.jsx'),
    NavBar = require('./navbar.jsx'),
    TrackIndex = require('./tracks/trackIndex.js'),
    TrackUpload = require('./tracks/trackUpload.jsx'),
    Modal = require('react-modal');


var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <NavBar />
        <div className="splash">
          <TrackIndex />
          {this.props.children}
          <TrackUpload />
        </div>
      </div>
    );
  }

});

module.exports = App;
