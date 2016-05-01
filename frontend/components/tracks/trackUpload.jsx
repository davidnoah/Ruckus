var React = require('react'),
    FileInput = require('react-file-input'),
    UploadStore = require('../../stores/upload'),
    SessionStore = require('../../stores/session'),
    Dropzone = require('react-dropzone'),
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
      this.state.imageUrl = UploadStore.getImageUrl();
      document.getElementById('submitTrack').disabled = false;
  },

  onChange: function(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

  handleAudioUpload: function(event) {
    document.getElementById('submitTrack').disabled = true;
    event.preventDefault();
    var file = event.target.files[0];
    ClientActions.fetchPresignedUrl("audio/tracks", file.name, file);
  },

  handleImageUpload: function(file) {
    document.getElementById('submitTrack').disabled = true;
    ClientActions.fetchPresignedUrl("images/tracks", file[0].name, file[0]);
  },

  handleSubmit: function(event) {
    debugger;
    event.preventDefault();
    var track = {track: {
      title: this.state.title,
      description: this.state.description,
      audio_url: this.state.audioUrl,
      image_url: this.state.imageUrl,
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
                       onChange={this.handleAudioUpload}/>
          </label>

          <Dropzone onDrop={this.handleImageUpload} multiple={false} >
          <p>
            Drag and drop the album artwork here. (optional)
          </p>
          </Dropzone>

          <input type="submit" id="submitTrack" value="Upload Track" disabled="true"/>
        </form>
      </div>
    );
  }
});

module.exports = TrackUpload;
