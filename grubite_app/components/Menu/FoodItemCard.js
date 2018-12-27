import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import { api_url } from '../../backend/functions'
import axios from "axios";

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

    const { container, name, price, description } = styles

    return (
        <View style={container}>
            <Text style={name}>{props.foodName}</Text>
            {}
            <TouchableOpacity 
            //onPress={() => this.saveButton(props.foodId)}
            onPress={props.saveButton}
            >
                <Icon
                    name={props.saved ? 'heart' : 'hearto'}
                    size={24}
                />
            </TouchableOpacity>
            <Text style={price}>{props.price}</Text>
            <Text style={description}>{props.description}</Text>
        </View>
    );
}
export default FoodItemCard;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        // height: 100,
        flex: 1,
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