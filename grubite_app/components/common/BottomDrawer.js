import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { white } from "ansi-colors";

class BottomDrawer extends Component {
    render() {
        const { background, container } = styles
        return (
            <View style={background}>
                <View style={container}>
                    <Text>Modal</Text>
                </View>
            </View>
        );
    }
}
export default BottomDrawer;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    container: {
        flex: 0.5,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        alignContent: 'center',
    }
});