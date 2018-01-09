import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Item from '../components/Item';

export default class Main extends Component<{}> {
  clickItems = row => {
    this.props.navigation.navigate(row.page, { name: row.page });
  };

  renderItems = () =>
    items.map(row => (
      <Item
        key={row.page}
        text={row.page}
        onClick={() => this.clickItems(row)}
      />
    ));

  render() {
    return <View style={styles.container}>{this.renderItems()}</View>;
  }
}

const items = [{ page: 'Timing' }, { page: 'Filp' }];

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
