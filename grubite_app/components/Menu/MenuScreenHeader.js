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
    const { container, textBox, backButton, textInput } = styles
    return (
        <View style={container}>
            <SafeAreaView>
                <View style={textBox}>
                    <TouchableOpacity style={backButton} onPress={() => props.navigation.goBack()}>
                        <Icon
                            name="md-arrow-round-back"
                            size={35}
                            color="rgba(0,0,0,0.7)"
                        />
                    </TouchableOpacity>
                    <TextInput
                        {...props}
                        value={props.value}
                        style={textInput}
                        placeholder={props.placeholder}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}
export default withNavigation(MenuScreenHeader);

const styles = StyleSheet.create({
    container: {
        height: 180,
        alignItems: 'center',
        // backgroundColor: "#E4E4E4",
        backgroundColor: Colours.tintColour
    },
    textBox: {
        marginTop: 10,
        backgroundColor: "#FFFFFF",
        //width: '100%',
        flex: 0.7,
        height: 60,
        borderRadius: 12,
        // justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: 310,
        borderLeftColor: "rgba(0,0,0,0.7)",
        borderLeftWidth: 2,
        padding: 10,
        fontWeight: '800',
        // fontSize: 18
        // backgroundColor: 'red'
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        // backgroundColor: 'blue'
    }
});