import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage,
    TextInput,
    ImageBackground,
    KeyboardAvoidingView
} from "react-native";
import { LinearGradient } from 'expo'
import LoginForm from '../components/Login/LoginForm'

class LoginScreen extends Component {

    render() {
        return (
            // <View style={styles.container}>
            //     <LoginForm />
            // </View>
            <ImageBackground
                source={require('../assets/bg2.jpg')}
                style={styles.fill}>
                {/* <LinearGradient 
                colors={['rgba(253,121,168, 0.7)', 'rgba(0,0,0, 0.7)']}
                style={styles.fill}>
                    <LoginForm />
                </LinearGradient> */}
                <KeyboardAvoidingView style={styles.loginBox} behavior="padding">
                    <LoginForm />
                </KeyboardAvoidingView>

            </ImageBackground>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    loginBox: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 180,
    
    }
});