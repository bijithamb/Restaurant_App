import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

import Logo from '../assets/images/Logo2.png';
import {COLORS} from '../styles/theme';

const screenwidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
class SpalshScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('OnboardScreen');
    }, 5000);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={COLORS.primary}
          barStyle="dark-content"></StatusBar>
        <View style={styles.imagecontainer}>
          <Image
            source={Logo}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'contain',
            }}></Image>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagecontainer: {
    height: screenHeight * 0.9,
    width: screenwidth * 0.7,
  },
});

export default SpalshScreen;
