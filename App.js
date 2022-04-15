import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Details from './src/details';
import Home from './src/home';
import store from './src/reducer/store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
      <Details />
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

