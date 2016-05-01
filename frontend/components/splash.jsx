var React = require('react'),
    ReactDOM = require('react-dom'),
    Login = require('./auth/login.jsx'),
    Signup = require('./auth/signup.jsx'),
    NavBar = require('./navbar.jsx'),
    TrackIndex = require('./tracks/trackIndex.js'),
    TrackUpload = require('./tracks/trackUpload'),
    Modal = require('react-modal');

var masonryOptions = {
    transitionDuration: 0
};

var Splash = React.createClass({
  render: function() {
    return (
      <div className="splash">
        <div className="splash-image">
        </div>
        <div className="splash-sample-text">
          Sample Vibrations:
        </div>
        <TrackIndex />
      </div>
    );
  }
});

module.exports = Splash;
