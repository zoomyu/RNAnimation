import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  Dimensions
} from 'react-native';
import Button from '../components/Button';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const warning =
  'You can define one of bounciness/speed, tension/friction, ' +
  'or stiffness/damping/mass, but not more than one.';
const warningImage = require('../img/ic_warning.png');

export default class AnimatedSpring extends Component<{}> {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.animatedValue_bs = new Animated.Value(0);
    this.animatedValue_tf = new Animated.Value(0);
    this.animatedValue_sdm = new Animated.Value(0);
  }

  onStartAnimation = (animatedValue, config) => {
    animatedValue.setValue(0);
    Animated.spring(
      animatedValue,
      Object.assign(
        {},
        {
          toValue: 100,
          overshootClamping: false,
          restDisplacementThreshold: 20,
          restSpeedThreshold: 10,
          velocity: 5
        },
        config
      )
    ).start();
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

  renderAnimationView = (animatedValue, springConfig, text) => (
    <View style={styles.animatedView}>
      <View style={styles.container}>
        <Animated.View style={[styles.box, { left: animatedValue }]} />
      </View>
      <Button
        style={{ marginHorizontal: 16 }}
        onPress={() => this.onStartAnimation(animatedValue, springConfig)}
        text={text}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {this.renderLine()}
        <View style={styles.container}>
          {this.renderAnimationView(this.animatedValue, {}, 'spring')}
          {this.renderAnimationView(
            this.animatedValue_bs,
            { bounciness: 20, speed: 20 },
            'bounciness/speed'
          )}
          {this.renderAnimationView(
            this.animatedValue_tf,
            { tension: 20, friction: 20 },
            'tension/friction'
          )}
          {this.renderAnimationView(
            this.animatedValue_sdm,
            { stiffness: 20, damping: 20, mass: 20 },
            'stiffness/damping/mass'
          )}
        </View>
        <View style={styles.warningBox}>
          <Image style={styles.icon} source={warningImage} />
          <Text style={styles.text}>{warning}</Text>
        </View>
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
  },
  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 8
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'red'
  },
  text: {
    flex: 1,
    margin: 8,
    color: 'white'
  }
});
