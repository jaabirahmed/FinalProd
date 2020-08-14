/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppNavigator from './AppNavigator';
import Login from './Login'
import { StyleSheet, Text, View, Button, Colors, Platform } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Login/>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#000000",
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: "#000000",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color:"#000000",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "#000000",
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: "#000000",
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// export default App;
