var React = require('react');
var SessionStore = require('../../stores/session');
var UserTracks = require('./userTracks');
var UploadTrack = require('./userUploadForm');
var UserDetail = require('./userDetail');
var UserPlaylists = require('./UserPlaylists');

var UserProfile = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser(),
      displayTracks: true,
      displayPlaylists: false
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

  handleTabClick: function(event) {
    if (event.target.id === "playlist-tab") {
      this.setState({
        displayTracks: false,
        displayPlaylists: true
      });
    } else {
      this.setState({
        displayTracks: true,
        displayPlaylists: false
      });
    }
  },

  render: function() {
    var tabDisplay;
    if (this.state.displayTracks) {
      tabDisplay = <UserTracks user={this.state.currentUser} />;
    } else {
      tabDisplay = <UserPlaylists user={this.state.currentUser}/>;
    }

    return (
      <div className="user-profile">
        <UserDetail user={this.state.currentUser} />
        <h2 className="user-tracks-title">Your uploaded tracks:</h2>
        <div className="user-tracks-form" >
          <UploadTrack />
          <div className="user-track-list">
            <div className="track-playlist-tabs">
              <button className="tab" id="track-tab" onClick={this.handleTabClick}>Tracks</button>
              <button className="tab" id="playlist-tab" onClick={this.handleTabClick}>Playlists</button>
            </div>
            {tabDisplay}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserProfile;
