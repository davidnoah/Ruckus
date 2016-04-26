var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userCobstants.js');

var UserStore = new Store(Dispatcher);

var _users = {};

UserStore.all = function () {
  return Object.assign({}, _users);
};

UserStore.__onDispatch = function (payload) {

};
