var React = require('react');
var ReactDOM = require('react-dom');
var ReactPlayer = require('react-player');
var PlayButton = require('./streamplay.jsx');
var PauseButton = require('./streampause.jsx');
var PlayStore = require('../stores/play.js');
var ProgressBar = require('react-progressbar');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      trackDuration: 0,
      trackElapsed: 0,
      currentTrack: PlayStore.currentTrack(),
      isPlaying: PlayStore.isPlaying(),
      progress: 0
    };
  },

  componentDidMount: function() {
    PlayStore.addListener(this.onChange);
  },

  onDuration: function(duration) {
    this.setState({trackDuration: duration});
  },

  secondsToHms: function(d) {
    d = Number(d);
    var m = Math.floor(d % 3600 / 60).toString();
    var s = Math.floor(d % 3600 % 60).toString();
    if (parseInt(s) < 10) {
      s = "0" + s;
    }
    return m + ":" + s;
  },

  onChange: function() {
    if (this.state.currentTrack !== PlayStore.currentTrack()) {
      this.setState({progress: 0, trackElapsed: 0});
    }
    this.setState({
      currentTrack: PlayStore.currentTrack(),
      isPlaying: PlayStore.isPlaying()
    });
  },

  onEnded: function() {
    this.setState({
      progress: 0,
      trackDuration: 0,
      trackElapsed: 0
    });
    ClientActions.resetPlayStore();
  },

  onProgress: function() {
    this.setState({
      trackElapsed: this.state.trackElapsed + 1,
      progress: (this.state.trackElapsed / this.state.trackDuration) * 100
    });
  },

  playPauseButton: function() {
    if (this.state.isPlaying) {
      return (<div className='stream-play-container'>
                <PauseButton className='stream-play-button' track={this.state.currentTrack} parent={this} />
              </div>);
    } else {
      return (<div className='stream-play-container'>
                <PlayButton className='stream-play-button' track={this.state.currentTrack} parent={this} />
              </div>);
    }
  },

  render: function() {
    var currentTrack = this.state.currentTrack;
    var audio_url;

    if (currentTrack === null) {
      audio_url = "none";
    } else {
      audio_url = currentTrack.audio_url;
    }

    var playPauseButton = this.playPauseButton();

    var imageUrl;
    var trackTitle;
    if (currentTrack === null) {
      imageUrl = "http://res.cloudinary.com/davidnoah/image/upload/v1461518868/cassette_default_qem6y3.png";
      trackTitle = "You could be listening to music...";
    } else {
      imageUrl =  currentTrack.image_url;
      trackTitle = currentTrack.title;
    }
    return (
      <ul className="stream-bar" >
        <div className="stream-section" >
          <img className="stream-album-image" src={imageUrl} />
          {playPauseButton}
          <p className="stream-track-title">{trackTitle}</p>
        </div>
        <div className="stream-section" >
          <p className="stream-track-time">{this.secondsToHms(this.state.trackElapsed)}</p>
          <ProgressBar completed={this.state.progress} style={{backgroundColor: 'white'}} />
          <p className="stream-track-time">{this.secondsToHms(this.state.trackDuration)}</p>
        </div>
      </ul>
    );
  }
});
