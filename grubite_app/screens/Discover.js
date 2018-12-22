import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    AsyncStorage
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import Header from '../components/common/Header'
import PageTitle from '../components/common/PageTitle'
import { Button } from "react-native-elements";

class Discover extends Component {

    componentDidMount = async () => {
        console.log(await AsyncStorage.getItem('username'))
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <PageTitle>Discover</PageTitle>
                </Header>
                <Button title="Search" onPress={() => this.props.navigation.navigate('SearchScreen')}/>
            </View>
        );
    }
}
export default Discover;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});