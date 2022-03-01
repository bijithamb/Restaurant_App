import React, {useRef} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SpalshScreen from './app/screens/SpalshScreen';

import HomeScreen from './app/screens/HomeScreen';
import OnboardScreen from './app/screens/OnboardScreen';
import RestaurantDetail from './app/screens/RestaurantDetail';

import {Provider} from 'react-redux';
import {Store} from './app/redux/store';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            options={{headerShown: false}}
            name="Splashscreen"
            component={SpalshScreen}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="Homescreen"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="OnboardScreen"
            component={OnboardScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="RestaurantDetail"
            component={RestaurantDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
