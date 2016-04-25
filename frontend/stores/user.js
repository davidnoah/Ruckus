var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userCobstants.js');

var UserStore = new Store(Dispatcher);

var _currentUser = null;
var _authErrors = [];
var _loggedIn = false;

UserStore.currentUser = function() {
  return _currentUser;
};

var loginUser = function(user) {
  _currentUser = user;
  _loggedIn = true;
};

var logoutUser = function() {
  _loggedIn = false;
  _currentUser = null;
};

UserStore.clearErrors = function() {
  _authErrors = [];
};

UserStore.allErrors = function() {
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
};


UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.LOGIN_RECIEVED:
      loginUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.ERROR_RECIEVED:
      recieveError(payload.error);
      UserStore.__emitChange();
      break;
  }

};

module.exports = UserStore;
