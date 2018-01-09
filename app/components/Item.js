import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const arrow = require('../img/ic_arrow_right.png');

export default class Item extends Component<{}> {
  static defaultProps = {
    style: { alignItems: 'center' },
    text: '',
    onClick: () => {}
  };
  static propTypes = {
    style: View.propTypes.style,
    text: PropTypes.string,
    onClick: PropTypes.func
  };

  render() {
    const { style, text, onClick } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          onClick();
        }}
        style={[styles.container, style]}
      >
        <Text style={styles.text}>{text}</Text>
        <Image style={styles.icon} source={arrow} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderColor: '#efefef'
  },
  text: {
    flex: 1,
    marginHorizontal: 16
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
    tintColor: '#ccc'
  }
});
