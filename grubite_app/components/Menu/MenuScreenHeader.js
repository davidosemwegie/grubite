import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import Colours from '../../constants/Colours'
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation';

const MenuScreenHeader = (props) => {
    const { container,
        name,
        backButton,
        safeview,
        nameContainer,
        textInput } = styles
    return (
        <View style={container}>
            <SafeAreaView style={safeview}>
                <TouchableOpacity style={backButton} onPress={() => props.navigation.navigate("Discover")}>
                    <Icon
                        name="md-arrow-round-back"
                        size={35}
                        color="rgba(0,0,0,0.7)"
                    />
                </TouchableOpacity>
                <View style={nameContainer}>
                    <Text style={name}>{props.name}</Text>
                </View>
            </SafeAreaView>
            {props.children}
        </View>
    );
}
export default withNavigation(MenuScreenHeader);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-around'
    },
    nameContainer: {
        //height: 50, 
        //backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        // marginTop: 15,
        // marginLeft: 15,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'rgb(0,0,0)'
    },
    safeview: {
        flex: 1,
        flexDirection: 'row',
        //backgroundColor: 'red',
        alignItems: 'center'
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        //backgroundColor: 'pink'
    },
    textInput: {
        //flex: 1,
        width: 310,
        //borderLeftColor: "rgba(0,0,0,0.7)",
        borderLeftWidth: 2,
        padding: 10,
        fontWeight: '800',
    },
});