var React = require('react');
var ReactDOM = require('react-dom');
var ReactPlayer = require('react-player');
var PlayStore = require('../stores/play.js');


var StreamBar = React.createClass({
  getInitialState: function() {
    debugger;
    return {
      currentTrack: PlayStore.currentTrack(),
      isPlaying: PlayStore.isPlaying()
    };
  },

  componentDidMount: function() {
    debugger;
    PlayStore.addListener(this.onChange);
  },

  onChange: function() {
    this.setState({
      currentTrack: PlayStore.currentTrack(),
      isPlaying: PlayStore.isPlaying()
    });
  },

  render: function() {
    debugger;
    var currentTrack = this.state.currentTrack;
    var audio_url;

    if (currentTrack === null) {
      audio_url = "none";
    } else {
      audio_url = currentTrack.audio_url;
    }

    return (
      <div className="stream-bar" >
        <ReactPlayer
          className='track-player'
          url={audio_url}
          playing={this.state.isPlaying} />
      </div>
    );
  }
});

module.exports = StreamBar;
