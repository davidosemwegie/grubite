import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CreateReviewScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CreateReviewScreen</Text>
            </View>
        );
    }
}
export default CreateReviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});