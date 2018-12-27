import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const FoodItemCard = (props) => {

    const {container, name, price, description} = styles

    return (
        <View style={container}>
            <Text style={name}>{props.foodName}</Text>
            <Text style={price}>{props.price}</Text>
            <Text style={description}>{props.description}</Text>
        </View>
    );
}
export default FoodItemCard;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        height: 100,
        width: 380,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFFFFF"
    }, 
    name: {

    },
    price: {

    },
    description: {
        
    }
});