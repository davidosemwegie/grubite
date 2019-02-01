import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import FoodDetailSectionHeader from './FoodDetailSectionHeader'

class ReviewContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FoodDetailSectionHeader />
            </View>
        );
    }
}
export default ReviewContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    }
});