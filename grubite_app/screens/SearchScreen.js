import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Keyboard,
    ScrollView
} from "react-native";
import { api_url } from '../backend/functions'
import Header from '../components/common/Header'
import SearchScreenInput from '../components/SearchSreen/SearchScreenInput'
import RestaurantList from '../components/SearchSreen/RestaurantList'
import axios from "axios";

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
                    this.setState({menu: res.data})
                    console.log(this.state.menu)
                }
            })
    }

    search(search){
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
                    this.setState({menu: res.data})
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
        return (
            <View style={styles.container}>
                <Header>
                    <SearchScreenInput
                        value={this.state.search}
                        onChangeText={this.handleChangeText}
                    />
                </Header>
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
        backgroundColor: "#F7F7F7",
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});