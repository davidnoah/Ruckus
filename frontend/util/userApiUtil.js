var UserActions = require('../actions/user_actions.js');

module.exports = {
  loginUser: function(formData) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: formData,
      success: function(user) {
        UserActions.loginUser(user);
      },
      error: function(response) {
        UserActions.recieveError(error.responseText);
      }
    });
  }
};
