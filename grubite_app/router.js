import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { createStackNavigator } from 'react-navigation'

import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'


export default class AuthStackNavigator extends Component {
    render() {
        return (
            createStackNavigator({
                Welcome: WelcomeScreen,
                Login: LoginScreen,
                Signup: SignupScreen
            })
        )

    }
} 