var Dispatcher = require('../dispatcher/dispatcher.js');
var TrackConstants = require('../constants/trackConstants.js');

module.exports = {
  getTracks: function (tracks) {
    Dispatcher.dispatch({
      actionType: TrackConstants.GET_TRACKS,
      tracks: tracks
    });
  },

  getTrack: function(track) {
    Dispatcher.dispatch({
      actionType: TrackConstants.GET_TRACK,
      track: track
    });
  },

  receivePresignedURL: function(presignedUrl) {
    Dispatcher.dispatch({
      actionType: TrackConstants.PRESIGNED_URL_RECEIEVED,
      presignedUrl: presignedUrl
    });
  },

  receivePublicAudioUrl: function(publicUrl) {
    Dispatcher.dispatch({
      actionType: TrackConstants.PUBLIC_AUDIO_URL_RECEIVED,
      publicUrl: publicUrl
    });
  },

  receivePublicImageUrl: function(publicUrl) {
    Dispatcher.dispatch({
      actionType: TrackConstants.PUBLIC_IMAGE_URL_RECEIVED,
      publicUrl: publicUrl
    });
  },

  clearUploadStore: function() {
    Dispatcher.dispatch({
      actionType: TrackConstants.CLEAR_UPLOAD_STORE
    });
  }

};
