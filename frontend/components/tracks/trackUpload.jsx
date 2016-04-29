var React = require('react'),
    FileInput = require('react-file-input'),
    ClientActions = require('../../actions/client_actions.js');

var TrackUpload = React.createClass({

  handleUpload: function(event) {
    event.preventDefault();
    var file = event.target.files[0];
    ClientActions.fetchPresignedUrl('audio/tracks/', file.name);
  },

  render: function() {
    return (
      <div className='track-upload'>
        <form>
          <FileInput name="audioUpload"
                     accept="audio/*"
                     id="audioUpload"
                     className="inputClass"
                     onChange={this.handleUpload} />
        </form>
      </div>
    );
  }
});

module.exports = TrackUpload;
