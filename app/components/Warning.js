import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

const warningImage = require('../img/ic_warning.png');

export default class Warning extends Component {
  static defaultProps = {
    text: 'warning'
  };

  static propTypes = {
    text: PropTypes.string
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={warningImage} />
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
