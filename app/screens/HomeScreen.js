import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  LogBox,
  RefreshControl,
} from 'react-native';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {COLORS, Dimens, Fonts} from '../styles/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PlaceHolder from '../components/PlaceHolder';
import {restaurants} from '../data/restaurants.json';
const API_KEY = 'AIzaSyAmUmfR36bH-aN307isc-aaFNp9fbpP74E';
const screenwidth = Dimensions.get('screen').width;
import {findNearest, getDistance, orderByDistance} from 'geolib';
const screenHeight = Dimensions.get('screen').height;
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: restaurants,
      images: [],
      searchData: [],
      loading: true,
      locationSearch: '',
      latitude: '',
      longitude: '',
      searchword: '',
      refreshing: false,
    };
  }

  componentDidMount() {
    LogBox.ignoreAllLogs();
    setTimeout(() => {
      this.setState({loading: false});
    }, 2000);
  }
  FindNearRestaurant(lat, long) {
    const DistanceArray = this.state.data.map(item => {
      item.distance = getDistance(
        {latitude: lat, longitude: long},
        {
          latitude: item.latlng.latitude,
          longitude: item.latlng.longitude,
        },
      );

      return item;
    });

    const filter = DistanceArray.filter(number => number.distance < 5000);
    console.log(filter);
    this.setState({data: filter});
  }
  onRefresh = () => {
    this.setState({data: restaurants, refreshing: false, locationSearch: ''});
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <StatusBar
          backgroundColor={COLORS.primary}
          barStyle="dark-content"></StatusBar>
        <ScrollView
          refreshControl={
            <RefreshControl
              colors={['orange', 'orange']}
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }>
          <View
            style={{
              paddingHorizontal: Dimens.mainPadding,
              backgroundColor: COLORS.textinputcontainer,
              borderRadius: 5,
              flexDirection: 'row',
              marginTop: 15,

              alignSelf: 'center',
            }}>
            <GooglePlacesAutocomplete
              fetchDetails={true}
              placeholder="Search location"
              keepResultsAfterBlur={true}
              returnKeyType={'search'}
              listViewDisplayed={false}
              enablePoweredByContainer={false}
              // keyboardShouldPersistTaps="always"
              onPress={(data, details = null) => {
                this.FindNearRestaurant(
                  details.geometry.location.lat,
                  details.geometry.location.lng,
                );
              }}
              query={{
                key: API_KEY,
                language: 'en',
              }}
            />

            {/* <TouchableOpacity
              style={{
                height: 50,

                paddingHorizontal: 10,
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                }}
                source={require('../assets/images/search.png')}
              />
            </TouchableOpacity> */}
          </View>

          {!this.state.loading ? (
            <Image
              style={{
                width: screenwidth - 20,
                borderRadius: 10,
                alignSelf: 'center',
                height: screenHeight * 0.25,
                marginTop: 15,
              }}
              source={require('../assets/images/bannerhome.png')}></Image>
          ) : (
            <View>
              <PlaceholderMedia
                style={{
                  width: screenwidth - 20,
                  borderRadius: 10,
                  alignSelf: 'center',
                  height: screenHeight * 0.25,
                  marginTop: 15,
                }}
                size={90}
              />
            </View>
          )}
          <View style={{paddingHorizontal: Dimens.mainPadding}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontFamily: Fonts.medium,

                  fontSize: 15,
                  color: COLORS.fontcolor,
                  textAlign: 'left',
                  marginTop: 15,
                }}>
                Top Restaurant
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.SortByRating()}>
                  <Image
                    style={{height: 30, width: 50, resizeMode: 'contain'}}
                    source={require('../assets/images/filter.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
            {!this.state.loading ? (
              <FlatList
                data={this.state.data}
                // style={{marginBottom: 200}}
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
                renderItem={({item, index}) => {
                  return <ItemList data={item} {...this.props} />;
                }}
              />
            ) : (
              <PlaceHolder />
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wallet: {
    width: '95%',

    alignSelf: 'center',
    marginTop: 20,
  },
  font: {
    fontFamily: Fonts.default,
    color: COLORS.white,
  },
});
export default HomeScreen;
