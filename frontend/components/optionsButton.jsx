var React = require('react');
var ClientActions = require('../actions/client_actions');

var OptionsButton = React.createClass({
  render: function() {
    return (
      <i className="fa fa-ellipsis-h fa-2x" style={{ariaHidden: "true"}}></i>
    );
  }
});

module.exports = OptionsButton;
