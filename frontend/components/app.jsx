var React = require('react'),
    ReactDOM = require('react-dom'),
    Login = require('./auth/login.jsx'),
    Signup = require('./auth/signup.jsx'),
    NavBar = require('./navbar.jsx'),
    StreamBar = require('./streambar.jsx'),
    Splash = require('./splash.jsx'),
    TrackIndex = require('./tracks/trackIndex.js'),
    TrackUpload = require('./tracks/trackUpload'),
    PlayStore = require('../stores/play'),
    Modal = require('react-modal');


var App = React.createClass({
  getInitialState: function() {
    return {trackNull: PlayStore.currentTrack()};
  },

  componentDidMount: function() {
    PlayStore.addListener(this.onChange);
  },

  onChange: function() {
    this.setState({trackNull: PlayStore.currentTrack()});
  },

  render: function() {
    var streamBar;
    if (this.state.trackNull === null) {
      streamBar = <div></div>;
    } else {
      streamBar = <StreamBar />;
    }

    return (
      <div className="app">
        <NavBar />
        {this.props.children}
        <br/>
        {streamBar}
      </div>
    );
  }

});

module.exports = App;
