import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Easing
} from 'react-native';

import { Button, Warning } from '../components';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const warning =
  'Creates a new Animated value that is the (non-negative, non-animatedValue)' +
  ' modulo of the provided Animated value';

export default class AnimatedModulo extends Component {
  componentWillMount() {
    this.animatedValue_0 = new Animated.Value(0);
    this.animatedValue = Animated.modulo(this.animatedValue_0, 150);
    this.animationMove_0 = Animated.timing(this.animatedValue_0, {
      toValue: 500,
      duration: 5000,
      eeasing: Easing.linear
    });
  }

  onStartAnimation = () => {
    this.animatedValue_0.setValue(0);
    this.animationMove_0.start();
  };

  renderLine = () => {
    const lines = [];
    for (let i = 10; i < screenWidth; i += 10) {
      if (i % 50 === 0) {
        lines.push(
          <View key={i} style={[styles.line, { borderColor: 'red' }]} />
        );
      } else {
        lines.push(
          <View key={i} style={[styles.line, { borderColor: '#ccc' }]} />
        );
      }
    }
    return <View style={styles.grid}>{lines}</View>;
  };

  renderTag = () => {
    const tag = [];
    for (let i = 0; i < screenWidth; i += 10) {
      if (i % 50 === 0) {
        tag.push(
          <View key={i} style={[styles.tag, { left: i - 10 }]}>
            <Text style={{ fontSize: 8 }}>{i}</Text>
          </View>
        );
      }
    }
    return tag;
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderLine()}
        <View style={styles.container}>
          <Animated.View style={[styles.box, { left: this.animatedValue_0 }]}>
            <Text style={styles.text}>Value0</Text>
          </Animated.View>
          <Animated.View style={[styles.box, { left: this.animatedValue }]}>
            <Text style={styles.text}>Value0%100</Text>
          </Animated.View>
        </View>
        <Button
          style={styles.button}
          text="Restart"
          onPress={() => this.onStartAnimation()}
        />
        <Warning text={warning} />
        {this.renderTag()}
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
    marginTop: 16,
    backgroundColor: '#b4282d',
    justifyContent: 'center',
    alignItems: 'center'
  },
  grid: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
    flexDirection: 'row'
  },
  line: {
    width: 10,
    borderRightWidth: 0.3
  },
  tag: {
    position: 'absolute',
    top: 0,
    width: 20,
    height: 16,
    alignItems: 'center'
  },
  button: {
    margin: 8
  },
  text: {
    color: 'white'
  }
});
