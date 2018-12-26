import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import RestaurantCard from '../common/RestautantCard'

class RestaurantList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) =>
                        // <Text style={styles.item}>{item.key}</Text>
                        <RestaurantCard
                            key={item.roid}
                            RestaurantName={item.rName}
                            address={item.streetAddress}
                            rating={item.rating}
                        />
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}
export default RestaurantList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
        // justifyContent: 'center'
    }
});