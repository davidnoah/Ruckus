var React = require('react');
var SessionStore = require('../../stores/session');
var UserTracks = require('./userTracks');
var UploadTrack = require('./userUploadForm');
var UserDetail = require('./userDetail');

var UserProfile = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser()
    };
  },

  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  onChange: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  render: function() {
    return (
      <div className="user-profile">
        <UserDetail user={this.state.currentUser} />
        <h2 className="user-tracks-title">Your uploaded tracks:</h2>
        <div className="user-tracks-form" >
          <UploadTrack />
          <div className="user-track-list">
            <div className="track-playlist-tabs"/>
            <UserTracks user={this.state.currentUser} />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserProfile;
