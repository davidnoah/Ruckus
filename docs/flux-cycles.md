# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Note Cycles

### Notes API Request Actions

* `fetchAllTracks`
  0. invoked from `TrackIndex` `didMount`/`willReceiveProps`
  0. `GET /api/tracks` is called.
  0. `receiveAllTracks` is set as the callback.

* `createTrack`
  0. invoked from new note button `onClick`
  0. `POST /api/tracks` is called.
  0. `receiveSingleTrack` is set as the callback.

* `fetchSingleTrack`
  0. invoked from `TrackDetail` `didMount`/`willReceiveProps`
  0. `GET /api/tracks/:id` is called.
  0. `receiveSingleTrack` is set as the callback.

* `uploadTrack`
  0. invoked from `TrackForm` `onSubmit`
  0. `POST /api/track` is called.
  0. `receiveSingleTrack` is set as the callback.

* `destroyTrack`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/tracks/:id` is called.
  0. `removeTrack` is set as the callback.

### Tracks API Response Actions

* `receiveAllTracks`
  0. invoked from an API callback.
  0. `Track` store updates `_tracks` and emits change.

* `receiveSingleTrack`
  0. invoked from an API callback.
  0. `Track` store updates `_track[id]` and emits change.

* `removeTrack`
  0. invoked from an API callback.
  0. `Track` store removes `_track[id]` and emits change.

### Store Listeners

* `TrackIndex` component listens to `Track` store.
* `TrackDetail` component listens to `Track` store.


## Playlist Cycles

### Playlist API Request Actions

* `fetchAllPlaylists`
  0. invoked from `PlaylistsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/playlists` is called.
  0. `receiveAllPlaylists` is set as the callback.

* `createPlaylist`
  0. invoked from new playlist button `onClick`
  0. `POST /api/playlists` is called.
  0. `receiveSinglePlaylist` is set as the callback.

* `fetchSinglePlaylist`
  0. invoked from `PlaylistDetail` `didMount`/`willReceiveProps`
  0. `GET /api/playlists/:id` is called.
  0. `receiveSinglePlaylist` is set as the callback.

* `updatePlaylist`
  0. invoked from `PlaylistForm` `onSubmit`
  0. `POST /api/playlists` is called.
  0. `receiveSinglePlaylist` is set as the callback.

* `destroyPlaylist`
  0. invoked from delete playlist button `onClick`
  0. `DELETE /api/playlists/:id` is called.
  0. `removePlaylist` is set as the callback.

### Notebooks API Response Actions

* `receiveAllPlaylists`
  0. invoked from an API callback.
  0. `Playlist` store updates `_playlists` and emits change.

* `receiveSinglePlaylist`
  0. invoked from an API callback.
  0. `Playlist` store updates `_playlist[id]` and emits change.

* `removePlaylist`
  0. invoked from an API callback.
  0. `Playlist` store removes `_playlists[id]` and emits change.

### Store Listeners

* `PlaylistIndex` component listens to `Playlist` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `TrackSearchBar` `onChange` when there is text
  0. `GET /api/tracks` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `TrackSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
