var React = require('react');
var ClientActions = require('../../actions/client_actions');
var TrackStore = require('../../stores/track');
var PlayButton = require('../play.jsx');
var PlayStore = require('../../stores/play');
var PauseButton = require('../pause.jsx');
var OptionsButton = require('../optionsButton.jsx');

var TrackIndexItem = React.createClass({

  getInitialState: function() {
    return {
      isPlaying: PlayStore.isTrackPlaying(this.props.track),
      optionsOpen: false
    };
  },

  componentDidMount: function() {
    this.playListener = PlayStore.addListener(this.onChange);
  },

  componentWillUnmount: function() {
    this.playListener.remove();
  },

  onChange: function() {
    this.setState({isPlaying: PlayStore.isTrackPlaying(this.props.track)});
  },

  handleClick: function() {
    if (this.state.isPlaying === true) {
      ClientActions.pauseTrack();
    } else {
      ClientActions.playTrack(this.props.track);
    }
  },

  openOptions: function() {
    this.setState({optionsOpen: true});
  },

  renderPlayPause: function() {
    var playPauseButton;
    var track = this.props.track;
    if (this.state.isPlaying) {
      playPauseButton = <div key="pause" className="play-button-container">
                           <PauseButton className="play-button" track={track} />
                         </div>;
    } else {
      playPauseButton = <div key="play" className="play-button-container">
                          <PlayButton className="play-button" track={track} />
                        </div>;
    }
    var options = <div key="options" className="playlist-button-container">
                    <OptionsButton track={track} onClick={this.openOptions}/>
                  </div>;

    return [playPauseButton, options];
  },

  renderOptions: function() {
    return (
      <div className="options-container" >
        <div className="options-button-container" >
          <p>Add to Playlist</p>
        </div>
        <div className="option-button-container" >
          <p>Add to Queue</p>
        </div>
      </div>
    );
  },

  render: function() {
    var track = this.props.track;

    var content = (this.state.optionsOpen) ? this.renderOptions() : this.renderPlayPause();
    backgroundImage = {backgroundImage: "url(" + track.image_url + ")"};
    return (
      <div className="track hvr-shrink" style={backgroundImage} key={track.id} id={track.id} onClick={this.handleClick}>
          {content}
        <div className="track-title-container">
          <p className="track-title">{track.title}</p>
        </div>
      </div>
    );
  }
});

module.exports = TrackIndexItem;
