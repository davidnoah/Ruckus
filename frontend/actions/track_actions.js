var Dispatcher = require('../dispatcher/dispatcher.js');
var TrackConstants = require('../constants/trackConstants.js');
var TrackUtil = require('../util/trackApiUtil.js');

module.exports = {
  getTracks: function (tracks) {
    Dispatcher.dispatch({
      actionType: TrackConstants.GET_TRACKS,
      tracks: tracks
    });
  }
};
