var React = require('react');
var ClientActions = require('../../actions/client_actions.js');
var TrackIndexItem = require('./trackIndexItem.js');
var TrackStore = require('../../stores/track.js');

var TrackIndex = React.createClass({
  getInitialState: function() {
    return {
      tracks: TrackStore.all()
    };
  },

  componentDidMount: function() {
    TrackStore.addListener(this.onChange);
    ClientActions.fetchTracks();
  },

  onChange: function() {
    this.setState({tracks: TrackStore.all()});
  },

  render: function() {
    var allTracks = this.state.tracks.map(function(track) {
      console.log(track.image_url);
      return <TrackIndexItem track={track} key={track.id}/>;
    });

    return (
      <ul className = "trackList">
        {allTracks}
      </ul>
    );
  }
});

module.exports = TrackIndex;
