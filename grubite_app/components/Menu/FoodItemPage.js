import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class FoodItemPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.foodId}</Text>
            </View>
        );
    }
}
export default FoodItemPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});