var React = require('react'),
    ReactDOM = require('react-dom'),
    Modal = require('react-modal'),

    Router = require('react-router').Router,
    Route = require('react-router').Route,
    HashHistory = require('react-router').hashHistory,

    App = require('./components/app.jsx'),
    SessionStore = require('./stores/session.js'),
    Signup = require('./components/auth/signup.jsx'),
    Login = require('./components/auth/login.jsx');

window.apiUtil = require('./util/userApiUtil.js');

document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement('#root');
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});
