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
          <h3 className="splash-slogan">Funkify Your Life</h3>
          <h3 className="splash-description">Challenge yourself & discover music you have never listened to</h3>
          <div className="splash-icons">
            <div className="splash-icon-container">
              <i className="fa fa-music fa-5x" style={{ariaHidden: "true"}}></i>
              <p className="splash-icon-caption">Gain Music Cred</p>
              <p className="splash-icon-description">Gain points when you upload and</p>
              <p className="splash-icon-description">listen to brand new music</p>
            </div>
            <div className="splash-icon-container">
              <i className="fa fa-users fa-5x" style={{ariaHidden: "true"}}></i>
              <p className="splash-icon-caption">Share With Others</p>
              <p className="splash-icon-description">Others will be able to see and discover</p>
              <p className="splash-icon-description">your favorite music</p>
            </div>
            <div className="splash-icon-container">
              <i className="fa fa-microphone fa-5x" style={{ariaHidden: "true"}}></i>
              <p className="splash-icon-caption">Unlimited Uploads</p>
              <p className="splash-icon-description">You are free to upload and listen as</p>
              <p className="splash-icon-description">much as you like</p>
            </div>
          </div>
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
