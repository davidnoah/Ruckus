var Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
  loginUser: function (username, password) {
    Dispatcher.dispatch({
      actionType: RuckusConstants.LOGIN_RECIEVED,
      username: username,
      password: password
    });
  }
};
