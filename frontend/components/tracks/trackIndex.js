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
    this.trackStoreListener = TrackStore.addListener(this.onChange);
    ClientActions.fetchTracks();
  },

  componentWillUnmount: function() {
    this.trackStoreListener.remove();
  },

  onChange: function() {
    this.setState({tracks: TrackStore.all()});
  },

  render: function() {
    var shuffledTracks = shuffle(this.state.tracks);
    var allTracks = shuffledTracks.map(function(track) {
      return <TrackIndexItem track={track} key={track.id}/>;
    });

    var masonryOptions = {
      isFitWidth: true
    };

    return (
      <Masonry
                className={'trackList'}
                elementType={'div'}
                disableImagesLoaded={false}
                options={masonryOptions}
            >
                {allTracks}
            </Masonry>
    );
  }
});

module.exports = TrackIndex;
