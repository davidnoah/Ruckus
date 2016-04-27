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
  }
};
