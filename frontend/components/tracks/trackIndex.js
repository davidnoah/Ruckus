
var React = require('react');
var ClientActions = require('../../actions/client_actions.js');
var TrackIndexItem = require('./trackIndexItem.js');
var TrackStore = require('../../stores/track.js');
var Masonry = require('react-masonry-component');

var shuffle = function(array) {
  var newArray = array;
  var currentIndex = newArray.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
};

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
    var shuffledTracks = shuffle(this.state.tracks);
    var allTracks = shuffledTracks.map(function(track) {
      return <TrackIndexItem track={track} key={track.id}/>;
    });


    return (
      <Masonry
                className={'trackList'}
                elementType={'ul'}
                disableImagesLoaded={false}
            >
                {allTracks}
            </Masonry>
    );
  }
});

module.exports = TrackIndex;
