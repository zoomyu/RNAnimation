import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

import { Button } from '../components';

export default class AnimatedDelay extends Component<{}> {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  onStartAnimation = () => {
    this.animatedValue.setValue(0);
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(this.animatedValue, {
        toValue: 300,
        duration: 500
      })
    ]).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, { left: this.animatedValue }]} />
        <View style={styles.control}>
          <Button
            text="Delay 1 second"
            onPress={() => this.onStartAnimation()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  control: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 8,
    height: 56
  },
  box: {
    width: 96,
    height: 96,
    backgroundColor: '#b4282d'
  }
});
