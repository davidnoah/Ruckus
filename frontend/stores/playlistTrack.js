var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var PlaylistConstants = require('../constants/playlistConstants.js');

var PlaylistTrackStore = new Store(Dispatcher);

let _playlistTracks = {};

var addPlaylistTrack = function(playlistId, track) {
  _playlistTracks[playlistId].push(track);
  PlaylistTrackStore.__emitChange();
};

var setPlaylist = function(playlistId, tracks) {
  _playlistTracks[playlistId] = tracks;
  PlaylistTrackStore.__emitChange();
};

PlaylistTrackStore.findAllTracksByPlaylist = function(playlistId) {
  return _playlistTracks[playlistId];
};

PlaylistTrackStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PlaylistConstants.GET_PLAYLIST_TRACKS:
      setPlaylist(payload.playlistId, payload.tracks);
      break;
    case PlaylistConstants.ADD_PLAYLIST_TRACK:
      addPlaylistTrack(payload.playlistId, payload.track);
      break;
  }
};

module.exports = PlaylistTrackStore;
