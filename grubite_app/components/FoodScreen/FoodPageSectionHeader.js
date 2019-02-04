import React, { Component } from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native";

const FoodPageSectionHeader = (props) => {
    
    const {container, sectionHeader} = styles

    return (
        <View style={styles.container}>
            {/* <Heading>Hello</Heading> */}
            <Text style={sectionHeader} allowFontScaling={false}>{props.sectionHeader}</Text>
        </View>
    );
}
export default FoodPageSectionHeader;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        //backgroundColor: 'white'
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});