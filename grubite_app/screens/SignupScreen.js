import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import AuthForm from '../components/Auth/AuthForm'
import AuthInput from '../components/Auth/AuthInput'
import SignupButton from '../components/Auth/SignupButton'

class SignupScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AuthForm formTitle="SIGN UP">
                <AuthInput placeholder="email"/>
                <AuthInput placeholder="username"/>
                <AuthInput placeholder="password"/>
                <AuthInput placeholder="confirm password"/>
                <SignupButton />
                </AuthForm>
            </View>
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