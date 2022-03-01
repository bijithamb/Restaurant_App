import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  ScrollViewBase,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import {COLORS, Dimens, Fonts, SIZES} from '../styles/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BackHeader from '../components/BackHeader';
import {Rating} from 'react-native-ratings';
const screenwidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showrating: true,
    };
  }

  render() {
    return (
      <View style={{backgroundColor: COLORS.white, flex: 1}}>
        <BackHeader {...this.props} title={this.props.route.params.data.name} />
        <ScrollView style={{flex: 1}}>
          <Image
            style={{
              width: screenwidth,

              alignSelf: 'center',
              height: screenHeight * 0.25,

              resizeMode: 'cover',
            }}
            source={{
              uri: 'https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg',
            }}></Image>
          <View
            style={{
              paddingHorizontal: Dimens.mainPadding,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              backgroundColor: COLORS.white,
              marginTop: -20,
            }}>
            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 25,
              }}>
              <Text
                style={{
                  fontFamily: Fonts.default,
                  color: COLORS.primary,
                }}>
                #{this.props.route.params.data.cuisine_type}
              </Text>
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
                  {this.props.route.params.data.ratings}
                </Text>
                <Text
                  onPress={() =>
                    this.setState({showrating: !this.state.showrating})
                  }
                  style={{
                    fontFamily: Fonts.default,
                    color: COLORS.fontcolor,
                    textDecorationLine: 'underline',
                  }}>
                  ({this.props.route.params.data.reviews.length} Reviews)
                </Text>
              </FontAwesome5>
            </View>

            <View
              style={{
                justifyContent: 'space-between',
              }}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontFamily: Fonts.default,

                  flexWrap: 'wrap',
                  fontSize: 25,
                  fontWeight: '600',

                  color: COLORS.primary,
                  textTransform: 'capitalize',
                }}>
                {this.props.route.params.data.name}
              </Text>
            </View>

            <FontAwesome5
              name="map-marker-alt"
              style={{
                fontSize: 14,
                color: 'grey',
              }}
              solid>
              <Text
                numberOfLines={2}
                ellipsizeMode={'tail'}
                style={{
                  fontFamily: Fonts.default,
                  color: COLORS.fontcolor,
                  marginTop: 5,
                  width: '100%',
                }}>
                {' '}
                {this.props.route.params.data.address},{' '}
                {this.props.route.params.data.neighborhood}
              </Text>
            </FontAwesome5>
            <FontAwesome5
              name="clock"
              style={{
                fontSize: 14,
                color: 'grey',
              }}
              solid>
              <Text
                style={{
                  fontFamily: Fonts.default,
                  color: COLORS.fontcolor,
                }}></Text>
              <Text
                style={{
                  fontFamily: Fonts.default,
                  color: COLORS.fontcolor,
                }}>
                {' '}
                5:30 pm - 11:00 pm
              </Text>
            </FontAwesome5>
            {this.state.showrating ? (
              <FlatList
                data={this.props.route.params.data.reviews}
                // style={{marginBottom: 200}}
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{width: screenwidth * 0.95, alignSelf: 'center'}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 25,
                        }}>
                        <Image
                          style={{height: 50, width: 50}}
                          source={{
                            uri: 'https://cdn.xxl.thumbs.canstockphoto.com/portrait-of-young-man-smiling-background-stock-photography_csp12568100.jpg',
                          }}></Image>
                        <View style={{paddingHorizontal: 15}}>
                          <Text
                            style={{
                              fontFamily: Fonts.default,
                              color: COLORS.fontcolor,
                            }}>
                            {item.name}
                          </Text>
                          <Rating
                            type="custom"
                            ratingCount={item.rating}
                            imageSize={15}
                            ratingColor={'#FF9529'}
                            ratingCount={5}
                            style={{alignSelf: 'flex-start'}}
                          />

                          <Text
                            style={{
                              fontFamily: Fonts.default,
                              color: COLORS.fontcolor,
                            }}>
                            {item.date}
                          </Text>
                        </View>
                      </View>

                      <Text
                        style={{
                          fontFamily: Fonts.default,
                          color: COLORS.fontcolor,
                          textAlign: 'justify',
                        }}>
                        {item.comments}
                      </Text>
                    </View>
                  );
                }}
              />
            ) : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default RestaurantDetail;
