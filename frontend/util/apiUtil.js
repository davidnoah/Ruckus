var ServerActions = require('../actions/server_actions.js');

module.exports = {
  loginUser: function(formData) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: formData,
      success: function(user) {
        console.log(user);
        ServerActions.loginUser(user);
      }
    });
  }
};
