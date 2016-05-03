var React = require('react');
var ClientActions = require('../actions/client_actions');

var PlayButton = React.createClass({
  handleClick: function() {
    ClientActions.playTrack(this.props.track);
  },

  render: function() {
    return (
      <div className="stream-play-button" onClick={this.handleClick}>
        ▶
      </div>
    );
  }
});

module.exports = PlayButton;
