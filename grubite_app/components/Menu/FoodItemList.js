import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    AsyncStorage
} from "react-native";
import FoodItemCard from './FoodItemCard'
import { api_url } from '../../backend/functions'
import axios from 'axios'
import FoodItemPage from './FoodItemPage'
import { withNavigation } from 'react-navigation';

class FoodItemList extends Component {


    // saveButtonPressed = async (foodId) => {
    //     alert(foodId)
    //     props.reload()
    // }

    constructor() {
        super();
        this.state = {
            showButton: false
        };
    }

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

        this.props.reload()

    }

    showFoodItemPage = (foodId) => {
        return (
            <FoodItemPage foodId={foodId} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    style={{
                        flex: 0.7
                    }}
                    renderItem={({ item }) =>
                        <FoodItemCard
                            {...this.props}
                            image={`${api_url}/images/${item.image}`}
                            foodId={item.foodId}
                            foodName={item.foodName}
                            price={item.price}
                            description={item.description}
                            saved={item.saved}
                            id={item.foodId}
                            saveButton={() => this.saveButtonPressed(item.foodId)}
                            //onPress={() => this.showFoodItemPage(item.foodId)}
                            onPress={() => this.props.navigation.push('FoodItemScreen', {
                                foodId: item.foodId,
                                foodName: item.foodName,
                                price: item.price,
                                description: item.description
                            })}
                        //parentUpdate = {this.saveButtonPressed}
                        //saveButton = {this.saveButton}
                        />
                    }
                    keyExtractor={(item) => item.foodId.toString()}
                />
            </View>
        );
    }
}
export default withNavigation(FoodItemList);

const styles = StyleSheet.create({
    container: {
        //margin: 10,
        flex: 1.75,
        alignItems: 'center',
        //justifyContent: 'center',
        // backgroundColor: 'red'
    }
});