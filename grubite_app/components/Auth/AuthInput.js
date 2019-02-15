import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from "react-native";

const AuthInput = (props) => {

    const styles = StyleSheet.create({
        container: {
            //alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            width: 300,
            height: 50,
            borderRadius: 10,
            marginVertical: 10,
        },
        input: {
            margin: 10,
            fontSize: 20,
            fontWeight: '700',
        },
    });

    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                allowFontScaling={false}
                style={styles.input}
                placeholder={`${props.placeholder}`}
                placeholderTextColor="rgba(0,0,0,0.5)"
            />
        </View>
    );
}
export default AuthInput;
