var React = require('react');
var ClientActions = require('../actions/client_actions');

var PlayButton = React.createClass({
  handleClick: function() {
    ClientActions.playTrack(this.props.track);
  },

  render: function() {
    return (
      <div className="play-button" onClick={this.handleClick}>
        <i className="fa fa-play-circle fa-3x" style={{ariaHidden: "true"}}></i>
      </div>
    );
  }
});

module.exports = PlayButton;
