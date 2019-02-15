import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import AuthButton from './AuthButton'

const LoginButton = (props) => {
        return (
            <View style={styles.container}>
                <AuthButton 
                {... props}
                backgroundColor="black"
                textColor = "white" 
                title="LOG IN"/>
            </View>
        ); 
}
export default LoginButton;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'salmon'
    }
});