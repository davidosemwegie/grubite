import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";

const SearchScreenInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                style={styles.input}
                placeholder="Try 'Barcelos'"
                placeholderTextColor="rgba(0,0,0,0.5)" />
        </View>
    );
}
export default SearchScreenInput;

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        marginHorizontal: 10,
        marginLeft: 20,
        width: 350,
    },
    input: {
        // borderBottomWidth: 2,
        // borderBottomColor: "black",
        fontSize: 30,
        fontWeight: '800',
    }
});