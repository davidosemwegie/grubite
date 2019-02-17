import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView
} from "react-native";
import AuthForm from '../components/Auth/AuthForm'
import AuthInput from '../components/Auth/AuthInput'
import SignupButton from '../components/Auth/SignupButton'

class SignupScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <AuthForm formTitle="SIGN UP">
                <AuthInput placeholder="email"/>
                <AuthInput placeholder="username"/>
                <AuthInput placeholder="password"/>
                <AuthInput placeholder="confirm password"/>
                <SignupButton />
                </AuthForm>
            </KeyboardAvoidingView>
        );
    }
}
export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    }
});