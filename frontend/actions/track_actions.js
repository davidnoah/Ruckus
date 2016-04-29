var Dispatcher = require('../dispatcher/dispatcher.js');
var TrackConstants = require('../constants/trackConstants.js');
var TrackUtil = require('../util/trackApiUtil.js');

module.exports = {
  getTracks: function (tracks) {
    Dispatcher.dispatch({
      actionType: TrackConstants.GET_TRACKS,
      tracks: tracks
    });
  },

  receivePresignedURL: function(presignedUrl) {
    Dispatcher.dispatch({
      actionType: TrackConstants.PRESIGNED_URL_RECEIEVED,
      presignedUrl: presignedUrl
    });
  },

  receivePublicUrl: function(publicUrl) {
    Dispatcher.dispatch({
      actionType: TrackConstants.PUBLIC_URL_RECEIVED,
      publicUrl: publicUrl
    });
  },

  clearUploadStore: function() {
    Dispatcher.dispatch({
      actionType: TrackConstants.CLEAR_UPLOAD_STORE
    });
  }

};
