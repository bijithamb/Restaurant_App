import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {COLORS, Dimens, Fonts, SIZES} from '../styles/theme';

const Header = props => {
  return (
    <View
      style={{
        height: 80,
        width: SIZES.width,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: Dimens.mainPadding,
        alignItems: 'center',
        alignContent: 'center',

        borderBottomColor: COLORS.secondary,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Image
          style={{height: 50, width: 50, resizeMode: 'contain'}}
          source={require('../assets/images/Logo2.png')}></Image>
      </TouchableOpacity>
      <Image
        style={{height: 80, width: 100}}
        source={require('../assets/images/heading.jpg')}></Image>
      <TouchableOpacity>
        {/* <Image
          style={{height: 30, width: 45, resizeMode: 'contain'}}
          source={require('../assets/images/rightmenu.png')}></Image> */}
      </TouchableOpacity>
    </View>
  );
};
export default Header;
