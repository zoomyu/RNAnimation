import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import { Button } from '../components';

export default class AnimatedInterpolationValue extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Scale / Mapping Values'
  });

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.animatedValue_0 = this.animatedValue.interpolate({
      inputRange: [0, 300],
      outputRange: [0, 200]
    });
    this.animatedValue_1 = this.animatedValue.interpolate({
      inputRange: [0, 100, 300],
      outputRange: [0, 200, 300]
    });
  }

  onStartAnimattion = () => {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 300,
      duration: 2000
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Animated.View style={[styles.box, { left: this.animatedValue }]}>
            <Text style={styles.text}>{'[0, 300] => \n[0, 300]'}</Text>
          </Animated.View>
          <Animated.View style={[styles.box, { left: this.animatedValue_0 }]}>
            <Text style={styles.text}>{'[0, 300] => \n[0, 200]'}</Text>
          </Animated.View>
          <Animated.View style={[styles.box, { left: this.animatedValue_1 }]}>
            <Text style={styles.text}>
              {'[0, 100, 300] => \n[0, 200, 300]'}
            </Text>
          </Animated.View>
        </View>

        <Button
          style={styles.button}
          text="Start"
          onPress={() => this.onStartAnimattion()}
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
    marginTop: 8,
    backgroundColor: '#b4282d',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 8
  },
  text: {
    color: 'white'
  }
});
