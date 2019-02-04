import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'
import TabBarIcon from './components/TabBarIcon'
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';

//Importing the different Screens that I need
import Discover from './screens/Discover'
import Saved from './screens/Saved'
import Profile from './screens/Profile'
import AuthLoading from './screens/AuthLoading'
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import SearchScreen from './screens/SearchScreen'
import MenuScreen from './screens/MenuScreen'
import FoodItemScreen from './screens/FoodItemScreen'
import ReviewsScreen from './screens/ReviewsScreen'
import NutritionScreen from './screens/NutritionScreen'


import Colour from './constants/Colours'
import { black } from 'ansi-colors';


const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  LogIn: LoginScreen,
  SignUp: SignupScreen
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  })

const FoodScreenStackNavigator = createStackNavigator({
  FoodScreen: FoodItemScreen,
  ReviewsScreen: ReviewsScreen,
  NutritionScreen: NutritionScreen
})

const MenuStackNavigator = createStackNavigator({
  //Search: SearchScreen,
  Menu: MenuScreen,
  FoodScreen: FoodScreenStackNavigator
},
  {
    headerMode: 'none',
  })


// const MenuStackNavigator = createStackNavigator({
//   Menu: MenuScreen,
//   FoodItemScreen: FoodItemScreen
// })

const DiscoverStackNavigator = createStackNavigator({
  //Discover: Discover,
  Menu: MenuStackNavigator,
  //FoodScreen: FoodScreenStackNavigator,
  // FoodItemScreen: {
  //   screen: FoodItemScreen,
  //   navigationOptions: {
  //     headerVisible: true,
  //   }
  // }
  // Search: {
  //   screen: MenuStackNavigator
  // }
},
  {
    //mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

const MainNavigation = createBottomTabNavigator({
  Discover: {
    screen: DiscoverStackNavigator,
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
      allowFontScaling: false,
      showLabel: false,
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      style: {
        height: 50,
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: black,
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

const switchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoading,
  Auth: AuthStackNavigator,
  App: MainNavigation
})

export default AppContainer = createAppContainer(switchNavigator)



