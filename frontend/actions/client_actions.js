UserUtil = require('../util/userApiUtil.js');

module.exports = {
  loginUser: function(user) {
    UserUtil.loginUser(user);
  },

  createUser: function(user) {
    UserUtil.createUser(user);
  }
};
