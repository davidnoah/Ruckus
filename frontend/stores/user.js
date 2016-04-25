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
