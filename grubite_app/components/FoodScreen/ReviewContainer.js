import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import FoodPageSectionHeader from './FoodPageSectionHeader'
import { withNavigation } from 'react-navigation';
import Colours from "../../constants/Colours";

class ReviewContainer extends Component {

    render() {

        const { container,
            topSection,
            leaveReviewButton,
            averageRatingSection,
            allReviewsButton,
            card,
            cardText } = styles

        return (
            <View style={container}>
                <View style={topSection}>
                    <View style={card}>
                        <Text style={cardText} allowFontScaling={false}>Average Rating</Text>
                    </View>
                    <TouchableOpacity
                        onPress={this.props.viewReviews}
                        style={card}
                    >
                        <Text style={cardText} allowFontScaling={false}>See all</Text>
                        <Text style={cardText} allowFontScaling={false}>Reviews</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={card}>
                    <Text style={cardText} allowFontScaling={false}>Leave a Review</Text>
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
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        margin: 2,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 20,
        fontWeight: '700',
        color: Colours.textColor
    },
    averageRatingSection: {

    },
    allReviewsButton: {

    },
    leaveReviewButton: {

    }
});