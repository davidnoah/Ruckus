var UserUtil = require('../util/userApiUtil.js');
var TrackUtil = require('../util/trackApiUtil.js');
var PlaylistUtil = require('../util/playlistApiUtil');

var ClientActions = window.CA = {
  loginUser: function(user) {
    UserUtil.loginUser(user);
  },

  logoutUser: function() {
    UserUtil.logoutUser();
  },

  createUser: function(user) {
    UserUtil.createUser(user);
  },

  checkLoggedIn: function(user) {
    UserUtil.checkLoggedIn();
  },

  fetchTracks: function() {
    TrackUtil.fetchAllTracks();
  },

  createTrack: function(track) {
    TrackUtil.createTrack(track);
  },

  fetchPresignedUrl: function(prefix, filename, file) {
    TrackUtil.getPresignedUrl({prefix: prefix, filename: filename}, this.uploadToS3.bind(null, file));
  },

  uploadToS3: function(presignedUrl, file) {
    TrackUtil.uploadToS3(presignedUrl, file);
  },

  playTrack: function(track) {
    TrackUtil.playTrack(track);
  },

  pauseTrack: function() {
    TrackUtil.pauseTrack();
  },

  resetPlayStore: function() {
    TrackUtil.resetPlayStore();
  },

  fetchPlaylists: function() {
    PlaylistUtil.fetchPlaylists();
  },

  fetchPlaylistTracks: function(id) {
    PlaylistUtil.fetchPlaylistTracks(id);
  },

  addTrackToPlaylist: function(playlistId, trackId) {
    PlaylistUtil.addTrackToPlaylist(playlistId, trackId);
  },

  createPlaylist: function(playlistData) {
    PlaylistUtil.createPlaylist(playlistData);
  }
};

module.exports = ClientActions;
