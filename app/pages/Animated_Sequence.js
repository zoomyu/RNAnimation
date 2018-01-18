import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import { Button } from '../components';

export default class AnimatedSequence extends Component<{}> {
  componentWillMount() {
    this.animatedValue_0 = new Animated.Value(0);
    this.animatedValue_1 = new Animated.Value(0);
    this.animatedValue_2 = new Animated.Value(0);
    this.animation_0 = Animated.timing(this.animatedValue_0, {
      toValue: 300,
      duration: 1000
    });
    this.animation_1 = Animated.timing(this.animatedValue_1, {
      toValue: 300,
      duration: 1000
    });
    this.animation_2 = Animated.timing(this.animatedValue_2, {
      toValue: 300,
      duration: 1000
    });
  }

  onStartAnimation = () => {
    this.animatedValue_0.setValue(0);
    this.animatedValue_1.setValue(0);
    this.animatedValue_2.setValue(0);

    Animated.sequence([
      this.animation_0,
      this.animation_1,
      this.animation_2
    ]).start();
  };

  onStop0 = () => {
    this.animation_0.stop();
  };

  onStop1 = () => {
    this.animation_1.stop();
  };

  onStop2 = () => {
    this.animation_2.stop();
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, { left: this.animatedValue_0 }]}>
          <Text style={styles.text}>0</Text>
        </Animated.View>
        <Animated.View style={[styles.box, { left: this.animatedValue_1 }]}>
          <Text style={styles.text}>1</Text>
        </Animated.View>
        <Animated.View style={[styles.box, { left: this.animatedValue_2 }]}>
          <Text style={styles.text}>2</Text>
        </Animated.View>
        <View style={styles.control}>
          <Button text="Restart" onPress={() => this.onStartAnimation()} />
          <Button text="Stop 0" onPress={() => this.onStop0()} />
          <Button text="Stop 1" onPress={() => this.onStop1()} />
          <Button text="Stop 2" onPress={() => this.onStop2()} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8
  },
  box: {
    width: 96,
    height: 96,
    margin: 8,
    backgroundColor: '#b4282d',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
});
