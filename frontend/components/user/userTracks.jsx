var React = require('react');
var TrackStore = require('../../stores/track.js');
var ClientActions = require('../../actions/client_actions');
var Masonry = require('react-masonry-component');
var TrackIndexItem = require('../tracks/trackIndexItem');

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

var UserTracks = React.createClass({
  getInitialState: function() {
    return {userTracks: TrackStore.findTracksByUser(this.props.user.id)};
  },

  componentDidMount: function() {
    console.log("userTracks cdm");
    this.listener = TrackStore.addListener(this.onChange);
    ClientActions.fetchTracks();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  onChange: function() {
      this.setState({userTracks: TrackStore.findTracksByUser(this.props.user.id)});
  },

  render: function() {
    var allTracks;
    console.log(this.state.userTracks);
    if (this.state.userTracks.length !== 0) {
      var shuffledTracks = shuffle(this.state.userTracks);
      allTracks = shuffledTracks.map(function(track) {
        return <TrackIndexItem track={track} key={track.id}/>;
      });
    } else {
      allTracks = <div></div>;
    }

    var masonryOptions = {
      isFitWidth: true
    };

      return (
              <Masonry
                  className={'user-tracklist'}
                  elementType={'ul'}
                  options={masonryOptions}
                  disableImagesLoaded={false}>
                  {allTracks}
              </Masonry>
      );
    }
});

module.exports = UserTracks;
