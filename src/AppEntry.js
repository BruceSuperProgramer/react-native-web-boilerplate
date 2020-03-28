import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
const {width, height} = Dimensions.get('window');
import AppNavigator from './navigation/AppNavigator';

const AppEntry = () => <AppNavigator />;

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  container: {
    height: (height * 9) / 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppEntry;
