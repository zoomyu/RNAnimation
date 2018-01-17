import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import Item from '../components/Item';

export default class Main extends Component<{}> {
  clickItems = (row) => {
    this.props.navigation.navigate(row.page, { name: row.page });
  };

  renderItems = (items) =>
    items.map((row) => (
      <Item
        key={row.page}
        text={row.page}
        onClick={() => this.clickItems(row)}
      />
    ));

  renderTitle = (title) => (
    <View style={styles.titleBox}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderTitle('Configuring Animations')}
        {this.renderItems(configuringAnimations)}
        {this.renderTitle('Composing Animations')}
        {this.renderItems(composingAnimations)}
        {this.renderTitle('Combining animated values')}
        {this.renderItems(combiningAnimatedValues)}
        {this.renderTitle('Interpolation')}
        {this.renderItems(interpolation)}
        {this.renderTitle('Other Animations')}
        {this.renderItems(otherAnimations)}
      </ScrollView>
    );
  }
}

const configuringAnimations = [
  { page: 'Timing' },
  { page: 'Spring' },
  { page: 'Decay' }
];

const composingAnimations = [
  { page: 'Delay' },
  { page: 'Parallel' },
  { page: 'Sequence' },
  { page: 'Stagger' }
];

const combiningAnimatedValues = [
  { page: 'Add' },
  { page: 'Divide' },
  { page: 'Modulo' },
  { page: 'Multiply' }
];

const interpolation = [{ page: 'InterpolationValue' }];

const otherAnimations = [{ page: 'Filp' }];

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleBox: {
    marginTop: 8,
    height: 56,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    marginHorizontal: 8,
    fontSize: 18,
    fontWeight: '500',
    color: '#222'
  }
});
