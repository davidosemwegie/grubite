import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage
} from "react-native";
import Header from '../components/common/Header'
import PageTitle from '../components/common/PageTitle'

// const userToken = await AsyncStorage.getItem('userToken')
// const firstName = JSON.parse(userToken).firstName

class Profile extends Component {

    constructor() {
        super()

        this.state = {
            firstName: ""
        }
    }

    logOut = async () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('Auth')
    }

    // getFirstName = async () => {
    //     const userToken = AsyncStorage.getItem('userToken')
    //     const firstName = JSON.parse(userToken).firstName
    //     console.log(firstName)
    // }

    componentDidMount = async () => {
        //this.retrieveData

        try {
            const userToken = await AsyncStorage.getItem('userToken');
            if (userToken !== null) {
                const firstName = JSON.parse(userToken).firstName
                // console.log(firstName)
                this.setState({firstName: firstName})
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    // retrieveData = async () => {
    //     try {
    //         const userToken = await AsyncStorage.getItem('userToken');
    //         if (userToken !== null) {
    //             const firstName = JSON.parse(userToken).firstName
    //             // console.log(firstName)
    //             this.setState({firstName: firstName})
    //         }
    //     } catch (error) {
    //         // Error retrieving data
    //     }
    // }

    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <PageTitle>{this.state.firstName}</PageTitle>
                </Header>
                <Button title="Log out" onPress={this.logOut} />
            </View>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
    }
});