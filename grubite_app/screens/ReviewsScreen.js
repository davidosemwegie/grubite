import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ReviewsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ReviewsScreen</Text>
            </View>
        );
    }
}
export default ReviewsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});