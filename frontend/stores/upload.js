var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var TrackConstants = require('../constants/trackConstants.js');

var _publicAudioUrl = null;
var _presignedAudioUrl = null;

var UploadStore = new Store(Dispatcher);

UploadStore.getPublicAudioUrl = function() {
  return _publicAudioUrl;
};

UploadStore.getPresignedAudioUrl = function() {
    return _presignedAudioUrl;
};

var clearStore = function() {
  _presignedAudioUrl = null;
  _publicAudioUrl = null;
};

var setPublicAudioUrl = function(url) {
  _publicAudioUrl = url;
  UploadStore.__emitChange();
};

var setPresignedAudioUrl = function(url) {
  _presignedAudioUrl = url;
};

UploadStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case TrackConstants.PUBLIC_URL_RECEIVED:
      setPublicAudioUrl(payload.publicUrl);
      break;
    case TrackConstants.PRESIGNED_URL_RECEIEVED:
      setPresignedAudioUrl(payload.presignedUrl);
      break;
    case TrackConstants.CLEAR_UPLOAD_STORE:
      clearStore();
      break;
    }
};

module.exports = UploadStore;
