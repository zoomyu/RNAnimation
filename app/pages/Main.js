import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
      <View style={styles.container}>
        {this.renderTitle('Configuring Animations')}
        {this.renderItems(configuringAnimations)}
        {this.renderTitle('Other Animations')}
        {this.renderItems(otherAnimations)}
      </View>
    );
  }
}

const configuringAnimations = [
  { page: 'Timing' },
  { page: 'Spring' },
  { page: 'Decay' }
];

const otherAnimations = [
  { page: 'Filp' }
];

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
