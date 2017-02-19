var React = require('react'),
    ReactDOM = require('react-dom'),
    Login = require('./auth/login.jsx'),
    Signup = require('./auth/signup.jsx'),
    Upload = require('./tracks/trackUpload.jsx'),
    SessionStore = require('../stores/session.js'),
    ClientActions = require('../actions/client_actions.js'),
    ModalStyle = require('../constants/modalConstant.js'),
    Modal = require('react-modal');

var NavBar = React.createClass({
  getInitialState: function() {
    return {
      modalIsOpen: false,
      signUpClicked: false,
      logInClicked: false,
      uploadClicked: false,
      current_user: SessionStore.currentUser()
    };
  },

  componentDidMount: function() {
    SessionStore.addListener(this.onChange);
    ClientActions.checkLoggedIn();
  },

  onChange: function() {
    this.setState({current_user: SessionStore.currentUser()});
  },

  logoutUser: function() {
    ClientActions.logoutUser();
  },

  handleProfileClick: function() {
    this.props.userProfileCB();
  },

  handleHomeClick: function() {
    this.props.homeCB();
  },

  openModal: function(event) {
    var state = {};
    if (event.target.id === "signUpClicked") {
      this.setState({modalIsOpen: true, signUpClicked: true});
    } else if (event.target.id === "logInClicked") {
      this.setState({modalIsOpen: true, logInClicked: true});
    } else if (event.target.id === "uploadClicked") {
      this.setState({modalIsOpen: true, uploadClicked: true});
    }
  },

  closeModal: function() {
    this.setState({modalIsOpen: false, logInClicked: false, signUpClicked: false});
  },

  render: function() {
    var modalContents = null;
    if (this.state.signUpClicked === true) {
      modalContents = <Signup parent={this} />;
    } else if (this.state.logInClicked === true) {
      modalContents = <Login parent={this} />;
    } else if (this.state.uploadClicked === true) {
      modalContents = <Upload parent={this} />;
    }

    var navbarContents = <li className="navbar_item">
                          <button className="navbar_button" onClick={this.openModal} id='signUpClicked'>Sign Up</button>
                          <button className="navbar_button" onClick={this.openModal} id='logInClicked'>Login</button>
                         </li>;


    if (this.state.current_user !== null) {
      navbarContents = <li className="navbar_item">
                          <button className="navbar_button" onClick={this.logoutUser} id='logoutClicked'>Logout</button>
                          <button className="navbar_button" onClick={this.openModal} id='uploadClicked'>Upload</button>
                          <button className="navbar_button" onClick={this.handleProfileClick} id='profileClicked'>Profile</button>
                        </li>;

    }

    return (
      <ul className="navbar">
        <li className="navbar_item">
          <h2 className="navbar_title" onClick={this.handleHomeClick}>Ruckus</h2>
        </li>
        {navbarContents}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle} >

          {modalContents}
        </Modal>
      </ul>
    );
  }
});

module.exports = NavBar;
