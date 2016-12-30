import firebase from 'firebase';
import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAnJSkwJPT2rfgW-OGOYLRdI-nGM2MubOo',
      authDomain: 'manager-fa668.firebaseapp.com',
      databaseURL: 'https://manager-fa668.firebaseio.com',
      storageBucket: 'manager-fa668.appspot.com',
      messagingSenderId: '480474743829',
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}><Router /></Provider>
    );
  }
}

export default App;
