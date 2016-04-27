var React = require('react');
var ClientActions = require('../../actions/client_actions.js');
var TrackStore = require('../../stores/track.js');

var TrackIndexItem = React.createClass({

  render: function() {
    var track = this.props.track;

    return (
      <ul className="track">
        <li className='trackTitle'>
          {track.title}
        </li>
        <li className='trackImage'>
          <img src={track.image_url}/>
        </li>
      </ul>
    );
  }
});

module.exports = TrackIndexItem;
