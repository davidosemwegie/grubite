import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Colours from '../constants/Colours'
import Icon from 'react-native-vector-icons/Ionicons'

class ReviewsScreen extends Component {

    static navigationOptions = ({ navigation }) => {

        let title = navigation.getParam('foodName', 'Name of Food')

        return {
            title,
            headerLeft: (
                <View>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 50,
                            height: 50,
                        }}
                        onPress={() => navigation.goBack()}>
                        <Icon
                            name="md-arrow-round-back"
                            size={35}
                            color={Colours.tintColor}
                        />
                    </TouchableOpacity>
                </View>
            )
        };
    };

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