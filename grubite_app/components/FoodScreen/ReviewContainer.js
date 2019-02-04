import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import FoodPageSectionHeader from './FoodPageSectionHeader'
import { withNavigation } from 'react-navigation';

class ReviewContainer extends Component {

    constructor() {
        super()
    }

    // static navigationOptions = ({ navigation }) => {

    //     let headerTitle = "Nutrition Facts"
    //     let header
    //     return {headerTitle}

    //     // return {
    //     //     title: navigation.getParam('foodName', 'Name of Food'),
    //     //     headerLeft: (
    //     //         //<BackButton />
    //     //         <TouchableOpacity
    //     //             style={{
    //     //                 justifyContent: 'center',
    //     //                 alignItems: 'center',
    //     //                 width: 50,
    //     //                 height: 50,
    //     //             }}
    //     //             onPress={() => navigation.navigate("Menu")}>
    //     //             <Icon
    //     //                 name="md-arrow-round-back"
    //     //                 size={35}
    //     //                 color="rgba(0,0,0,0.7)"
    //     //             />
    //     //         </TouchableOpacity>
    //     //     )
    //     // };
    // };

    render() {

        const { container,
            topSection,
            leaveReviewButton,
            averageRatingSection,
            allReviewsButton } = styles

        return (
            <View style={container}>
                <View style={topSection}>
                    <View style={averageRatingSection}>
                        <Text>Average Rating</Text>
                    </View>
                    <TouchableOpacity
                        onPress={this.props.viewReviews}
                        //onPress={() => this.props.navigation.navigate('ReviewsScreen')}
                        //onPressIn={console.log("Revies PRessed")}
                        style={allReviewsButton}
                    >
                        <Text>See all</Text>
                        <Text>Reviews</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={leaveReviewButton}>
                    <Text>Leave a Review</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default withNavigation(ReviewContainer);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
    },
    topSection: {
        flex: 2,
        backgroundColor: 'pink',
        flexDirection: 'row',
    },
    averageRatingSection: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    allReviewsButton: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leaveReviewButton: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
});