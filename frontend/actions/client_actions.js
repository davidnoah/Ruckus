UserUtil = require('../util/userApiUtil.js');
TrackUtil = require('../util/trackApiUtil.js');

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
  }
};
