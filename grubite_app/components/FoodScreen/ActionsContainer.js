import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ActionsContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ActionsContainer</Text>
            </View>
        );
    }
}
export default ActionsContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    }
});