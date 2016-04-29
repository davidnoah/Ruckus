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

  getPresignedUrl: function(data) {
    $.ajax({
      url: 'api/upload',
      method: 'GET',
      data: {prefix: data.prefix, filename: data.filename},
      success: function(url) {
        console.log(url);
      }
    });
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
