var React = require('react'),
    ReactDOM = require('react-dom'),

    Router = require('react-router').Router,
    Route = require('react-router').Route,
    HashHistory = require('react-router').hashHistory;

    window.apiUtil = require('./util/apiUtil.js');
    Login = require('./components/login.jsx');

// var routes = (
//   <Route path="/" component={Login}>
//   </Route>
// );

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <div>Hello</div>,
    document.getElementById('root')
  );
});
