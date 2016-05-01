var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var TrackConstants = require('../constants/trackConstants.js');

var _publicAudioUrl = null;
var _publicImageUrl = null;
var _presignedAudioUrl = null;

var UploadStore = new Store(Dispatcher);

UploadStore.getAudioUrl = function() {
  return _publicAudioUrl;
};

UploadStore.getImageUrl = function() {
  return _publicImageUrl;
};

UploadStore.getPresignedAudioUrl = function() {
    return _presignedAudioUrl;
};

var setPublicAudioUrl = function(url) {
  _publicAudioUrl = url;
  UploadStore.__emitChange();
};

var setPublicImageUrl = function(url) {
  _publicImageUrl = url;
  UploadStore.__emitChange();
};

var setPresignedAudioUrl = function(url) {
  _presignedAudioUrl = url;
};

UploadStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case TrackConstants.PUBLIC_AUDIO_URL_RECEIVED:
      setPublicAudioUrl(payload.publicUrl);
      break;
    case TrackConstants.PUBLIC_IMAGE_URL_RECEIVED:
      setPublicImageUrl(payload.publicUrl);
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
