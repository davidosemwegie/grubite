import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Keyboard,
    ScrollView,
    TouchableOpacity, 
    SafeAreaView
} from "react-native";
import Colours from '../constants/Colours'
import { api_url } from '../backend/functions'
import Header from '../components/common/Header'
import SearchScreenInput from '../components/SearchSreen/SearchScreenInput'
import RestaurantList from '../components/SearchSreen/RestaurantList'
import axios from "axios";
import Icon from 'react-native-vector-icons/AntDesign'

class SearchScreen extends Component {

    constructor() {
        super()

        this.state = {
            search: "",
            menu: []
        }
    }

    componentDidMount() {

        let url = `${api_url}/mobile/restaurants/`

        axios.get(url)
            .then(res => {
                //console.log(res.data)

                if (typeof (res.data) !== 'undefined') {
                    this.setState({ menu: res.data })
                    console.log(this.state.menu)
                }
            })


    }

    search(search) {
        let url = ""

        if (search === null || search === "") {
            url = `${api_url}/mobile/restaurants/`
        } else {
            url = `${api_url}/mobile/restaurants/${search}`
        }

        axios.get(url)
            .then(res => {
                //console.log(res.data)

                if (typeof (res.data) !== 'undefined') {
                    this.setState({ menu: res.data })
                    console.log(this.state.menu)
                }
            })
    }

    handleChangeText = (search) => {
        this.setState({ search }, () => {
            const { search } = this.state
            this.search(search)
        })
    }

    render() {

        const { container, header, exitButton } = styles

        return (
            <View style={container}>
                <View style={header}>
                    <Header>
                        <SafeAreaView style={exitButton}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Discover") }}>
                                <Icon
                                    name="close"
                                    size={30}
                                />
                            </TouchableOpacity>
                        </SafeAreaView>
                        <SearchScreenInput
                            value={this.state.search}
                            onChangeText={this.handleChangeText}
                            onSubmitEditing={Keyboard.dismiss}
                            autoFocus={true}
                            keyboardAppearance="light"
                        />
                        {/* <Button title="Cancel"/> */}
                    </Header>
                </View>
                <ScrollView>
                    <RestaurantList data={this.state.menu} />
                </ScrollView>
            </View>
        );
    }
}
export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.bgColor,
        flex: 1,
    },
    exitButton: {
        width: 50,
        margin: 10
        // backgroundColor: 'red'
    }
});