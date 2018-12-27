import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import FoodItemCard from './FoodItemCard'

const FoodItemList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props.data}
                renderItem={({item}) => 
                <FoodItemCard
                foodName = {item.foodName}
                price = {item.price}
                description = {item.description}
                />
            }
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );

}
export default FoodItemList;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});