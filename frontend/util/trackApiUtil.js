var TrackActions = require('../actions/track_actions.js');
var TrackUpload = require('../components/tracks/trackUpload');

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

  getPresignedUrl: function(data) {
    $.ajax({
      url: 'api/upload',
      method: 'GET',
      data: {prefix: data.prefix, filename: data.filename},
      success: function(url) {
        TrackActions.receivePresignedURL(url.presigned_url);

      }
    });
  },

  uploadToS3: function(presignedUrl, file) {
    console.log("uploadtoS3", presignedUrl, file);
    var xhr = new XMLHttpRequest();

    xhr.open('PUT', presignedUrl, true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        TrackActions.receivePublicUrl(xhr);
      }
    };
    xhr.send(file);
  },

  createTrack: function(data) {
    $.ajax({
      url: 'api/tracks',
      method: 'POST',
      data: data,
      success: function(response) {
        console.log('ajax success', response);
      }
    });
  }
};
