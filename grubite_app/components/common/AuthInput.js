import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage,
    TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/Entypo'

const AuthInput = (props) => {
    const {container, icon, input} = styles
    return (
        <View style={container}>
            <Icon 
            name={props.icon}
            size={25}
            color={"black"}
            style={icon}
            bold
            /> 
            <TextInput
                placeholderTextColor= {"rgba(0,0,0,0.9)"}
                {...props}
                style={input}
            />
        </View>
    )
}

const styles = {
    container: {
        height: 70,
        width: 350,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.9)',
        flexDirection: 'row',
        // borderColor: "#fd79a8",
        // borderWidth: 2
    },
    input: {
        //fontFamily: "San Francisco",
        height: 30,
        width: 300,
        marginLeft: 30,
        color: "black",
        fontSize: 17,
        // fontWeight: '500'
    },
    icon: {
        marginLeft: 60,
    }
}

export default AuthInput;