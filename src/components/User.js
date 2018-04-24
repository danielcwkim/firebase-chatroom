import React, { Component } from 'react';

class User extends Component {

  componentDidMount () {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  render (){
    return (
      <div id="user">
        <h3 className="welcome">Welcome, { this.props.user ? this.props.user.displayName : 'guest' }!</h3>
        {this.props.user ?
          <button className="sign-out-button" onClick={this.signOut.bind(this)}>Sign Out</button>
          :
          <button className="sign-in-button" onClick={this.signIn.bind(this)}>Sign in with Google</button>
        }
      </div>
    );
  }
}

export default User;