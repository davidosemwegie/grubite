import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class ActionsContainer extends Component {
    render() {

        const { container,
            viewNutritionButton,
            bottomSection,
            saveButton,
            shareButton } = styles

        return (
            <View style={container}>
                <TouchableOpacity style={viewNutritionButton}>
                    <Text>View Nutritional Info</Text>
                </TouchableOpacity>
                <View style={bottomSection}>
                    <TouchableOpacity style={saveButton}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={shareButton}>
                        <Text>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default ActionsContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        marginBottom: 15,
    },
    viewNutritionButton: {
        flex: 1,
        backgroundColor: 'blue'
    },
    bottomSection: {
        flex: 1,
        flexDirection: 'row',
    },
    saveButton: {
        flex: 1,
        backgroundColor: 'purple'
    },
    shareButton: {
        flex: 1,
        backgroundColor: 'pink'
    }
});