var React = require('react');
var ClientActions = require('../../actions/client_actions');
var PlayButton = require('../streamplay.jsx');
var PauseButton = require('../streampause.jsx');
var PlayStore = require('../../stores/play');

var PlaylistTrackItem = React.createClass({
  getInitialState: function() {
    return {
      isPlaying: PlayStore.isTrackPlaying(this.props.track)
    };
  },

  componentDidMount: function() {
    this.playStoreListener = PlayStore.addListener(this.onChange);
  },

  componentWillUnmount: function () {
    this.playStoreListener.remove();
  },

  onChange: function() {
    this.setState({isPlaying: PlayStore.isTrackPlaying(this.props.track)});
  },

  render: function() {
    var playPauseButton;
    if (this.state.isPlaying) {
      playPauseButton = <PauseButton track={this.props.track} />;
    } else {
      playPauseButton = <PlayButton track={this.props.track} />;
    }

    return (
      <div className="playlist-track" >
        <img className="playlist-track-album" src={this.props.track.image_url} />
        {playPauseButton}
        <p className="playlist-track-title">{this.props.track.title}</p>
      </div>
    );
  }
});

module.exports = PlaylistTrackItem;
