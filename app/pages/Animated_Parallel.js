import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

import Button from '../components/Button';

export default class AnimatedParallel extends Component<{}> {
  componentWillMount() {
    this.animated_Move = new Animated.Value(0);
    this.animated_Opacity = new Animated.Value(1);
    this.animationMove = Animated.timing(this.animated_Move, {
      toValue: 300,
      duration: 5000
    });
    this.animationOpacity = Animated.timing(this.animated_Opacity, {
      toValue: 0,
      duration: 5000
    });
  }

  onStartAnimation = () => {
    this.animated_Move.setValue(0);
    this.animated_Opacity.setValue(1);
    Animated.parallel([this.animationMove, this.animationOpacity]).start();
  };

  onStopMove = () => {
    this.animationMove.stop();
  };

  onStopOpacity = () => {
    this.animationOpacity.stop();
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, { left: this.animated_Move }]} />
        <Animated.View
          style={[styles.box, { opacity: this.animated_Opacity }]}
        />
        <Animated.View
          style={[
            styles.box,
            { left: this.animated_Move, opacity: this.animated_Opacity }
          ]}
        />
        <View style={styles.control}>
          <Button text="Restart" onPress={() => this.onStartAnimation()} />
          <Button text="Stop Move" onPress={() => this.onStopMove()} />
          <Button text="Stop Opacity" onPress={() => this.onStopOpacity()} />
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
    backgroundColor: '#b4282d'
  }
});
