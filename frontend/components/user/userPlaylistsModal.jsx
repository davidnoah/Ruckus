var React = require('react');
var ClientActions = require('../../actions/client_actions');
var PlaylistItem = require('../playlists/playlistItemModal');
var PlaylistStore = require('../../stores/playlist');

var UserPlaylists = React.createClass({
  getInitialState: function() {
    return {
      playlists: PlaylistStore.findPlaylistsByUser(this.props.user.id)
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

  render: function() {
    var user = this.props.user;
    var track = this.props.track;
      var userPlaylists = this.state.playlists.map(function(playlist) {
        return <PlaylistItem key={playlist.id} user={user} track={track} playlist={playlist}/>;
      });

    return (
      <div className='user-playlists-modal' >
        {userPlaylists}
      </div>
    );
  }

});
module.exports = UserPlaylists;
