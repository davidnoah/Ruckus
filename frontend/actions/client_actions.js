UserUtil = require('../util/userApiUtil.js');

module.exports = {
  loginUser: function(user) {
    console.log("client action");
    UserUtil.loginUser(user);
  }
};
