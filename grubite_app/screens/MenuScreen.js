import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
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
            searchValue: "",
            menu: [],
            uid: ""
        }
    }

    componentDidMount = async () => {

        // const { rid } = this.state

        const rName = this.props.navigation.getParam('RestaurantName', 'No Restaurant Name')
        const roid = this.props.navigation.getParam('rid', '181')
        const userToken = await AsyncStorage.getItem('userToken');

        if (userToken !== null) {
            const uid = JSON.parse(userToken).uid
            // alert(uid)
            this.setState({ uid })

            let url = `${api_url}/mobile/user/menu/${roid}/${this.state.uid}`

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

        } else {
            /* INSERT CODE FOR WHEN SOMEONE IS NOT LOGGED IN HERE */
        }

    }

    search = (searchValue) => {

        const { uid } = this.state

        const roid = this.props.navigation.getParam('rid', '181')

        let url = ""

        if (searchValue === null || searchValue === "") {
            url = `${api_url}/mobile/user/menu/${roid}/${uid}`
        } else {
            url = `${api_url}/mobile/user/menu/${roid}/${uid}/${searchValue}`
        }

        axios.get(url)
            .then(res => {
                if (typeof (res.data.rows) !== 'undefined') {
                    this.setState({ menu: res.data.rows })
                    //console.log(this.state.menu)
                }
            })
            .catch(error => { console.log(error) })
    }

    handleChangeText = (searchValue) => {
        this.setState({ searchValue }, () => {
            const { searchValue } = this.state
            this.search(searchValue)
        })
    }

    reload = () => {
        // this.setState({ menu: this.state.menu });
        this.componentDidMount()

        const { searchValue } = this.state

        if (searchValue === null || searchValue === "") {
            this.componentDidMount()
        } else {
            this.search(searchValue)
        }
    }

    render() {
        const { navigation } = this.props

        const rName = navigation.getParam('RestaurantName', 'No Restaurant Name')
        // const rid = navigation.getParam('rid', '0')

        return (
            <View style={styles.container}>
                <MenuScreenHeader
                    value={this.state.search}
                    onChangeText={this.handleChangeText}
                    keyboardAppearance="light"
                    placeholder={`Search ${rName}'s Menu`}
                />
                <FoodItemList
                    reload={() => this.reload()}
                    data={this.state.menu}
                />
            </View>
        );
    }
}
export default MenuScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.bgColor,
        flex: 1,
    }
});