import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS, Fonts, SIZES} from '../styles/theme';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    fetch(
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json',
    )
      .then(res => res.json())
      .then(json => this.setState({images: json}))
      .catch(error => console.error(error))
      .finally(() => console.log('success'));
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('RestaurantDetail', {
            data: this.props.data,
          })
        }>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              style={styles.cardImg}
              source={{
                uri: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/indexee3e8a8.jpeg',
              }}
            />
          </View>
          <View style={styles.cardInfo}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontFamily: Fonts.default,

                  flexWrap: 'wrap',
                  fontSize: 18,
                  fontWeight: '600',
                  width: '85%',
                  color: COLORS.primary,
                  textTransform: 'capitalize',
                }}>
                {this.props.data.name}
              </Text>
            </View>
            {/* "Brand": "MAMA", "Variety": "Instant Noodles Coconut Milk Flavour",
            "Style": "Pack", "Country": "Myanmar", "Stars": 5, "Top Ten": "2016
            #10" */}
            <Text
              numberOfLines={2}
              ellipsizeMode={'tail'}
              style={{
                fontFamily: Fonts.default,
                color: COLORS.fontcolor,
                marginTop: 5,
                width: '100%',
              }}>
              <FontAwesome5
                name="map-marker-alt"
                style={{
                  fontSize: 14,
                  color: COLORS.secondary,
                }}
                solid></FontAwesome5>{' '}
              {this.props.data.address}, {this.props.data.neighborhood}
            </Text>
            <View
              style={{
                flexDirection: 'row',

                alignContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <FontAwesome5
                  name="star"
                  style={{
                    fontSize: 14,
                    color: COLORS.buttoncolor,
                  }}
                  solid>
                  <Text
                    style={{
                      fontFamily: Fonts.default,
                      color: COLORS.fontcolor,
                    }}>
                    {this.props.data.ratings}
                  </Text>
                </FontAwesome5>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignContent: 'center',
                  paddingHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: COLORS.fontcolor,
                    fontFamily: Fonts.default,
                  }}></Text>
              </View>
            </View>
            <View
              style={{
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                alignSelf: 'flex-start',
                paddingVertical: 2,
                paddingHorizontal: 2,
                borderWidth: 1,
                borderColor: COLORS.primary,
                height: 25,
              }}>
              <Text
                style={{
                  fontFamily: Fonts.default,
                  color: COLORS.primary,
                  paddingHorizontal: 15,
                }}>
                #{this.props.data.cuisine_type}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    flexDirection: 'row',
    height: SIZES.height * 0.15,
    // shadowColor: '#999',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    // borderBottomRightRadius: 0,
    // borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    borderColor: '#ccc',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
