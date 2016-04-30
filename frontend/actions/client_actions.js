var UserUtil = require('../util/userApiUtil.js');
var TrackUtil = require('../util/trackApiUtil.js');

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
    console.log(track);
    TrackUtil.createTrack(track);
  },

  fetchPresignedUrl: function(prefix, filename, file) {
    TrackUtil.getPresignedUrl({prefix: prefix, filename: filename}, this.uploadToS3.bind(null, file));
  },

  uploadToS3: function(presignedUrl, file) {
    TrackUtil.uploadToS3(presignedUrl, file);
  },

  clearUploadStore: function() {
    TrackActions.clearUploadStore();
  }
};

module.exports = ClientActions;
