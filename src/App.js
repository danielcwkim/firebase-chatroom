import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chat</h1>
        </header>
        <main>
          <RoomList firebase={ firebase } />
        </main>
      </div>
    );
  }
}

export default App;