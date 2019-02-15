import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import LoginButton from '../components/Auth/LoginButton'
import SignupButton from '../components/Auth/SignupButton'
import AuthInput from '../components/Auth/AuthInput'

class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    //backgroundColor: 'pink'
                }}>
                    <SignupButton onPress={()=> {this.props.navigation.navigate('SignUp')}} />
                    <LoginButton  onPress={()=> {this.props.navigation.navigate('LogIn')}}/>
                </View>
                {/* <Button title="Log In" onPress={()=> {this.props.navigation.navigate('LogIn')}}/>
                <Button title="Sign Up" onPress={()=> {this.props.navigation.navigate('SignUp')}}/> */}
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    }
});