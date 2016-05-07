var React = require('react'),
    ReactDOM = require('react-dom'),
    Modal = require('react-modal'),

    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    HashHistory = require('react-router').hashHistory,

    App = require('./components/app.jsx'),
    SessionStore = require('./stores/session.js'),
    Signup = require('./components/auth/signup.jsx'),
    Login = require('./components/auth/login.jsx'),
    Splash = require('./components/splash.jsx'),
    ClientActions = require('./actions/client_actions'),
    UserProfile = require('./components/user/userProfile'),
    TrackIndex = require('./components/tracks/trackIndex.js');

    window.TrackStore = require('./stores/track.js');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />
    <Route path="explore" component={TrackIndex} />
    <Route path="user/:id/music" component={UserProfile} />
  </Route>
);
ClientActions.checkLoggedIn();


document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('root');
  Modal.setAppElement('#root');

  ReactDOM.render(<Router history={HashHistory}>{routes}</Router>, root);

});
