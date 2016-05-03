var React = require('react');

UserDetail = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser(),
    };
  },

  componentDidMount: function() {
    SessionStore.addListener(this.onChange);
  },

  onChange: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  render: function() {
    return (
      <div>
      </div>
    );
  }
});

module.exports = UserDetail;
