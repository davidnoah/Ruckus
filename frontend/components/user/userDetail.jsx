var React = require('react');

UserDetail = React.createClass({

  render: function() {

    return (
      <div className="user-detail-container">
        <img className="profile-picture" src={this.props.user.picture} />
        <h2 className="username">{this.props.user.username}</h2>
      </div>
    );
  }
});

module.exports = UserDetail;
