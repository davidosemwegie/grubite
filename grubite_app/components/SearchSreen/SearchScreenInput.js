import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchScreenInput = (props) => {

    cancelButton = () => {
        alert("Cancel Button clicked")
    }

    return (
        <View style={styles.container}>
            <Icon
                allowFontScaling={false}
                name='search'
                style={styles.icon}
            />
            <TextInput
                {...props}
                style={styles.input}
                placeholder="Try 'Shake N' Wing"
                placeholderTextColor="rgba(0,0,0,0.5)"
            />
        </View>
    );
}
export default SearchScreenInput;

const styles = StyleSheet.create({
    /* ON SEARCH SCREEN */
    // container: {
    //     marginTop: 10,
    //     marginHorizontal: 10,
    //     marginLeft: 20,
    //     width: 280,
    //     flexDirection: 'column',
    // },
    // input: {
    //     // borderBottomWidth: 2,
    //     // borderBottomColor: "black",
    //     fontSize: 25,
    //     fontWeight: '800',
    // }
    /* SEARCH ON DISCOVER SCREEN */
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 5,
        //marginLeft: 20,
        height: 50,
        //width: 400,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 0.9,
        padding: 10,
        fontSize: 25,
        fontWeight: '800',
    },
    icon: {
        color: 'rgba(0,0,0,0.5)',
        marginLeft: 5,
        fontSize: 25,
        fontWeight: 'bold',
    }
});