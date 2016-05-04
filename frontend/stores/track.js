var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var TrackConstants = require('../constants/trackConstants.js');
var TrackStore = new Store(Dispatcher);

_tracks = {};

TrackStore.all = function() {
  var tracks = [];
  for (var id in _tracks) {
    tracks.push(_tracks[id]);
  }
  return tracks;
};

TrackStore.find = function(id) {
  return _tracks[id];
};

TrackStore.findTracksByUser = function(id) {
  tracks = [];
  for (var track in _tracks) {
    if (_tracks[track].uploader_id === id) {
      tracks.push(_tracks[track]);
    }
  }
  return tracks;
};

var resetTracks = function(tracks) {
  _tracks = {};
  tracks.forEach(function(track) {
    _tracks[track.id] = track;
  });
  TrackStore.__emitChange();
};

var resetTrack = function(track) {
  _tracks[track.id] = track;
  TrackStore.__emitChange();
};

TrackStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case TrackConstants.GET_TRACKS:
      resetTracks(payload.tracks);
      break;
    case TrackConstants.GET_TRACK:
      resetTrack(payload.track);
      break;
  }
};

module.exports = TrackStore;
