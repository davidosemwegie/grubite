import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Colours from "../../constants/Colours";
import Icon from 'react-native-vector-icons/AntDesign'

class ActionsContainer extends Component {
    render() {

        const { container,
            viewNutritionButton,
            bottomSection,
            saveButton,
            shareButton,
            card,
            cardText } = styles

        return (
            <View style={container}>
                <TouchableOpacity
                    onPress={this.props.showNutrition}
                    style={card}>
                    <Text style={cardText} allowFontScaling={false}>View Nutritional Info</Text>
                </TouchableOpacity>
                <View style={bottomSection}>
                    <TouchableOpacity style={card}>
                        <Text style={cardText} allowFontScaling={false}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={card}>
                        <Text style={cardText} allowFontScaling={false}>Share</Text>
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
        marginBottom: 15,
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
    viewNutritionButton: {

    },
    bottomSection: {
        flex: 1,
        flexDirection: 'row',
    },
    saveButton: {

    },
    shareButton: {

    }
});