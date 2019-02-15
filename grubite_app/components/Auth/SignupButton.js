import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import AuthButton from './AuthButton'

const SignupButton = (props) => {
    return (
        <View style={styles.container}>
            <AuthButton
                {...props}
                backgroundColor="white"
                textColor="black"
                title="SIGN UP" />
        </View>
    );
}
export default SignupButton;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});