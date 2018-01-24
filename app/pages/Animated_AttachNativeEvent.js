import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Animated } from 'react-native';
import { Warning } from '../components';

const warn =
  'Because the animation is running on Native environment, ' +
  'can not be synchronized to get the value';

export default class ScrollDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }

  componentWillMount() {
    this.AnimatedValue = new Animated.Value(0);
    this.AnimatedValue.addListener(({ value }) => {
      const i = (parseInt(value, 10) - 50) / 100;
      this.setState({
        height: i
      });
    });
  }

  componentDidMount() {
    Animated.attachNativeEvent(this.scrollView, 'onScroll', [
      { nativeEvent: { contentOffset: { x: this.AnimatedValue } } }
    ]);
  }

  renderList = (items) => {
    return items.map((item) => (
      <View key={item} style={styles.item}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.ruler_5} />
          <View style={styles.ruler_spacing} />
          <View style={styles.ruler_spacing} />
          <View style={styles.ruler_spacing} />
          <View style={styles.ruler_spacing} />
          <View style={styles.ruler_0} />
          <View style={styles.ruler_spacing} />
          <View style={styles.ruler_spacing} />
          <View style={styles.ruler_spacing} />
          <View style={styles.ruler_spacing} />
        </View>
        <Text>{item}</Text>
      </View>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>{this.state.height}</Text>
        </View>
        <ScrollView
          ref={(ref) => {
            this.scrollView = ref;
          }}
          horizontal
        >
          {this.renderList(list)}
        </ScrollView>
        <Warning text={warn} />
      </View>
    );
  }
}

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    width: 100,
    height: 100,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'red',
    backgroundColor: '#ccc'
  },
  ruler_0: {
    width: 1,
    marginRight: 9,
    height: 48,
    backgroundColor: 'red'
  },
  ruler_5: {
    width: 1,
    marginRight: 9,
    height: 32,
    backgroundColor: 'red'
  },
  ruler_spacing: {
    width: 1,
    marginRight: 9,
    height: 16,
    backgroundColor: 'red'
  }
});
