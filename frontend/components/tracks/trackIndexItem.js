var React = require('react');
var ClientActions = require('../../actions/client_actions');
var TrackStore = require('../../stores/track');
var PlayButton = require('../play.jsx');
var PauseButton = require('../pause.jsx');

var TrackIndexItem = React.createClass({

  getInitialState: function() {
    return {isPlaying: false};
  },

  handleClick: function() {
    console.log("track clicked:", this.props.track);
    if (this.state.isPlaying) {
      ClientActions.pauseTrack();
      this.setState({isPlaying: false});
    } else {
      ClientActions.playTrack(this.props.track);
      this.setState({isPlaying: true});
    }
  },

  render: function() {
    var track = this.props.track;
    var playPauseButton;
    if (this.state.isPlaying) {
      playPauseButton = <div className="play-button-container">
                           <PauseButton className="play-button"/>
                         </div>;
    } else {
      playPauseButton = <div className="play-button-container">
                          <PlayButton className="play-button"/>
                        </div>;
    }
    return (
      <ul className="track hvr-shrink" key={track.id} id={track.id}>
        <img className='album-cover' src={track.image_url} />
          {playPauseButton}
        <div className="track-title-container">
          <p className="track-title">{track.title}</p>
        </div>
      </ul>
    );
  }
});

module.exports = TrackIndexItem;
