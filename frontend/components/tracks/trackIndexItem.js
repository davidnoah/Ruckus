var React = require('react');
var ClientActions = require('../../actions/client_actions.js');
var TrackStore = require('../../stores/track.js');

var TrackIndexItem = React.createClass({

  render: function() {
    var track = this.props.track;

    return (
      <ul className="track">
        <img className='album-cover' src={track.image_url}/>
        <li className='track-title'>
          {track.title}
        </li>
      </ul>
    );
  }
});

module.exports = TrackIndexItem;
