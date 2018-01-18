import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  Dimensions
} from 'react-native';

import { Button } from '../components';

const { width: screenWidth } = Dimensions.get('window');

export default class AnimatedInterpolationRotation extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Degrees / Radians'
  });

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.animatedDegrees = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['0deg', '360deg']
    });
    this.animatedRadians = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['0rad', '360rad']
    });
  }

  onStartAnimattion = () => {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 10000
    }).start();
  };

  renderAnimationView = (title, transform) => (
    <View
      style={{
        width: screenWidth / 2,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Animated.View style={[styles.box, styles.itemCenter, { transform }]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} >
          <View style={styles.animatedBox}>
            {this.renderAnimationView('rotateX\nDegrees', [
              { rotateX: this.animatedDegrees }
            ])}
            {this.renderAnimationView('rotateX\nRodians', [
              { rotateX: this.animatedRadians }
            ])}
            {this.renderAnimationView('rotateY\nDegrees', [
              { rotateY: this.animatedDegrees }
            ])}
            {this.renderAnimationView('rotateY\nRodians', [
              { rotateY: this.animatedRadians }
            ])}
            {this.renderAnimationView('rotateZ\nDegrees', [
              { rotateZ: this.animatedDegrees }
            ])}
            {this.renderAnimationView('rotateZ\nRodians', [
              { rotateZ: this.animatedRadians }
            ])}
            {this.renderAnimationView('skewX\nDegrees', [
              { skewX: this.animatedDegrees }
            ])}
            {this.renderAnimationView('skewX\nRodians', [
              { skewX: this.animatedRadians }
            ])}
            {this.renderAnimationView('skewY\nDegrees', [
              { skewY: this.animatedDegrees }
            ])}
            {this.renderAnimationView('skewY\nRodians', [
              { skewY: this.animatedRadians }
            ])}
          </View>
        </ScrollView>

        <Button
          style={styles.button}
          text="Restart"
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
  animatedBox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  itemCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100,
    margin: 8,
    backgroundColor: '#b4282d'
  },
  text: {
    color: 'white'
  },
  button: {
    margin: 8
  }
});
