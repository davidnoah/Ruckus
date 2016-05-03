var React = require('react');
var ClientActions = require('../actions/client_actions');

var PauseButton = React.createClass({
  handleClick: function() {
    ClientActions.pauseTrack();
  },

  render: function() {
    return (
      <div className="play-button" onClick={this.handleClick}>
        <i className="fa fa-pause-circle fa-4x" style={{ariaHidden: "true"}}></i>
      </div>
    );
  }
});

module.exports = PauseButton;
