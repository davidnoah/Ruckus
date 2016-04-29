var React = require('react');
var ClientActions = require('../../actions/client_actions.js');
var TrackStore = require('../../stores/track.js');
var ReactPlayer = require('react-player');

var TrackIndexItem = React.createClass({
  getInitialState: function() {
    return {playing: false};
  },

  handleClick: function() {
    this.setState({playing: !this.state.playing});
  },

  render: function() {
    var track = this.props.track;
    return (
      <ul className="track" key={track.id}>
        <img className='album-cover' src={track.image_url} onClick={this.handleClick} />
        <li className='track-title' onClick={this.handleClick}>
          {track.title}
        </li>
        <ReactPlayer
          className='track-player'
          url={track.audio_url}
          playing={this.state.playing} />
      </ul>
    );
  }
});

module.exports = TrackIndexItem;