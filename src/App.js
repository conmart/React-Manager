import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCb9QjRTDhOP1Ce5bul_6q2CuKRgqI74No',
      authDomain: 'manager-9a96f.firebaseapp.com',
      databaseURL: 'https://manager-9a96f.firebaseio.com',
      projectId: 'manager-9a96f',
      storageBucket: 'manager-9a96f.appspot.com',
      messagingSenderId: '72437941473'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
