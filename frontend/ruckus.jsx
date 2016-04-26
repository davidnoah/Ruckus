var React = require('react'),
    ReactDOM = require('react-dom'),

    Router = require('react-router').Router,
    Route = require('react-router').Route,
    HashHistory = require('react-router').hashHistory;

    window.apiUtil = require('./util/userApiUtil.js');
var Login = require('./components/login.jsx');
var Signup = require('./components/signup.jsx');

// var routes = (
//   <Route path="/" component={Login}>
//   </Route>
// );

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Signup />,
    document.getElementById('root')
  );
});
