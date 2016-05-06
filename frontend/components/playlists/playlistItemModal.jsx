var React = require('react');
var ClientActions = require('../../actions/client_actions');
var PlaylistTrackStore = require('../../stores/playlistTrack.js');
var PlaylistTrackItem = require('./playlistTrackItem.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      disabled: false,
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

  addTrack: function() {
    ClientActions.addTrackToPlaylist(this.props.playlist.id, this.props.track.id);
  },

  componentWillUnmount: function() {
    this.playlistTrackListener.remove();
  },

  render: function() {
    if (this.state.playlistTracks !== undefined) {
      if (this.state.playlistTracks.indexOf(this.props.track) === -1) {
        return (
          <div className="playlist-button-modal">
            <button onClick={this.addTrack} className="add-track-playlist-button">{this.props.playlist.name}</button>
          </div>
        );
      } else {
        return (
          <div className="playlist-button-modal">
            <button className="add-track-playlist-button">{this.props.playlist.name}</button>
            <i className="fa fa-check" style={{ariaHidden: "true"}}></i>
          </div>
        );
      }
    } else {
      return <div></div>;
    }
  }
});
