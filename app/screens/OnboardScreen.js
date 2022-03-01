import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import SPLASH_BG from '../assets/images/bg.jpg';
import LogoIMAGE from '../assets/images/Logo2.png';

import {COLORS, Dimens, Fonts} from '../styles/theme';

const screenwidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
class OnboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.primary}}>
        <ImageBackground
          style={{width: screenwidth, height: screenHeight}}
          source={SPLASH_BG}></ImageBackground>
        <StatusBar
          backgroundColor={COLORS.primary}
          barStyle="dark-content"></StatusBar>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            position: 'absolute',
            width: '95%',
            backgroundColor: 'white',
            opacity: 0.9,
            justifyContent: 'center',
            bottom: 55,
            borderRadius: 25,
            paddingVertical: 25,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
            paddingVertical: '15%',
          }}>
          <Image
            style={{resizeMode: 'contain', height: 100, width: 100}}
            source={require('../assets/images/Logo2.png')}></Image>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              fontFamily: Fonts.medium,
              color: COLORS.fontcolor,
              width: '75%',
            }}>
            {' '}
            Eat right.
            <Text
              style={{
                fontSize: 25,
                fontFamily: Fonts.medium,
                color: COLORS.primary,
              }}>
              {' '}
              Work hard.{' '}
            </Text>
            Feel good.
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Homescreen')}
            style={{
              width: '60%',
              height: 50,
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              margin: 20,
            }}>
            <Text style={{fontFamily: Fonts.default, color: COLORS.white}}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainButton: {
    width: '90%',
    backgroundColor: COLORS.primary,
    borderRadius: Dimens.mainRadius,
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 16,

    textAlign: 'center',

    color: COLORS.white,
  },
});
export default OnboardScreen;
