import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

const SearchScreenInput = (props) => {

    cancelButton = () => {
        alert("Cancel Button clicked")
    }

    return (
        <View style={styles.container}>
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
    container: {
        marginTop: 10,
        marginHorizontal: 10,
        marginLeft: 20,
        width: 280,
        flexDirection: 'column',
    },
    input: {
        // borderBottomWidth: 2,
        // borderBottomColor: "black",
        fontSize: 25,
        fontWeight: '800',
    }
});