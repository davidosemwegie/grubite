import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar
} from "react-native";
import Colours from '../../constants/Colours'

const Header = (props) => {

    componentDidMount = () => {
        this.headerHeight = 100

        if (Platform.OS == 'android') {
            this.headerHeight = 100 + StatusBar.currentHeight
        }
    };

    const { container} = styles
    return (
        <View style={container}>
            {props.children}
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container: {
        height: 140,
        backgroundColor: Colours.bgColor
    }
});