import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

export default class AnimatedEvent extends Component {
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
      onPanResponderRelease: () => {
        this.animatedValue.flattenOffset();
      }
    });
  }

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
    backgroundColor: '#b4282d'
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});
