import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  Easing,
  Dimensions
} from 'react-native';

import Button from '../components/Button';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default class AnimatedTiming extends Component {
  componentWillMount() {
    this.step0Value = new Animated.Value(50);
    this.step1Value = new Animated.Value(50);
    this.linearValue = new Animated.Value(50);
    this.easeValue = new Animated.Value(50);
    this.quadValue = new Animated.Value(50);
    this.cubicValue = new Animated.Value(50);
    this.polyValue_0 = new Animated.Value(50);
    this.polyValue_1 = new Animated.Value(50);
    this.sinValue = new Animated.Value(50);
    this.circleValue = new Animated.Value(50);
    this.expValue = new Animated.Value(50);
    this.elasticValue_0 = new Animated.Value(50);
    this.elasticValue_1 = new Animated.Value(50);
    this.backValue_0 = new Animated.Value(50);
    this.backValue_1 = new Animated.Value(50);
    this.bounceValue = new Animated.Value(50);
    this.bezierValue = new Animated.Value(50);
    this.inValue_0 = new Animated.Value(50);
    this.inValue_1 = new Animated.Value(50);
    this.outValue_0 = new Animated.Value(50);
    this.outValue_1 = new Animated.Value(50);
    this.inoutValue_0 = new Animated.Value(50);
    this.inoutValue_1 = new Animated.Value(50);
  }

  onStartAnimation = (animatedValue, easing) => {
    animatedValue.setValue(50);
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 2000,
      easing
    }).start();
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

  renderAnimationView = (animatedValue, easing, text) => (
    <View style={styles.animatedView}>
      <View style={styles.container}>
        <Animated.View style={[styles.box, { left: animatedValue }]} />
      </View>
      <Button
        style={{ marginHorizontal: 16 }}
        onPress={() => this.onStartAnimation(animatedValue, easing)}
        text={text}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {this.renderLine()}
        <ScrollView style={styles.container}>
          {this.renderAnimationView(this.step0Value, Easing.step0, 'step0')}
          {this.renderAnimationView(this.step1Value, Easing.step1, 'step1')}
          {this.renderAnimationView(this.linearValue, Easing.linear, 'linear')}
          {this.renderAnimationView(this.easeValue, Easing.ease, 'ease')}
          {this.renderAnimationView(this.quadValue, Easing.quad, 'quad')}
          {this.renderAnimationView(this.cubicValue, Easing.cubic, 'cubic')}
          {this.renderAnimationView(this.polyValue_0, Easing.poly, 'poly')}
          {this.renderAnimationView(
            this.polyValue_1,
            Easing.poly(10),
            'poly(10)'
          )}
          {this.renderAnimationView(this.sinValue, Easing.sin, 'sin')}
          {this.renderAnimationView(this.circleValue, Easing.circle, 'circle')}
          {this.renderAnimationView(this.expValue, Easing.exp, ' exp')}
          {this.renderAnimationView(
            this.elasticValue_0,
            Easing.elastic,
            'elastic'
          )}
          {this.renderAnimationView(
            this.elasticValue_1,
            Easing.elastic(10),
            'elastic(10)'
          )}
          {this.renderAnimationView(this.backValue_0, Easing.back, 'back')}
          {this.renderAnimationView(
            this.backValue_1,
            Easing.back(10),
            'back(10)'
          )}
          {this.renderAnimationView(this.bounceValue, Easing.bounce, 'bounce')}
          {this.renderAnimationView(
            this.bezierValue,
            Easing.bezier(0, 1, 1, 0),
            'bezier(0, 1, 1, 0)'
          )}
          {this.renderAnimationView(this.inValue_0, Easing.in, 'in')}
          {this.renderAnimationView(
            this.inValue_1,
            Easing.in(Easing.linear),
            'in(Easing.linear)'
          )}
          {this.renderAnimationView(this.outValue_0, Easing.out, 'out')}
          {this.renderAnimationView(
            this.outValue_1,
            Easing.out(Easing.linear),
            'out(Easing.linear)'
          )}
          {this.renderAnimationView(this.inoutValue_0, Easing.inOut, 'inOut')}
          {this.renderAnimationView(
            this.inoutValue_1,
            Easing.inOut(Easing.linear),
            'inOut(Easing.linear)'
          )}
        </ScrollView>
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
    backgroundColor: '#ccc',
    width: 50,
    height: 48
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
  animatedView: {
    flexDirection: 'row',
    marginTop: 8
  }
});
