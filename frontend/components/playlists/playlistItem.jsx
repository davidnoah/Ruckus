var React = require('react');
var ClientActions = require('../../actions/client_actions');
var PlaylistTrackStore = require('../../stores/playlistTrack.js');
var PlaylistTrackItem = require('./playlistTrackItem.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      open: false,
      playlistTracks: PlaylistTrackStore.findAllTracksByPlaylist(this.props.playlist.id)
    };
  },

  componentDidMount: function() {
    this.playlistTrackListener = PlaylistTrackStore.addListener(this.onChange);
    ClientActions.fetchPlaylistTracks(this.props.playlist.id);
  },

  onChange: function() {
    this.setState({playlistTracks: PlaylistTrackStore.findAllTracksByPlaylist(this.props.playlist.id)});
  },

  componentWillUnmount: function() {
    this.playlistTrackListener.remove();
  },

  openPlaylist: function() {
    this.setState({open: true});
  },

  closePlaylist: function() {
    this.setState({open: false});
  },

  render: function() {
    var visableTracks;
    var openCloseButton;

    if (this.state.open && this.state.playlistTracks !== undefined) {
      openCloseButton = <i className="fa fa-minus-square-o" onClick={this.closePlaylist} style={{ariaHidden: "true"}}></i>;
      visableTracks = this.state.playlistTracks.map(function(track) {
        return <PlaylistTrackItem key={track.id} track={track} />;
      });
    } else {
      visableTracks = <div></div>;
      openCloseButton = <i className="fa fa-plus-square-o" onClick={this.openPlaylist} style={{ariaHidden: "true"}}></i>;
    }

    return (
      <ul className="user-playlist-item" >
        <div className="playlist-title">
          {openCloseButton}
          <p className="playlist-name">{this.props.playlist.name}</p>
        </div>
        {visableTracks}
      </ul>
    );
  }
});
