import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User.js'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC_nLo0GB5mlO3lsfgQ6tP-gGtMT8942QU",
    authDomain: "fbasecht.firebaseapp.com",
    databaseURL: "https://fbasecht.firebaseio.com",
    projectId: "fbasecht",
    storageBucket: "fbasecht.appspot.com",
    messagingSenderId: "164539777268"
};

firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: '',
    };
  }

setRoom(room){
  this.setState({ activeRoom: room });
}

setUser(user){
  this.setState({ user: user})
}


  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chat</h1>
        </header>
        <main>
          <nav><User firebase={ firebase } setUser={this.setUser.bind(this)} user={this.state.user}/></nav>
          <nav><RoomList firebase={ firebase } activeRoom={this.state.activeRoom}  setRoom={this.setRoom.bind(this)}/></nav>
          <MessageList firebase = { firebase } activeRoom={this.state.activeRoom} />
        </main>
      </div>
    );
  }
}

export default App;