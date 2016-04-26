var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userCobstants.js');

var UserStore = new Store(Dispatcher);

var _users = {};

UserStore.all = function () {
  return Object.assign({}, _users);
};

var addUser = function() {
  _users[user.id] = user;
};

var findUser = function(id) {
  return _user[id];
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.CREATE_USER:
      addUser(payload.user);
      break;
  }
};
