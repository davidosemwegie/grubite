import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const AuthButton = (props) => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: `${props.backgroundColor}`,
            justifyContent: 'center',
            alignItems: 'center',
            width: 300,
            height: 50,
            borderRadius: 30,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 5,
            marginVertical: 10,
        },
        title: {
            color: `${props.textColor}`,
            fontWeight: '800',
            fontSize: 20
        }
    });

    return (
        <TouchableOpacity 
        {... props}
        style={styles.container}
        >
            <Text style={styles.title} allowFontScaling={false}>{props.title}</Text>
        </TouchableOpacity>
    );
}
export default AuthButton;
