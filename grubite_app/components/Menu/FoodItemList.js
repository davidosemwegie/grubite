import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    AsyncStorage,
    ActivityIndicator
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
            showButton: false,
            uid: null,
            isFetching: false
        };
    }

    // onRefresh() = 

    componentDidMount = async () => {
        try {
            const userToken = await AsyncStorage.getItem('userToken');
            if (userToken !== null) {
                const uid = JSON.parse(userToken).uid

                this.setState({ uid })
            }
        } catch (error) {
            console.log(error)
        }
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
                    //data={menu}
                    data={this.props.data}
                    style={{
                        flex: 0.7
                    }}
                    {...this.props}
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
                            onPress={() => this.props.navigation.navigate('FoodScreen', {
                                uid: this.state.uid,
                                foodId: item.foodId,
                                foodName: item.foodName,
                                price: item.price,
                                description: item.description,
                                foodImage: `${api_url}/images/${item.image}`
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
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red'
    }
});

const menu = [
    {
        "foodId": 1,
        "foodName": "Ice Cream",
        "price": 4.69,
        "image": "iceCream.jpg",
        "description": "Its deadass just ice cream",
        "saved": 1
    },
    {
        "foodId": 2,
        "foodName": "Pizza",
        "price": 12.99,
        "image": "pizza.jpg",
        "description": "Any type of pizza that you want",
        "saved": 1
    },
    {
        "foodId": 3,
        "foodName": "Spring Rolls",
        "price": 7.99,
        "image": "springRolls.jpg",
        "description": "Chicken Spring Rolls",
        "saved": 0
    },
    {
        "foodId": 4,
        "foodName": "Fountain Drink",
        "price": 1.99,
        "image": "juice.jpg",
        "description": "Any type of fountain drink that you want",
        "saved": 0
    },
    {
        "foodId": 5,
        "foodName": "Egg Salad",
        "price": 8.99,
        "image": "eggSalad.jpg",
        "description": "Its just an egg salad buddy",
        "saved": 0
    },
    {
        "foodId": 6,
        "foodName": "BBQ ribs",
        "price": 19.89,
        "image": "ribs.jpg",
        "description": "Baby back ribs (also back ribs or loin ribs) are taken from the top of the rib cage between the spine and the spare ribs, below the loin muscle. These ribs are covered in sweet BBQ sauce that will have likcing your fingers!",
        "saved": 0
    }
]