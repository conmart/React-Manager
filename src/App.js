import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
