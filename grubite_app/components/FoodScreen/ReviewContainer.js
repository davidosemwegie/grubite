import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import FoodPageSectionHeader from './FoodPageSectionHeader'

class ReviewContainer extends Component {
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
                    <TouchableOpacity style={allReviewsButton}>
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
export default ReviewContainer;

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