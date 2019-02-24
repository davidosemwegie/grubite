import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Colours from '../constants/Colours'
import Icon from 'react-native-vector-icons/AntDesign'
import BackButton from '../components/common/BackButton'
// import Icon from 'react-native-vector-icons/AntDesign'
import PageTitle from '../components/common/PageTitle'
import Header from '../components/common/Header'
import ReviewList from '../components/FoodScreen/ReviewSection/ReviewList'

class ReviewsScreen extends Component {

    static navigationOptions = ({ navigation }) => {

        let title = navigation.getParam('foodName', 'Name of Food')

        return {
            title,
            headerLeft: (
                <View>
                    <BackButton />
                </View>
            )
        };
    };

    render() {

        const { container,
            pageTitle,
            header,
            reviewListContainer,
            newReviewButton } = styles

        return (
            <View style={container}>
                <View style={header}>
                    <View>
                        <Text
                            allowFontScaling={false}
                            style={pageTitle}>Reviews
                    </Text>
                    </View>
                    <TouchableOpacity
                    onPress={() => alert("You are about to make a Review")}
                        style={newReviewButton}>
                        <Icon
                            name="pluscircle"
                            size={35}
                        />
                    </TouchableOpacity>
                </View>
                <View style={reviewListContainer}>
                    <ReviewList />
                </View>
            </View>
        );
    }
}
export default ReviewsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignContent: 'center',
        //backgroundColor: Colours.bgColor
    },
    header: {
        flex: 1,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pageTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'rgb(0,0,0)'
    },
    reviewListContainer: {
        flex: 7,
        paddingTop: 10,
        //backgroundColor: "#F5F5F5"
    },
    newReviewButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
    }
});