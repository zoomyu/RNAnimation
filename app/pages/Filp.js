import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native';

export default class Filp extends Component {
  componentWillMount() {
    this.animationValue = new Animated.Value(0);
    this.frontRotate = this.animationValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    });
    this.backRotate = this.animationValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '0deg']
    });
    this.frontOpacity = this.animationValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    });
    this.backOpacity = this.animationValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    });
  }

  onFlip = () => {
    console.log();
    if (this.animationValue._value > 90) {
      Animated.spring(this.animationValue, {
        toValue: 0,
        friction: 10,
        tension: 20
      }).start();
    } else {
      Animated.spring(this.animationValue, {
        toValue: 180,
        friction: 10,
        tension: 20
      }).start();
    }
  };

  renderFrontCard = () => (
    <Image
      style={styles.card}
      resizeMode={'contain'}
      source={require('../img/map.png')}
    />
  );

  renderBackCard = () => (
    <View style={styles.card}>
      <Text style={styles.backText}>back</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Animated.View
            style={[
              styles.frontCard,
              {
                transform: [{ rotateY: this.frontRotate }],
                opacity: this.frontOpacity
              }
            ]}
          >
            {this.renderFrontCard()}
          </Animated.View>
          <Animated.View
            style={[
              styles.backCard,
              {
                transform: [{ rotateY: this.backRotate }],
                opacity: this.backOpacity
              }
            ]}
          >
            {this.renderBackCard()}
          </Animated.View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.onFlip()}>
          <Text style={styles.btnText}>Flip</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  frontCard: {},
  backCard: {
    position: 'absolute'
  },
  button: {
    width: 150,
    height: 48,
    marginTop: 16,
    backgroundColor: '#5bbc4c',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 16,
    color: 'white'
  },
  backText: {
    fontSize: 18,
    color: '#000'
  }
});
