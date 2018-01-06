import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Navigators from './Navigators';

export default class Root extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Navigators />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
