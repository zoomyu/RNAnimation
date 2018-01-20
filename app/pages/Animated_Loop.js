import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

import { Button } from '../components';

export default class AnimatedLoop extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.scale_0 = this.animatedValue.interpolate({
      inputRange: [0, 100, 200, 300, 400, 500, 600],
      outputRange: [0.01, 1, 1, 1, 0.01, 0.01, 0.01]
    });
    this.scale_1 = this.animatedValue.interpolate({
      inputRange: [0, 100, 200, 300, 400, 500, 600],
      outputRange: [0.01, 0.01, 1, 1, 1, 0.01, 0.01]
    });
    this.scale_2 = this.animatedValue.interpolate({
      inputRange: [0, 100, 200, 300, 400, 500, 600],
      outputRange: [0.01, 0.01, 0.01, 1, 1, 1, 0.01]
    });
  }

  onStartAnimation = () => {
    Animated.loop(
      Animated.timing(this.animatedValue, {
        toValue: 600,
        duration: 1000
      })
    ).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loadBox}>
          <Animated.View
            style={[styles.box, { transform: [{ scale: this.scale_0 }] }]}
          />
          <Animated.View
            style={[styles.box, { transform: [{ scale: this.scale_1 }] }]}
          />
          <Animated.View
            style={[styles.box, { transform: [{ scale: this.scale_2 }] }]}
          />
        </View>

        <Button
          style={styles.button}
          text="Start"
          onPress={() => this.onStartAnimation()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 16,
    height: 16,
    margin: 2,
    borderRadius: 8,
    backgroundColor: '#b4282d'
  },
  button: {
    margin: 8
  }
});
