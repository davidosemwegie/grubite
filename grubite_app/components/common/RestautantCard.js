import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Rating } from 'react-native-elements';

const RestaurantCard = (props) => {

    const { container, name, address, rating } = styles

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={container}>
                <Text style={name}>{props.RestaurantName}</Text>
                <Text>{props.address}</Text>
                <Rating
                    type="star"
                    startingValue={props.rating}
                    imageSize={20}
                    readonly={true}
                />
            </View>
        </TouchableOpacity>
    );
}
export default RestaurantCard;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        marginBottom: 20,
        height: 100,
        width: 350,
        padding: 10,
        borderRadius: 2,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 5
    },
    name: {
        fontSize: 16,
        color: "#454F63",
        // color:"#fd79a8",
        fontWeight: '700',
    }
});