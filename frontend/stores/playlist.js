var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var PlaylistConstants = require('../constants/playlistConstants.js');
var PlaylistStore = new Store(Dispatcher);

let _playlists = {};

PlaylistStore.all = function() {
  var playlist = [];
  for (var id in _playlists) {
    playlist.push(_playlists[id]);
  }
  return playlist;
};

PlaylistStore.find = function(id) {
  return _playlist[id];
};

PlaylistStore.findPlaylistsByUser = function(id) {
  playlists = [];
  for (var playlist in _playlists) {
    if (_playlists[playlist].creator_id === id) {
      playlists.push(_playlists[playlist]);
    }
  }
  return playlists;
};

var resetPlaylists = function(playlists) {
  _playlists = {};
  playlists.forEach(function(playlist) {
    _playlists[playlist.id] = playlist;
  });
  PlaylistStore.__emitChange();
};

var addPlaylist = function(playlist) {
  _playlists[playlist.id] = playlist;
  PlaylistStore.__emitChange();
};

PlaylistStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PlaylistConstants.GET_PLAYLISTS:
      resetPlaylists(payload.playlists);
      break;
    case PlaylistConstants.ADD_PLAYLIST:
      addPlaylist(payload.playlist);
      break;
  }
};

module.exports = PlaylistStore;
