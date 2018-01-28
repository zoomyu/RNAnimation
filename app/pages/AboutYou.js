import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  PanResponder
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const manHeaderActiveIcon = require('../img/header_man.png');
const manHeaderInactiveIcon = require('../img/header_man_inactive.png');
const womanHeaderActiveIcon = require('../img/header_woman.png');
const womanHeaderInactiveIcon = require('../img/header_woman_inactive.png');
const man = require('../img/man.png');
const woman = require('../img/woman.png');
const shadow = require('../img/shadow.png');
const ruler = require('../img/ruler.png');
const rulerPoint = require('../img/ruler_point.png');
const weightscale = require('../img/weight_scale.png');
const weightpoint = require('../img/weight_point.png');

const scaleHeight = screenHeight / 207;
const radius = screenWidth / 2 / Math.sin(Math.PI / 3); // radius

export default class AboutYou extends Component {
  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      sex: 'male',
      height: 175,
      radian: 0
    };
  }

  componentWillMount() {
    this.rulerResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: this.onRulerGrant,
      onPanResponderMove: this.onRulerMove,
      onPanResponderRelease: this.onRulerRelease
    });
    this.weightResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: this.onWeightGrant,
      onPanResponderMove: this.onWeightMove,
      onPanResponderRelease: this.onWeightRelease
    });
  }

  onRulerGrant = (e) => {
    this.startHeight = 200 - e.nativeEvent.locationY / scaleHeight;
    this.touchStart = e.nativeEvent.pageY;
    this.setState({
      height: this.startHeight
    });
  };

  onRulerMove = (e) => {
    const movingDistance = this.touchStart - e.nativeEvent.pageY;
    const endHeight = this.startHeight + movingDistance / scaleHeight;
    this.setState({
      height: endHeight
    });
  };

  onRulerRelease = () => {};

  onWeightGrant = (e) => {
    const tan =
      (e.nativeEvent.pageX - screenWidth / 2) /
      (screenHeight - e.nativeEvent.pageY + radius - screenWidth / 3);
    this.startRadian = Math.atan(tan) - this.state.radian;
  };

  onWeightMove = (e) => {
    const tan =
      (e.nativeEvent.pageX - screenWidth / 2) /
      (screenHeight - e.nativeEvent.pageY + radius - screenWidth / 3);
    this.endRadian = Math.atan(tan);
    this.setState({
      radian: this.endRadian - this.startRadian
    });
  };

  onWeightRelease = () => {};

  onToggleSex = (sex) => {
    if (this.state.sex === sex) {
      return;
    }
    this.setState({
      sex
    });
  };

  getWeight = () => {
    let weight =
      (60 - Math.ceil(this.state.radian * 360 / (2 * Math.PI))) % 360;
    if (weight < 0) {
      weight = 360 + weight;
    }
    return weight;
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
    const height = (this.state.height - 100) * scaleHeight;
    const width = this.getWeight() / 60 * 130;
    return (
      <View style={styles.humanBox}>
        {this.renderIconSwitch()}
        {this.renderRuler()}
        {this.renderRulerPoint()}
        <Image style={styles.shadow} source={shadow} />
        <Image
          resizeMode="stretch"
          style={[styles.human, { width, height }]}
          source={source}
        />
      </View>
    );
  };

  renderRuler = () => (
    <View style={styles.rulerBox}>
      <Image
        resizeMode="contain"
        style={styles.ruler}
        source={ruler}
        {...this.rulerResponder.panHandlers}
      />
    </View>
  );

  renderRulerPoint = () => {
    const bottom = (this.state.height - 100) * scaleHeight - 16;
    return (
      <View pointerEvents="none" style={[styles.rulerPointBox, { bottom }]}>
        <Image
          style={styles.rulerPoint}
          resizeMode="stretch"
          source={rulerPoint}
        />
        <Text style={styles.weightText}>
          {Math.round(this.state.height)}
          <Text style={styles.unitText}> cm</Text>
        </Text>
      </View>
    );
  };

  renderWeightscale = () => {
    const weight = this.getWeight();
    return (
      <View style={styles.weightscaleBox}>
        <Image
          style={[
            styles.weightscale,
            { transform: [{ rotate: `${this.state.radian}rad` }] }
          ]}
          source={weightscale}
          {...this.weightResponder.panHandlers}
        />
        <Image
          resizeMode="contain"
          style={styles.weightpoint}
          source={weightpoint}
        />
        <Text style={styles.text}>
          {weight}
          <Text style={styles.unitText}> kg</Text>
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderHuman()}
        {this.renderWeightscale()}
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
  },
  shadow: {
    position: 'absolute',
    bottom: 0
  },
  human: {
    position: 'absolute',
    bottom: 12
  },
  rulerBox: {
    position: 'absolute',
    bottom: 8,
    right: 16,
    width: screenHeight / 20,
    height: screenHeight / 2
  },
  ruler: {
    width: screenHeight / 20,
    height: screenHeight / 2
  },
  rulerPointBox: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
    height: 40
  },
  rulerPoint: {
    width: screenWidth,
    height: 16
  },
  text: {
    marginLeft: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  unitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  weightscaleBox: {
    marginTop: 16,
    width: screenWidth,
    height: screenWidth / 3,
    alignItems: 'center'
  },
  weightscale: {
    width: 2 * radius,
    height: 2 * radius
  },
  weightpoint: {
    position: 'absolute',
    height: 64
  },
  weightText: {
    position: 'absolute',
    bottom: 8,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
