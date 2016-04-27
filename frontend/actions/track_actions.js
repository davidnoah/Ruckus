var Dispatcher = require('../dispatcher/dispatcher.js');
var TrackConstants = require('../constants/trackConstants.js');

module.exports = {
  getTracks: function (tracks) {
    Dispatcher.dispatch({
      actionType: TrackConstants.GET_TRACKS,
      tracks: tracks
    });
  }
};
