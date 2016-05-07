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
      imageUrl: "",
      uploaderId: SessionStore.currentUser().id
    };
  },

  componentDidMount: function() {
    this.uploadlistener = UploadStore.addListener(this.onAudioUpload);
  },

  componentWillUnmount: function() {
    this.uploadlistener.remove();
  },

  onAudioUpload: function() {
      this.setState({audioUrl: UploadStore.getAudioUrl()});
      this.setState({imageUrl: UploadStore.getImageUrl()});
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
    var picturePreview;
    if (this.state.imageUrl) {
      picturePreview = {backgroundImage: "url(" + this.state.imageUrl + ")"};
    } else {
      picturePreview = {};
    }

    return (
      <div className='uploadForm'>
        <div className="modal-title-container" >
          <h3 className="modal-title">Upload Track</h3>
          <button className="close-modal-button" onClick={this.props.parent.closeModal}>X</button>
        </div>

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

          <label className="formInputLabel">
            <FileInput name="fileInput"
                       accept="audio/*"
                       id="fileInput"
                       placeholder="Choose File"
                       className="fileInput"
                       onChange={this.handleAudioUpload}/>
          </label>
          <br/>

          <Dropzone className="drop-zone" style={picturePreview} onDrop={this.handleImageUpload} multiple={false} >
            <p className="drop-text">
              Drag and drop the album artwork here.
            </p>
          </Dropzone>
          <br/>

          <input type="submit" className="submit-button" id="submitTrack" value="Upload Track" disabled="true"/>
        </form>
      </div>
    );
  }
});

module.exports = TrackUpload;
