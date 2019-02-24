import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';
import Colours from '../../../constants/Colours'
const STAR_IMAGE = require('../../../assets/star.png')


const ReviewCard = (props) => {

    const { container,
        container2,
        topRow,
        secondRow,
        bottomRow } = styles

    return (
        <View style={container}>
            <View style={topRow}>
                <Text 
                allowFontScaling={false}
                style={{
                    fontWeight: 'bold',
                    fontSize: 20
                }}
                >{props.username}</Text>
            </View>
            <View style={secondRow}>
                <View style={{
                    flexDirection: "row"
                }}>
                    <Rating
                        type='custom'
                        ratingImage={STAR_IMAGE}
                        startingValue={props.rating}
                        imageSize={25}
                        readonly={true}
                        ratingColor={Colours.tintColour}
                        ratingBackgroundColor='#c8c7c8'
                        // style={{
                        //     backgroundColor: 'red'
                        // }}
                    />
                </View>
            </View>
            <View style={bottomRow}>
                <Text
                    allowFontScaling={false}
                    numberOfLines={3}
                >{props.reviewText}</Text>
            </View>
        </View>
    );

}
export default ReviewCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#f5f5f5',
        //backgroundColor: "#c8c7c8",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    container2: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        flexDirection: 'column',
        marginVertical: 2,
        height: 100,
        borderBottomColor: "#c8c7c8",
        borderBottomWidth: 1,
    },
    topRow: {
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: 'salmon'
    },
    secondRow: {
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: 'brown'
    },
    bottomRow: {
        flex: 3,
        justifyContent: 'center',
        //backgroundColor: 'pink'
    },

});