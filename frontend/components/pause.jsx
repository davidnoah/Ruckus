var React = require('react');
var ClientActions = require('../actions/client_actions');

var PauseButton = React.createClass({
  handleClick: function() {
    ClientActions.pauseTrack();
  },

  render: function() {
    return (
      <div className="pause-button">
        ▶ Pause
      </div>
    );
  }
});

module.exports = PauseButton;
