var React = require('react');
var ClientActions = require('../../actions/client_actions');
var TrackStore = require('../../stores/track');
var PlayButton = require('../play.jsx');
var PlayStore = require('../../stores/play');
var PauseButton = require('../pause.jsx');

var TrackIndexItem = React.createClass({

  getInitialState: function() {
    return {isPlaying: PlayStore.isTrackPlaying(this.props.track)};
  },

  componentDidMount: function() {
    PlayStore.addListener(this.onChange);
  },

  onChange: function() {
    this.setState({isPlaying: PlayStore.isTrackPlaying(this.props.track)});
  },

  render: function() {
    var track = this.props.track;
    var playPauseButton;
    if (this.state.isPlaying) {
      playPauseButton = <div className="play-button-container">
                           <PauseButton className="play-button" track={track} onClick={this.handleClick}/>
                         </div>;
    } else {
      playPauseButton = <div className="play-button-container">
                          <PlayButton className="play-button" track={track} onClick={this.handleClick}/>
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
