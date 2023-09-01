import React from 'react';
import RootNav from './RootNav';
import { LogBox, View } from 'react-native';
LogBox.ignoreAllLogs();

export class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNav />
      </View >
    );
  }
}