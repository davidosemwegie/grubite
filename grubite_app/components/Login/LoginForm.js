import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage,
    TextInput,
    KeyboardAvoidingView
} from "react-native";
import axios from "axios";
import { api_url } from '../../backend/functions'
import AuthInput from '../common/AuthInput'
import AuthButton from '../common/AuthButton'
import { withNavigation } from 'react-navigation';


class LoginForm extends Component {
    constructor() {
        super()

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
        const { navigate } = this.props
        return (
            <View style={styles.container}>
                    <AuthInput
                        icon="mail"
                        value={this.state.email}
                        placeholder="Email"
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <AuthInput
                        icon="lock"
                        secureTextEntry
                        value={this.state.password}
                        placeholder="Password"
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <Text>{this.state.errorMessage}</Text>
                    {/* <AuthButton title="Sign In" onPress={this.signIn} /> */}
                    <AuthButton onPress={this.signIn}>Sign In</AuthButton>
                    <View style={styles.footer}>
                        <Text>Create Account</Text>
                        <Text>Forgot Password</Text>
                    </View>
            </View>

        );
    }
}
export default withNavigation(LoginForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    loginBox: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 250,
    },
    footer: {
        flexDirection: "row"
    }
});