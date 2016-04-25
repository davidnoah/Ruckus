# Ruckus

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Ruckus is a music-sharing and streaming web application inspired by SoundCloud that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for a SoundCloud-inspired site: music listening, music uploading, and organization of music within playlists
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README

## Product Goals and Priorities

Ruckus will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Upload and listen to music tracks (MVP)
- [ ] Organize music within playlists (MVP)
- [ ] Search by track, artist, or genre to find new music (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin
  - [ ] `Login`
  - [ ] `Signup` Components
  ** There is potential use for third-party auth help here. My plan at this moment is to create all the auth myself, assuming that it integrates very easily into React.

This phase is all about creating the ability to Sign In and out of Ruckus while also being able to Sign Up. It will be important to remember to create a GUEST login!

### Phase 2: Track Model, API, and basic APIUtil (1.5 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

- [ ] create `Track` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for tracks (`TracksController`)
- [ ] jBuilder views for tracks
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

Tracks must have a title and description, along with the actual audio url and image url. It will be important for keeping the seed data nice and pretty! In this phase, we are still dealing with the backend.. Looking forward, Ill also add a 'num_of_views' column for easy sorting on the Explore page.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Tracks can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each track component, building out the flux loop as needed.
  - [ ] `TrackIndex`
  - [ ] `TrackIndexItem`
  - [ ] `TrackDetail`
  - [ ] `TrackForm`
  - [ ] `SearchIndex`
- Build out Search functionality

This is a very important phase. Here I will begin to build out the logic for actually rendering a track. The track components will ultimately give me the ability to render all the tracks at once, or one at a time. Also, in this phase I want to implement the ability to search for a track by genre, artist, or album.

### Phase 4: Build the Player(1 day)

**Objective** The Player will be initialized on play, and Player will continue
to play during other rendering.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- [ ] ensure track plays
- [ ] ensure track stays playing while other actions are taken

In my opinion, this is the most crucial phase. I must implement the ability to play a track! The track must remain playing no matter what the user does. If other urls are rendered, the track will remain. My initial game plan is to create a React store solely for the music player.

### Phase 5: Start Styling (0.5 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 6: Playlists (1 day)

**Objective:** Tracks can be in a playlist, and could be viewed within a playlist.

- [ ] create `Playlist` model
- build out API, Flux loop, and components for:
  - [ ] Playlist CRUD
  - [ ] any track can be added to a playlist
  - [ ] moving tracks to a different playlist
  - [ ] viewing tracks within a playlist
- Use CSS to style new views

In this phase I will need to not only migrate a playlist table but also migrate a join table called `playlistings`. This will allow me to simulate a many to many relationship. A track doesn't necessarily always belong to a playlist.

### Phase 7: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Add comments to each track
- [ ] Pagination / infinite scroll for Tracks Index
- [ ] Reward users for listening to new music
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-six]: ./docs/phases/phase6.md
