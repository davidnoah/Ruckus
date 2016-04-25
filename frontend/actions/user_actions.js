var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

module.exports = {
  fetchCurrentUser: function () {

  },

  loginUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN_RECIEVED,
      user: user
    });
  },

  logoutUser: function () {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGOUT_RECIEVED,
    });
  },

  createUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.CREATE_USER,
      user: user
    });
  },

  destroyUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.DESTROY_USER,
      user: user
    });
  },

  recieveError: function(error) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECIEVE_ERROR,
      error: error
    });
  }
};
