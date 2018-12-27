import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    AsyncStorage
} from "react-native";
import FoodItemCard from './FoodItemCard'
import {api_url} from '../../backend/functions'
import axios from 'axios'

const FoodItemList = (props) => {


    // saveButtonPressed = async (foodId) => {
    //     alert(foodId)
    //     props.reload()
    // }

    saveButtonPressed = async (foodId) => {

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
            console.log(error)
        }

        props.reload()

    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.data}
                renderItem={({ item }) =>
                    <FoodItemCard
                        {...props}
                        foodId={item.foodId}
                        foodName={item.foodName}
                        price={item.price}
                        description={item.description}
                        saved={item.saved}
                        id = {item.foodId}
                        saveButton={() => this.saveButtonPressed(item.foodId)}
                        //parentUpdate = {this.saveButtonPressed}
                    //saveButton = {this.saveButton}
                    />
                }
                keyExtractor={(item) => item.foodId.toString()}
            />
        </View>
    );

}
export default FoodItemList;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'red'
    }
});