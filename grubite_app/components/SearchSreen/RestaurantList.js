import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import RestaurantCard from '../common/RestautantCard'
import { withNavigation } from 'react-navigation';

const RestaurantList = (props) => {

    const {container} = styles
    return (
        <View style={container}>
            <FlatList
                data={props.data}
                renderItem={({ item }) =>
                    // <Text style={styles.item}>{item.key}</Text>
                    <RestaurantCard
                        // key={item.roid}
                        RestaurantName={item.rName}
                        address={item.streetAddress}
                        rating={item.rating}
                        onPress={() => props.navigation.navigate("Menu", {
                            rid: item.roid,
                            RestaurantName: item.rName
                        })}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
export default withNavigation(RestaurantList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    }
});