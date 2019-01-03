import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    AsyncStorage,
    Keyboard,
    ScrollView
} from "react-native";
import { api_url } from '../backend/functions'
import Colours from '../constants/Colours'
import SearchScreenInput from '../components/SearchSreen/SearchScreenInput'
import RestaurantList from '../components/SearchSreen/RestaurantList'
import Header from '../components/common/Header'
import PageTitle from '../components/common/PageTitle'
import axios from 'axios'

class Discover extends Component {

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

        const { container, searchArea,  } = styles

        return (
            <View style={container}>
                <Header>
                    <PageTitle>Discover</PageTitle>
                </Header>
                {/* <Button title="Search" onPress={() => this.props.navigation.navigate('Search')} /> */}
                <View style={searchArea}>
                    <SearchScreenInput
                        allowFontScaling={false}
                        value={this.state.search}
                        onChangeText={this.handleChangeText}
                        onSubmitEditing={Keyboard.dismiss}
                        // autoFocus={true}
                        keyboardAppearance="light"
                    />
                    <RestaurantList data={this.state.menu} />
                </View>
            </View>
        );
    }
}
export default Discover;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: Colours.bgColor
    },
    searchArea: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'space-around',
        alignItems: 'center',
        //alignContent: 'center',
        //backgroundColor: 'red'
    }
});