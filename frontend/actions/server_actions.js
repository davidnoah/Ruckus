var Dispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/sessionConstants.js');

module.exports = {
  loginUser: function (user) {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN_RECIEVED,
      user: user
    });
  }
};
