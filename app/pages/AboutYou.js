import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const manHeaderActiveIcon = require('../img/header_man.png');
const manHeaderInactiveIcon = require('../img/header_man_inactive.png');
const womanHeaderActiveIcon = require('../img/header_woman.png');
const womanHeaderInactiveIcon = require('../img/header_woman_inactive.png');
const man = require('../img/man.png');
const woman = require('../img/woman.png');

export default class AboutYou extends Component {
  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      sex: 'male'
    };
  }

  onToggleSex = (sex) => {
    if (this.state.sex === sex) {
      return;
    }
    this.setState({
      sex
    });
  };

  renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>About you</Text>
    </View>
  );

  renderIconSwitch = () => {
    const manStyle = [styles.switchIcon, styles.activeBorder];
    const womanStyle = [styles.switchIcon, styles.inactiveBorder];
    let manIcon = manHeaderActiveIcon;
    let womanIcon = womanHeaderInactiveIcon;
    if (this.state.sex === 'female') {
      manIcon = manHeaderInactiveIcon;
      womanIcon = womanHeaderActiveIcon;
      manStyle.push(styles.inactiveBorder);
      womanStyle.push(styles.activeBorder);
    }
    return (
      <View style={styles.switchBox}>
        <TouchableOpacity
          onPress={() => this.onToggleSex('male')}
          style={manStyle}
        >
          <Image style={styles.icon} source={manIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.onToggleSex('female')}
          style={womanStyle}
        >
          <Image style={styles.icon} source={womanIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  renderHuman = () => {
    let source = man;
    if (this.state.sex === 'female') {
      source = woman;
    }
    return (
      <View style={styles.humanBox}>
        {this.renderIconSwitch()}
        <Image source={source} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderHuman()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 56,
    justifyContent: 'center'
  },
  title: {
    padding: 0,
    fontSize: 32,
    marginLeft: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  switchBox: {
    flexDirection: 'row',
    height: 40,
    width: 104,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#FEFEFE',
    elevation: 2
  },
  switchIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeBorder: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fe9f57'
  },
  inactiveBorder: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff'
  },
  icon: {
    width: 24,
    height: 24
  },
  humanBox: {
    flex: 1,
    alignItems: 'center'
  }
});
