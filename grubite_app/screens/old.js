import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'
import TabBarIcon from './components/TabBarIcon'
import { createAppContainer, 
  createBottomTabNavigator, 
  createSwitchNavigator,
  createStackNavigator } from 'react-navigation';

//Importing the different Screens that I need
import Discover from './screens/Discover'
import Saved from './screens/Saved'
import Profile from './screens/Profile'
import AuthLoading from './screens/AuthLoading'
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

import Colour from './constants/Colours'
import { black } from 'ansi-colors';

export default AppContainer = createAppContainer(AuthStackNavigator)

const switchNavigator =  createSwitchNavigator({
  AuthLoading: AuthLoading,
  Auth: AuthStackNavigator
})

const AuthStackNavigator = createStackNavigator({
  Welcome: {screen: WelcomeScreen},
  Login: {screen: LoginScreen},
  Signup: {screen: SignupScreen}
})

const bottomTabNavigation = createBottomTabNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarLabel: "DISCOVER",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name="search1"
        />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: "SAVED",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name="hearto"
        />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "PROFILE",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name="user"
        />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Colour.tintColour,
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    style: {
      height: 70,
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: {width: 5, height: 3},
      shadowColor: black,
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
