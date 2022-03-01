import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {COLORS, Dimens, Fonts, SIZES} from '../styles/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class BackHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          height: 60,
          width: SIZES.width,
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: Dimens.mainPadding,
          alignItems: 'center',
          alignContent: 'center',
          borderBottomWidth: 0.2,
          borderBottomColor: 'grey',
        }}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <FontAwesome5
            name="chevron-left"
            style={{
              fontSize: 20,
              color: COLORS.fontcolor,
            }}
            solid></FontAwesome5>
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.fontcolor,
            fontFamily: Fonts.default,
            fontSize: 20,
          }}>
          {this.props.title}
        </Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
    );
  }
}
