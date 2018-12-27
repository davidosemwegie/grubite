import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Colours from '../constants/Colours'
import MenuScreenHeader from '../components/Menu/MenuScreenHeader'
import FoodItemList from '../components/Menu/FoodItemList'
import { api_url } from '../backend/functions'
import axios from 'axios'

class MenuScreen extends Component {

    constructor() {
        super()

        this.state = {
            search: "",
            menu: []
        }
    }

    componentDidMount() {

        const rName = this.props.navigation.getParam('RestaurantName', 'No Restaurant Name')
        const rid = this.props.navigation.getParam('rid', '0')

        let url = `${api_url}/menu/getMenuItems/181`

        console.log(url)

        axios.get(url)
            .then(res => {
                //console.log(res.data)

                if (typeof (res.data.rows) !== 'undefined') {
                    this.setState({ menu: res.data.rows })
                    console.log(this.state.menu)
                }
            })
            .catch(error => { console.log(error) })


    }

    search(search) {
        let url = ""

        if (search === null || search === "") {
            url = `${api_url}/getMenuItems/181`
        } else {
            url = `${api_url}/menu/search/181/${search}`
        }

        axios.get(url)
            .then(res => {
                if (typeof (res.data.rows) !== 'undefined') {
                    this.setState({ menu: res.data.rows })
                    console.log(this.state.menu)
                }
            })
            .catch(error => {console.log(error)})
    }

    handleChangeText = (search) => {
        this.setState({ search }, () => {
            const { search } = this.state
            this.search(search)
        })

    }

    render() {
        const { navigation } = this.props

        // const rName = navigation.getParam('RestaurantName', 'No Restaurant Name')
        // const rid = navigation.getParam('rid', '0')


        return (
            <View style={styles.container}>
                <MenuScreenHeader
                value={this.state.search}
                onChangeText={this.handleChangeText}
                keyboardAppearance="light"
                />
                <FoodItemList data={this.state.menu} />
            </View>
        );
    }
}
export default MenuScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.bgColor,
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});