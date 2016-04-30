var React = require('react'),
    FileInput = require('react-file-input'),
    UploadStore = require('../../stores/upload'),
    SessionStore = require('../../stores/session'),
    ClientActions = require('../../actions/client_actions.js');

var TrackUpload = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      description: "",
      audioUrl: "",
      uploaderId: SessionStore.currentUser().id
    };
  },

  componentDidMount: function() {
    UploadStore.addListener(this.onAudioUpload);
  },

  onAudioUpload: function() {
      this.state.audioUrl = UploadStore.getAudioUrl();
      document.getElementById('submitTrack').disabled = false;
  },

  onChange: function(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

  handleUpload: function(e) {
    e.preventDefault();
    var file = e.target.files[0];
    ClientActions.fetchPresignedUrl("audio/tracks", file.name, file);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var track = {track: {
      title: this.state.title,
      description: this.state.description,
      audio_url: this.state.audioUrl,
      uploader_id: this.state.uploaderId
    }};
    ClientActions.createTrack(track);
    this.props.parent.closeModal();
  },

  render: function() {
    return (
      <div className='uploadForm'>
        <h1>Track Upload</h1>
        <form className='upload' onSubmit={this.handleSubmit}>

          <label className="formLabel">
            Title:
            <br/>
            <input type="text"
              className="textbox"
              value={this.state.title}
              onChange={this.onChange}
              id="title" />
          </label>
          <br/>

          <label className="formLabel">
            Description:
            <br/>
            <input type="text"
              className="textbox"
              value={this.state.description}
              onChange={this.onChange}
              id="description" />
          </label>
          <br/>

          <label className="formLabel">
            Audio File:
            <FileInput name="fileInput"
                       accept="audio/*"
                       id="fileInput"
                       className="fileInput"
                       onChange={this.handleUpload}/>
          </label>

          <input type="submit" id="submitTrack" value="Upload Track" disabled="true"/>
        </form>
      </div>
    );
  }
});

module.exports = TrackUpload;
