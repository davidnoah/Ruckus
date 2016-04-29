var React = require('react'),
    FileInput = require('react-file-input'),
    UploadStore = require('../../stores/upload'),
    ClientActions = require('../../actions/client_actions');

var TrackUpload = React.createClass({
  getInitialState: function() {
    return {
      audioUrl: "",
      presignedAudioUrl: ""
    };
  },

  componentDidMount: function() {
    ClientActions.clearUploadStore();
    UploadStore.addListener(this.onChange);
  },

  onChange: function() {
    if (typeof this.state.presigned_url === "string") {}
      this.setState({presignedAudioUrl: UploadStore.getPresignedAudioUrl()});
  },

  handleUpload: function(event) {
    event.preventDefault();
    var file = event.target.files[0];
    ClientActions.fetchPresignedUrl('audio/tracks/', file.name, this.handleDirectUpload);
    debugger;
    this.handleDirectUpload(this.state.presignedUrl, file);
  },

  handleDirectUpload: function(presigned_url, file) {
    ClientActions.uploadToS3(presigned_url, file);
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
