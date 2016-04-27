var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

var SessionStore = new Store(Dispatcher);

var _currentUser = null;
var _authErrors = [];
var _loggedIn = false;

SessionStore.currentUser = function() {
  return _currentUser;
};

var loginUser = function(user) {
    if (user.message !== "No Current User") {
      _currentUser = user;
      _loggedIn = true;
      SessionStore.__emitChange();
    }
};

var logoutUser = function() {
  console.log('user logged out!');
  _loggedIn = false;
  _currentUser = null;
  SessionStore.__emitChange();
};

SessionStore.clearErrors = function() {
  _authErrors = [];
};

SessionStore.allErrors = function() {
  return _authErrors;
};

var recieveError = function(error) {
  var errors = JSON.parse(error);
  if (errors.length >= 1) {
    errors.forEach(function(message) {
      _authErrors.push(message);
    });
  } else {
    _authErrors.push(errors);
  }
  SessionStore.__emitChange();
};


SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.LOGIN_USER:
      loginUser(payload.user);
      break;
    case UserConstants.LOGOUT_USER:
      logoutUser();
      break;
    case UserConstants.ERROR_RECEIVED:
      recieveError(payload.error);
      break;
    case UserConstants.LOGGEDIN_RESPONSE:
      loginUser(payload.user);
      break;
  }

};

module.exports = SessionStore;
