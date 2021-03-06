import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    Image
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { api_url } from '../../backend/functions'
import axios from "axios";
import Colours from '../../constants/Colours'

const STAR_IMAGE = require('../../assets/star.png')

const FoodItemCard = (props) => {

    componentDidMount = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        if (userToken === null) {
            /* INSERT CODE FOR IF USER IF IS NULL */
        } else {
            uid = JSON.parse(userToken).uid
        }
    };

    saveButton = async (foodId) => {

        try {
            const userToken = await AsyncStorage.getItem('userToken');
            if (userToken !== null) {
                const uid = JSON.parse(userToken).uid

                url = `${api_url}/mobile/user/save/`

                const data = {
                    uid,
                    foodId
                }

                axios.post(url, data)
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        } catch (error) {
            alert("Something went wrong. Please try again")
        }
    }

    const { container, name, price, description, image, imageContainer, textContainer, namePriceContainer, bottomRow, imageBox, container2 } = styles

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={container2}>
            <View style={imageContainer}>
                <Image
                    style={image}
                    // source ={{uri: `${props.image}`}}
                    source={{ uri: `${props.image}` }}
                />
                {/* <View style={imageBox}></View> */}
            </View>
            <View style={textContainer}>
                <View style={namePriceContainer}>
                    <Text allowFontScaling={false}
                        style={name}>{props.foodName}</Text>
                    <Text allowFontScaling={false}
                        style={price}>${props.price}</Text>
                </View>
                <Text allowFontScaling={false}
                    numberOfLines={2}
                    style={description}>{props.description}</Text>
                <View style={bottomRow}>
                    <Rating
                        type='custom'
                        ratingImage={STAR_IMAGE}
                        startingValue={3}
                        imageSize={25}
                        readonly={true}
                        ratingColor= {Colours.tintColour}
                        ratingBackgroundColor='#c8c7c8'
                    />
                    {/* <TouchableOpacity
                        //onPress={() => this.saveButton(props.foodId)}
                        onPress={props.saveButton}
                    >
                        <Icon
                            name={props.saved ? 'heart' : 'hearto'}
                            size={24}
                        />
                    </TouchableOpacity> */}
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default FoodItemCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        // backgroundColor: "salmon",
        flexDirection: 'row',
        //width: 400,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
    },
    container2: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        flexDirection: 'row',
        marginVertical: 2,
        height: 100
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "rgba(0,0,0,0.7)"
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "rgba(0,0,0,0.7)"
    },
    description: {
        //backgroundColor: 'salmon',
        //height: 35
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5
    },
    imageContainer: {
        flex: 1,
        padding: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // elevation: 5,
    },
    textContainer: {
        flex: 3.5,
        padding: 10,
        flexDirection: "column",
        justifyContent: "space-between"
        // paddingRight: 10
        // fontFamily: 'Helvetica',
    },
    namePriceContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    imageBox: {
        flex: 1,
        backgroundColor: 'pink'
    }
});