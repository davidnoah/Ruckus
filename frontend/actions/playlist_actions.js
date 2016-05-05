var Dispatcher = require('../dispatcher/dispatcher.js');
var PlaylistConstants = require('../constants/playlistConstants');

module.exports = {
  getPlaylists: function(playlists) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.GET_PLAYLISTS,
      playlists: playlists
    });
  },

  fetchPlaylistTracks: function(playlistId, tracks) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.GET_PLAYLIST_TRACKS,
      playlistId: playlistId,
      tracks: tracks
    });
  }
};
