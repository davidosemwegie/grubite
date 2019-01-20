/* AUTHENTICATION BUTTON STYLE */

import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage,
    TextInput,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Entypo'

const AuthButton = (props) => {
    const { container, font} = styles
    return (
        <TouchableOpacity style={container} {...props} activeOpacity={0.7}>
            <Text style={font}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    container: {
        height: 70,
        width: 350,
        color: "white",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#fd79a8'
    },
    font: {
        fontSize: 20,
        color: "white",
        fontWeight: 'bold'
    }
}

export default AuthButton;