import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
// import { Rating } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Colours from "../../constants/Colours";
import { withNavigation } from 'react-navigation';

const RestaurantCard = (props) => {

    const { container, name, address, rating, bottomRow } = styles

    return (
        // <TouchableOpacity onPress={props.onPress}>
        //     <View style={container}>
        //         <Text style={name}>{props.RestaurantName}</Text>
        //         <Text>{props.address}</Text>
        //         <Rating
        //             type="star"
        //             startingValue={props.rating}
        //             imageSize={20}
        //             readonly={true}
        //             ratingBackgroundColor='#F7F7F7'
        //         />
        //     </View>
        // </TouchableOpacity>
        <TouchableOpacity onPress={props.onPress} style={container}>
            <View>
                <Text style={name}>{props.RestaurantName}</Text>
                <View style={bottomRow}>
                    <Text style={address}>{props.address}</Text>
                    <Rating
                        type="star"
                        startingValue={props.rating}
                        imageSize={20}
                        // readonly={true}
                        ratingColor='#3498db'
                        ratingBackgroundColor='#c8c7c8'
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default withNavigation(RestaurantCard);

const styles = StyleSheet.create({
    // container: {
    //     justifyContent: 'space-around',
    //     marginBottom: 30,
    //     height: 80,
    //     flex: 1,
    //     // width: 380,
    //     padding: 10,
    //     borderRadius: 10,
    //     backgroundColor: "#FFFFFF",
    //     // borderColor: 'rgba(253,121,168,0.2)',
    //     // borderColor: 'rgba(0,0,0,0.1)',
    //     // borderWidth: 1,
    //     // shadowOffset: { width: 0, height: 3 },
    //     // shadowColor: 'rgb(0,0,0)',
    //     // shadowOpacity: 0.16,
    //     // shadowRadius: 0.2,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.2,
    //     shadowRadius: 2,
    //     elevation: 5
    // },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 20,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 10,
        //marginLeft: 20,
        height: 80,
        //width: 380,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    // container: {
    //     justifyContent: 'space-around',
    //     height: 100,
    //     width: 400,
    //     // padding: 10,
    //     // marginTop: 20,
    //     // marginBottom: 20,
    //     borderBottomWidth: 1,
    //     borderBottomColor: 'rgba(0,0,0,0.1)',
    // },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 16,
        // color: "#454F63",
        color: 'rgba(0,0,0,0.7)',
        // color:"#fd79a8",
        fontWeight: '700',
    },
    address: {
        fontSize: 12
    }
});