var React = require('react');
var SessionStore = require('../../stores/session');
var UserTracks = require('./userTracks');
var UploadTrack = require('./userUploadForm');
var UserDetail = require('./userDetail');
var UserPlaylists = require('./userPlaylists');

var UserProfile = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser(),
      displayTracks: true,
      displayPlaylists: false,
      activeTab: "Tracks"
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
        displayPlaylists: true,
        activeTab: "Playlists"
      });
    } else {
      this.setState({
        displayTracks: true,
        displayPlaylists: false,
        activeTab: "Tracks"
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

    if (this.state.activeTab === "Tracks") {
      trackTab = <button className="tab" id="track-tab" onClick={this.handleTabClick}>Tracks</button>;
      playlistTab = <button className="tab" style={{opacity: 0.6}} id="playlist-tab" onClick={this.handleTabClick}>Playlists</button>;
    } else {
      trackTab = <button className="tab" id="track-tab" style={{opacity: 0.6}} onClick={this.handleTabClick}>Tracks</button>;
      playlistTab = <button className="tab" id="playlist-tab" onClick={this.handleTabClick}>Playlists</button>;
    }

    return (
      <div className="user-profile">
        <UserDetail user={this.state.currentUser} />
        <h2 className="user-tracks-title">Your uploaded tracks:</h2>
        <div className="user-tracks-form" >
          <UploadTrack />
          <div className="user-track-list">
            <div className="track-playlist-tabs">
              {trackTab}
              {playlistTab}
            </div>
            {tabDisplay}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserProfile;
