import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation';
import Colours from '../constants/Colours'
import BackButton from '../components/common/BackButton'
import { api_url } from '../backend/functions'
import axios from 'axios'

import FoodPageSectionHeader from '../components/FoodScreen/FoodPageSectionHeader'
import FoodImageContainer from '../components/FoodScreen/FoodImageContainer'
import FoodDetailContainer from '../components/FoodScreen/FoodDetailContainer'
import ReviewContainer from '../components/FoodScreen/ReviewContainer'
import ActionsContainer from '../components/FoodScreen/ActionsContainer'
import BottomDrawer from '../components/common/BottomDrawer'


class FoodItemScreen extends Component {

    constructor() {
        super()

        this.state = {
            uid: null,
            foodId: '',
            foodName: '',
            foodImage: 'no image'
        }
    }

    static navigationOptions = ({ navigation }) => {

        let title = navigation.getParam('foodName', 'Name of Food')

        return {
            title,
            headerLeft: (
                //<BackButton />
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                    }}
                    onPress={() => navigation.navigate("Menu")}>
                    <Icon
                        name="md-arrow-round-back"
                        size={35}
                        color="rgba(0,0,0,0.7)"
                    />
                </TouchableOpacity>
            )
        };
    };

    componentDidMount = () => {
        this.setState(
            {
                uid: this.props.navigation.getParam('uid', 3),
                foodId: this.props.navigation.getParam('foodId', 2),
                foodName: this.props.navigation.getParam('foodName', 'Food Name'),
                foodImage: this.props.navigation.getParam('foodImage', 'https://grubite-api.appspot.com/images/iceCream.jpg')
            }
        )
    }

    saveButton = async (foodId) => {

        //alert(`this food id is ${foodId} and the user id ${this.state.uid}`)

        const { uid } = this.state

        url = `${api_url}/mobile/user/save/`

        //alert(url)

        const data = {
            uid,
            foodId
        }

        axios.post(url, data)
            .then(res => {
                alert(res.data.message)
            })
            .catch(error => {
                alert(error)
            })
    }

    render() {

        const { foodName, foodImage, foodId } = this.state

        const foodData = {
            foodName: foodName,
            foodId: foodId
        }

        return (
            <View style={styles.container}>
                <FoodDetailContainer foodName={foodName} />
                <FoodImageContainer image={foodImage} />
                <FoodPageSectionHeader sectionHeader="Reviews" />
                <ReviewContainer
                    viewReviews={() => this.props.navigation.navigate('ReviewsScreen', foodData)}
                />
                <FoodPageSectionHeader sectionHeader="Actions" />
                <ActionsContainer
                    showNutrition={() => this.props.navigation.navigate('NutritionScreen', foodData)}
                    saveAction={() => this.saveButton(this.state.foodId)}
                />
            </View>
        );
    }
}
export default withNavigation(FoodItemScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colours.bgColor,
        //backgroundColor: 'white'
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    inner: {
        zIndex: 1
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        //backgroundColor: 'pink'
    }
});