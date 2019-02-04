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
                foodId: this.props.navigation.getParam('foodId', 2),
                foodName: this.props.navigation.getParam('foodName', 'Food Name'),
                foodImage: this.props.navigation.getParam('foodImage', 'https://grubite-api.appspot.com/images/iceCream.jpg')
            }
        )
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
                />
            </View>
        );
    }
}
export default withNavigation(FoodItemScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colours.bgColor
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