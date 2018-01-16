import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';

import Button from '../components/Button';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default class AnimatedDivide extends Component {
  componentWillMount() {
    this.animatedValue_0 = new Animated.Value(1);
    this.animatedValue_1 = new Animated.Value(1);
    this.animatedValue = Animated.divide(
      this.animatedValue_0,
      this.animatedValue_1
    );

    this.animationMove_0 = Animated.timing(this.animatedValue_0, {
      toValue: 500,
      duration: 2000
    });
    this.animationMove_1 = Animated.timing(this.animatedValue_1, {
      toValue: 10,
      duration: 2000
    });
  }

  onStartAnimation = () => {
    this.animatedValue_0.setValue(1);
    this.animatedValue_1.setValue(1);
    Animated.parallel([this.animationMove_0, this.animationMove_1]).start();
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
        <Animated.View style={[styles.box, { left: this.animatedValue_0 }]}>
          <Text style={styles.text}>Value0</Text>
        </Animated.View>
        <Animated.View style={[styles.box, { left: this.animatedValue_1 }]}>
          <Text style={styles.text}>Value1</Text>
        </Animated.View>
        <Animated.View style={[styles.box, { left: this.animatedValue }]}>
          <Text style={styles.text}>Value0/Value1</Text>
        </Animated.View>
        <Button
          style={styles.button}
          text="Restart"
          onPress={() => this.onStartAnimation()}
        />
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
  text: {
    color: 'white'
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 8
  }
});
