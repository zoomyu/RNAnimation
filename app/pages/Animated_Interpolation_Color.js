import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

import { Button, Warning } from '../components';

export default class AnimatedInterpolationColor extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Color'
  });

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.animatedColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgba(0,0,0,1)', 'rgba(255,255,255,1)']
    });
  }

  onStartAnimattion = () => {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 3000
    }).start();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.container, styles.itemCenter]}>
          <Animated.View
            style={[styles.box, { backgroundColor: this.animatedColor }]}
          />
        </View>
        <Button
          style={styles.button}
          text="Restart"
          onPress={() => this.onStartAnimattion()}
        />
        <Warning text="Color interpolation doesn't work with HEX !" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100
  },
  button: {
    margin: 8
  }
});
