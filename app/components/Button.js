import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

export default class Button extends Component {
  static defaultProps = {
    style: {},
    text: '',
    onPress: () => {}
  };
  static propTypes = {
    style: View.propTypes.style,
    text: PropTypes.string,
    onPress: PropTypes.func
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress()}
        style={[styles.container, this.props.style]}
      >
        <Text style={styles.content}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c93f0',
    borderRadius: 4
  },
  content: {
    marginHorizontal: 16,
    marginVertical: 8
  }
});
