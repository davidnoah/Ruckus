var React = require('react'),
    ReactDOM = require('react-dom'),

    Router = require('react-router').Router,
    Route = require('react-router').Route,
    HashHistory = require('react-router').hashHistory,

    SessionStore = require('./stores/session.js');
    window.Signup = require('./components/signup.jsx');
    Login = require('./components/login.jsx');

window.apiUtil = require('./util/userApiUtil.js');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Signup />,
    document.getElementById('root')
  );
});
