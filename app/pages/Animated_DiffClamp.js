import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

import { Button } from '../components';

export default class AnimatedDiffClamp extends Component {
  componentWillMount() {
    this.animatedValue_0 = new Animated.Value(0);
    this.animatedValue_1 = Animated.diffClamp(this.animatedValue_0, 100, 200);
  }

  onStartAnimation = () => {
    this.animatedValue_0.setValue(0);
    Animated.timing(this.animatedValue_0, {
      toValue: 300,
      duration: 5000
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Animated.View style={[styles.box, { left: this.animatedValue_0 }]}>
            <Text style={styles.text}>Value</Text>
          </Animated.View>
          <Animated.View style={[styles.box, { left: this.animatedValue_1 }]}>
            <Text style={styles.text}>min: 100{'\n'}max: 200</Text>
          </Animated.View>
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
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b4282d'
  },
  button: {
    margin: 8
  },
  text: {
    color: 'white'
  }
});
