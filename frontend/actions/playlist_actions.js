var Dispatcher = require('../dispatcher/dispatcher.js');
var PlaylistConstants = require('../constants/playlistConstants');

module.exports = {
  getPlaylists: function(playlists) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.GET_PLAYLISTS,
      playlists: playlists
    });
  },

  addPlaylist: function(playlist) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.ADD_PLAYLIST,
      playlist: playlist
    });
  },

  fetchPlaylistTracks: function(playlistId, tracks) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.GET_PLAYLIST_TRACKS,
      playlistId: playlistId,
      tracks: tracks
    });
  },

  addPlaylistTrack: function(playlistId, track) {
    Dispatcher.dispatch({
      actionType: PlaylistConstants.ADD_PLAYLIST_TRACK,
      playlistId: playlistId,
      track: track
    });
  }
};
