import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

const FoodImageContainer = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            {/* <Image
                style={styles.image}
                source={{ uri: `${props.image}` }}
            /> */}
            <View style={{
                backgroundColor: 'salmon',
                flex: 1
            }}>

            </View>
        </TouchableOpacity>
    )
}
export default FoodImageContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1
    }
});