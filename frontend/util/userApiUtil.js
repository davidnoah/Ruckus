var UserActions = require('../actions/user_actions.js');

module.exports = {
  checkLoggedIn: function() {
    $.ajax({
      url: 'api/session',
      method: 'GET',
      success: function(response) {
        UserActions.loggedInResponse(response);
      },
      errors: function(response) {
        UserActions.receiveError(response.responseText);
      }
    });
  },

  loginUser: function(formData) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: formData,
      success: function(user) {
        UserActions.loginUser(user);
      },
      error: function(response) {
        console.log(response);
        UserActions.receiveError(response.responseText);
      }
    });
  },

  logoutUser: function() {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success: function() {
        UserActions.logoutUser();
      },
      error: function(response) {
        UserActions.receiveError(response.responseText);
      }
    });
  },

  createUser: function(formData) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: formData,
      success: function(user) {
        UserActions.loginUser(user);
      },
      error: function(response) {
        console.log(response);
        UserActions.receiveError(response.responseText);
      }
    });
  }
};
