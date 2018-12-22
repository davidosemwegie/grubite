import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";

import RestaurantCard from '../components/common/RestautantCard'
import Header from '../components/common/Header'
import PageTitle from '../components/common/PageTitle'

class Saved extends Component {
    render() {
        return (
            // <SafeAreaView style={{flex: 1, height: }}>
                <View style={styles.container}>
                    <Header>
                        <PageTitle>Saved</PageTitle>
                    </Header>
                    {/* <RestaurantCard
                        RestaurantName="Moxie's Bar and Grill"
                        address="1730 Cooper Rd, Kelowna, BC, V1Y 8V5"
                        rating={3} />
                    <RestaurantCard
                        RestaurantName="Moxie's Bar and Grill"
                        address="1730 Cooper Rd, Kelowna, BC, V1Y 8V5"
                        rating={3} /> */}
                </View>
            // </SafeAreaView>
        ); 
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'grey'
    }
});