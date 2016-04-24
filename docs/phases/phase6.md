# Phase 6: Playlists

## Rails
### Models
* Playlist

### Controllers
* Api::PlaylistsController (create, destroy, index, show, update)

### Views
* playlists/index.json.jbuilder

## Flux
### Views (React Components)
* PlaylistIndex
  - PlaylistIndexItem
* PlaylistShow
* PlaylistForm

### Stores
* Playlist

### Actions
* ApiActions.receiveAllPlaylists -> triggered by ApiUtil
* ApiActions.receiveSinglePlaylist
* ApiActions.deletePlaylist
* PlaylistActions.fetchAllPlaylists -> triggers ApiUtil
* PlaylistActions.fetchSinglePlaylist
* PlaylistActions.createPlaylist
* PlaylistActions.updatePlaylist
* PlaylistActions.destroyPlaylist

### ApiUtil
* ApiUtil.fetchAllPlaylists
* ApiUtil.fetchSinglePlaylist
* ApiUtil.createPlaylist
* ApiUtil.updatePlaylist
* ApiUtil.destroyPlaylist

## Gems/Libraries
