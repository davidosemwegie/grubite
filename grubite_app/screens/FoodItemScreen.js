import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation';

import BackButton from '../components/common/BackButton'

class FoodItemScreen extends Component {

    constructor() {
        super()

        this.state = {
            foodName: '',
            foodId: null
        }
    }

    componentDidMount = () => {
        console.log(this.props.navigation.getParam('foodId', '3'))
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('foodName', 'Name of Food'),
            headerLeft: (
                //<BackButton />
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                    }}
                    onPress={() => navigation.navigate("Menu")}>
                    <Icon
                        name="md-arrow-round-back"
                        size={35}
                        color="rgba(0,0,0,0.7)"
                    />
                </TouchableOpacity>
            )
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>FoodItemScreen</Text>
            </View>
        );
    }
}
export default withNavigation(FoodItemScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        //backgroundColor: 'pink'
    }
});