var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

module.exports = {

  loginUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN_USER,
      user: user
    });
  },

  logoutUser: function () {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGOUT_USER,
    });
  },

  destroyUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.DESTROY_USER,
      user: user
    });
  },

  receiveError: function(error) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_ERROR,
      error: error
    });
  },

  loggedInResponse: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGGEDIN_RESPONSE,
      user: user
    });
  }
};
