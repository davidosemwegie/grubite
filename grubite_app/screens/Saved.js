import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    AsyncStorage
} from "react-native";
import Colours from '../constants/Colours'
import RestaurantCard from '../components/common/RestautantCard'
import Header from '../components/common/Header'
import PageTitle from '../components/common/PageTitle'
import FoodItemList from '../components/Menu/FoodItemList'

import { api_url } from '../backend/functions'

import axios from 'axios'

class Saved extends Component {

    constructor() {
        super()

        this.state = {
            savedItems: [],
            uid: null,
            nothingSavedText: ''
        }
    }

    compo

    
    componentDidMount = async () => {

        //const rName = this.props.navigation.getParam('RestaurantName', `David's Kitchen`)
        //const roid = this.props.navigation.getParam('rid', '181')
        const userToken = await AsyncStorage.getItem('userToken');

        const roid = 181

        //this.setState({ rName })

        if (userToken !== null) {
            const uid = JSON.parse(userToken).uid
            // alert(uid)
            this.setState({ uid })

            let url = `${api_url}/mobile/user/saved/${uid}`

            console.log(url)

            axios.get(url)
                .then(res => {

                    if (typeof (res.data.rows) !== 'undefined') {
                        this.setState({ savedItems: res.data.rows })
                        //alert(this.state.savedItems)
                    }
                })
                .catch(error => { console.log(error) })

        } else {
            /* INSERT CODE FOR WHEN SOMEONE IS NOT LOGGED IN HERE */
        }


        var lengthOfResponse = Object.keys(this.state.savedItems).length

        //alert(lengthOfResponse)

        if (lengthOfResponse === '0') {
            this.setState({nothingSavedText: "You don't have any menu items saved"})
        } else {
            this.setState({nothingSavedText: ""})
        }
    }

    render() {

        const { savedItems, nothingSavedText } = this.state

        return (
            // <SafeAreaView style={{flex: 1, height: }}>
            <View style={styles.container}>
                <Header>
                    <PageTitle>Saved</PageTitle>
                </Header>
                <Text>{nothingSavedText}</Text>
                <FoodItemList
                    //reload={() => this.reload()}
                    data={this.state.savedItems}
                />
            </View>
            // </SafeAreaView>
        );
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: Colours.bgColor,
    }
});