import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import BackButton from '../common/BackButton'

const AuthForm = (props) => {
    return (
        <View style={styles.container}>
            <BackButton />
            <Text allowFontScaling={false} style={styles.title}>{props.formTitle}</Text>
            {props.children}
        </View>
    );
}
export default AuthForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        marginVertical: 10,
    }
});