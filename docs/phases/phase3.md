# Phase 3: Flux Architecture and Track CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* TrackIndex
  - TrackIndexItem
* TrackDetail
  * TrackForm
* SearchIndex

### Stores
* Track

### Actions
* ApiActions.receiveAllTracks -> triggered by ApiUtil
* ApiActions.receiveSingleTrack
* TrackActions.fetchAllTracks -> triggers ApiUtil
* TrackActions.fetchSingleTrack
* TrackActions.createTrack

### ApiUtil
* ApiUtil.fetchAllTracks
* ApiUtil.fetchSingleTrack
* ApiUtil.createTrack

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
