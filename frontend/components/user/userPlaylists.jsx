var React = require('react');
var ClientActions = require('../../actions/client_actions');
var PlaylistItem = require('../playlists/playlistItem');
var PlaylistStore = require('../../stores/playlist');

var UserPlaylists = React.createClass({
  getInitialState: function() {
    return {
      playlists: PlaylistStore.findPlaylistsByUser(this.props.user.id),
      playlistName: ""
    };
  },

  componentDidMount: function() {
    this.playlistListener = PlaylistStore.addListener(this.onChange);
    ClientActions.fetchPlaylists();
  },

  componentWillUnmount: function() {
    this.playlistListener.remove();
  },

  onChange: function() {
    this.setState({playlists: PlaylistStore.findPlaylistsByUser(this.props.user.id)});
  },

  createPlaylist: function() {
    var playlist = {playlist: {name: this.state.playlistName, creator_id: this.props.user.id}};
    ClientActions.createPlaylist(playlist);
  },

  handleChange: function(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

  render: function() {
    var user = this.props.user;
      var userPlaylists = this.state.playlists.map(function(playlist) {
        return <PlaylistItem key={playlist.id} user={user} playlist={playlist}/>;
      });

    return (
      <div className='user-playlists' >
        {userPlaylists}
        <form className="create-playlist-form" onSubmit={this.createPlaylist}>
          <input className="create-playlist-text" type="text" value={this.state.playlistName} onChange={this.handleChange} id="playlistName" />
          <input className="create-playlist-button" type="submit" value="Create Playlist" />
        </form>
      </div>
    );
  }

});

module.exports = UserPlaylists;
