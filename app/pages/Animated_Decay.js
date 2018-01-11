import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

import Button from '../components/Button';

export default class AnimatedDecay extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.ValueXY();
    this.coordinates = { x: 0, y: 0 };
    this.animatedValue.addListener((value) => {
      this.coordinates = value;
    });
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.animatedValue.setOffset({
          x: this.coordinates.x,
          y: this.coordinates.y
        });
        this.animatedValue.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.animatedValue.x, dy: this.animatedValue.y }
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValue.flattenOffset();
        Animated.decay(this.animatedValue, {
          deceleration: 0.99,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start();
      }
    });
  }

  onReset = () => {
    this.animatedValue.setValue({ x: 0, y: 0 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.box,
            {
              transform: this.animatedValue.getTranslateTransform()
            }
          ]}
          {...this.panResponder.panHandlers}
        >
          <Text style={styles.text}>Drag Me</Text>
        </Animated.View>
        <View style={styles.controlBox}>
          <Button text="Reset" onPress={() => this.onReset()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 96,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  controlBox: {
    width: '100%',
    height: 64,
    padding: 8,
    position: 'absolute',
    bottom: 0
  }
});
