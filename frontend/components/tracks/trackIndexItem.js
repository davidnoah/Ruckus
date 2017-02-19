var React = require('react');
var ClientActions = require('../../actions/client_actions');
var TrackStore = require('../../stores/track');
var PlayButton = require('../play.jsx');
var PlayStore = require('../../stores/play');
var PauseButton = require('../pause.jsx');
var OptionsButton = require('../optionsButton.jsx');
var UserPlaylists = require('../user/userPlaylistsModal');
var ModalStyle = require('../../constants/playlistModalConstant');
var SessionStore = require('../../stores/session');

var TrackIndexItem = React.createClass({

  getInitialState: function() {
    // Combine options / playlist properties to single state
    return {
      isPlaying: PlayStore.isTrackPlaying(this.props.track),
      optionsOpen: false,
      currentUser: SessionStore.currentUser(),
      playlistListOpen: false
    };
  },

  componentDidMount: function() {
    this.playListener = PlayStore.addListener(this.onChange);
  },

  componentWillUnmount: function() {
    this.playListener.remove();
  },

  onChange: function() {
    this.setState({isPlaying: PlayStore.isTrackPlaying(this.props.track)});
  },

  handleClick: function(event) {
    if (this.state.isPlaying === true) {
      ClientActions.pauseTrack();
    } else {
      ClientActions.playTrack(this.props.track);
    }
  },

  openOptions: function(event) {
    event.stopPropagation();
    this.setState({optionsOpen: true});
  },

  closeOptions: function() {
    this.setState({
      optionsOpen: false,
      playlistListOpen: false
    });
  },

  openPlaylistList: function(event) {
    event.stopPropagation();
    this.setState({
      optionsOpen: false,
      playlistListOpen: true
    });
  },

  stopPropagate: function(event) {
    event.stopPropagation();
    this.setState({
      optionsOpen: false,
      playlistListOpen: false
    });
  },

  renderPlayPause: function() {
    var playPauseButton;
    var track = this.props.track;
    if (this.state.isPlaying) {
      playPauseButton = <div key="pause" className="play-button-container">
                           <PauseButton className="play-button" track={track} />
                         </div>;
    } else {
      playPauseButton = <div key="play" className="play-button-container">
                          <PlayButton className="play-button" track={track} />
                        </div>;
    }
    var options = <div key="options" className="playlist-button-container">
                    <OptionsButton track={track} onClick={this.openOptions}/>
                  </div>;
    var trackTitle = <div key="trackTitle" className="track-title-container">
                        <p className="track-title">{track.title}</p>
                      </div>;

    return [playPauseButton, options, trackTitle];
  },

  renderOptions: function() {
    return (
      <div className="options-container" onMouseLeave={this.closeOptions}>
        <div className="options-button-container" onClick={this.openPlaylistList}>
          <h2 className="options-button" >Add to Playlist</h2>
        </div>
        <div className="options-button-container" >
          <h2 className="options-button">Add to Queue</h2>
        </div>
      </div>
    );
  },

  renderPlaylistList: function() {
    //TODO just return userPlaylists
    var track = this.props.track;
    var userPlaylists = <UserPlaylists key="userPlaylist" user={this.state.currentUser} track={track}/>;
    return (
      <div id="playlists" onMouseLeave={this.closeOptions} onClick={this.stopPropagate} className="add-track-playlist">{userPlaylists}</div>
    );
  },

  render: function() {
    // TODO change to case statement
    var track = this.props.track;

    var content = (this.state.optionsOpen) ? this.renderOptions() : this.renderPlayPause();

    if (this.state.playlistListOpen) {
      content = this.renderPlaylistList();
    }
    let backgroundImage = {backgroundImage: "url(" + track.image_url + ")"};


    return (

      // TODO refactor onmouseleave to here
      <div className="track hvr-shrink" style={backgroundImage} key={track.id} id={track.id} onClick={this.handleClick}>
          {content}
      </div>
    );
  }
});

module.exports = TrackIndexItem;
