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
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage
} from "react-native";
import axios from "axios";
import { api_url } from '../backend/functions'
import { withNavigation } from 'react-navigation';
import AuthForm from '../components/Auth/AuthForm'
import AuthInput from '../components/Auth/AuthInput'
import LoginButton from '../components/Auth/LoginButton'

class LoginScreen extends Component {

    constructor() {
        super()

        //Initializing the state.
        this.state = {
            email: "",
            password: "",
            userInfo: [],
            errorMessage: ""
        }
    }

    signIn = async () => {

        const { email, password, userInfo } = this.state

        const userData = {}
        userData.email = email
        userData.password = password
        // console.log(`${email} and ${password}`)

        const url = `${api_url}/mobile/user/login`


        axios.post(url, userData
        ).then(async res => {
            console.log(res)
            //this.setState({ userInfo: res.data })

            if (typeof (res.data) !== 'undefined') {

                const id = res.data.uid
                const username = res.data.username

                if (typeof (username) !== 'undefined') {
                    await AsyncStorage.setItem('userToken', JSON.stringify(res.data))

                    // this.setState({ errorMessage: "" })
                    this.props.navigation.navigate('App')
                } else {
                    this.setState({ errorMessage: "Incorrect Login Information" })
                }
            } else {
                this.setState({ errorMessage: "An Unknown Error occured. Please try again" })
            }
        }).catch(error => {
            console.log(error)
        });

    }

    handleChangeText = (input) => {
        this.setState({ input })
    }

    render() {

        const { container, forgotPasswordText, forgotPasswordButton } = styles

        return (
            <KeyboardAvoidingView style={container} behavior="padding" enabled>
                <AuthForm formTitle="LOG IN">
                    <AuthInput 
                    value={this.state.email}
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                    keyboardType = "email-address"
                    />
                    <AuthInput 
                    secureTextEntry
                    value={this.state.password}
                    placeholder="password"
                    onChangeText={(password) => this.setState({ password })}
                    />
                    <TouchableOpacity style={forgotPasswordButton}>
                        <Text style={forgotPasswordText} allowFontScaling={false}>FORGOT PASSWORD?</Text>
                    </TouchableOpacity>
                    <LoginButton onPress={() => this.signIn()}/>
                </AuthForm>
            </KeyboardAvoidingView>
        );
    }
}
export default withNavigation(LoginScreen);

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