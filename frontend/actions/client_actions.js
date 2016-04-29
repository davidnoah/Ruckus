var UserUtil = require('../util/userApiUtil.js');
var TrackUtil = require('../util/trackApiUtil.js');

module.exports = {
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

  fetchPresignedUrl: function(prefix, filename) {
    TrackUtil.getPresignedUrl({prefix: prefix, filename: filename});
  },

  uploadToS3: function(presignedUrl, file) {
    TrackUtil.uploadToS3(presignedUrl, file);
  },

  clearUploadStore: function() {
    TrackActions.clearUploadStore();
  }
};
