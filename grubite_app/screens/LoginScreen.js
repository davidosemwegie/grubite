// import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     Button,
//     AsyncStorage,
//     TextInput,
//     ImageBackground,
//     KeyboardAvoidingView
// } from "react-native";
// import { LinearGradient } from 'expo'
// import LoginForm from '../components/Login/LoginForm'

// class LoginScreen extends Component {

//     render() {
//         return (

//             <ImageBackground
//                 source={require('../assets/bg2.jpg')}
//                 style={styles.fill}>
//                 <KeyboardAvoidingView style={styles.loginBox} behavior="padding">
//                     <LoginForm />
//                 </KeyboardAvoidingView>

//             </ImageBackground>
//         );
//     }
// }
// export default LoginScreen;

// const styles = StyleSheet.create({
//     fill: {
//         flex: 1,
//     },
//     loginBox: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         marginBottom: 180,

//     }
// });

import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import AuthForm from '../components/Auth/AuthForm'
import AuthInput from '../components/Auth/AuthInput'
import LoginButton from '../components/Auth/LoginButton'

class LoginScreen extends Component {

    render() {

        const { container, forgotPasswordText, forgotPasswordButton } = styles

        return (
            <View style={container}>
                <AuthForm formTitle="LOG IN">
                    <AuthInput placeholder="email / username" />
                    <AuthInput placeholder="password" />
                    <TouchableOpacity style={forgotPasswordButton}>
                        <Text style={forgotPasswordText} allowFontScaling={false}>FORGOT PASSWORD?</Text>
                    </TouchableOpacity>
                    <LoginButton />
                </AuthForm>
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    },
    forgotPasswordButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    forgotPasswordText: {
        fontSize: 12,
        fontWeight: '700',
        marginVertical: 10,
    }
});