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
    UserProfile = require('./user/userProfile'),
    SessionStore = require('../stores/session'),
    Modal = require('react-modal');


var App = React.createClass({
  getInitialState: function() {
    return {
      trackNull: PlayStore.currentTrack(),
      currentUser: SessionStore.currentUser()
    };
  },


  componentDidMount: function() {
    PlayStore.addListener(this.onChange);
    SessionStore.addListener(this.changeUser);
  },

  changeUser: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  onChange: function() {
    this.setState({trackNull: PlayStore.currentTrack()});
  },

  userProfileCB: function() {
    var userRoute = "user/" + this.state.currentUser.id.toString() + "/music";
    this.props.history.push(userRoute);
  },

  homeCB: function() {
    this.props.history.push("/");
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
        <NavBar
          homeCB={this.homeCB}
          userProfileCB={this.userProfileCB}/>
        {this.props.children}
        <br/>
        {streamBar}
      </div>
    );
  }

});

module.exports = App;
