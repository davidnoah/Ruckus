var TrackActions = require('../actions/track_actions.js');

module.exports = {
  fetchAllTracks: function() {
    $.ajax({
      url: 'api/tracks',
      method: 'GET',
      success: function(tracks) {
        TrackActions.getTracks(tracks);
      }
    });
  },

  getPresignedUrl: function(data, callback) {
    $.ajax({
      url: 'api/upload',
      method: 'GET',
      data: {prefix: data.prefix, filename: data.filename},
      success: function(url) {
        callback(url);
      }
    });
  },

  uploadToS3: function(file, url) {
    var presignedUrl = url.presigned_url;
    var publicUrl = url.public_url;
    var filetype = file.type;
    console.log(url);

    var xhr = new XMLHttpRequest();

    xhr.open('PUT', presignedUrl, true);
    xhr.setRequestHeader("Content-Type", filetype);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (file.type.match(/^audio.*$/) !== null) {
          TrackActions.receivePublicAudioUrl(publicUrl);
        } else {
          TrackActions.receivePublicImageUrl(publicUrl);
        }
      }
    };
    xhr.send(file);
  },

  createTrack: function(track) {
    $.ajax({
      url: 'api/tracks',
      method: 'POST',
      data: track,
      success: function(track) {
        TrackActions.getTrack(track);
      }
    });
  },

  playTrack: function(track) {
    TrackActions.playTrack(track);
  },

  pauseTrack: function() {
    TrackActions.pauseTrack();
  }
};
