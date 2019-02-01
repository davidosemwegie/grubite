import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';

const FoodDetailContainer = (props) => {

    const { container, foodNameStyle, restaurantDetails } = styles

    return (
        <View style={container}>
            <Text style={foodNameStyle} allowFontScaling={false}>$30</Text>
            <Rating
                type="star"
                startingValue={3}
                imageSize={20}
                readonly={true}
                ratingColor='#3498db'
                ratingBackgroundColor='#c8c7c8'
            />
            <Text style={restaurantDetails} allowFontScaling={false}>David's Kitchen</Text>
            <Text style={restaurantDetails} allowFontScaling={false}>324 Paper Street</Text>
        </View>
    )
}
export default FoodDetailContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    foodNameStyle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    restaurantDetails: {
        fontWeight: '300',
        fontSize: 15
    }
});