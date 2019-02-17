import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';
import Colours from '../../constants/Colours'

const STAR_IMAGE = require('../../assets/star.png')

const FoodDetailContainer = (props) => {

    const { container, foodNameStyle, restaurantDetails } = styles

    return (
        <View style={container}>
            <Text style={foodNameStyle} allowFontScaling={false}>$30</Text>
            <Rating
                type='custom'
                ratingImage={STAR_IMAGE}
                startingValue={3}
                imageSize={25}
                readonly={true}
                ratingColor={Colours.tintColour}
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