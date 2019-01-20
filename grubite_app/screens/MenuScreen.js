import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    ScrollView
} from "react-native";
import Colours from '../constants/Colours'
import MenuScreenHeader from '../components/Menu/MenuScreenHeader'
import FoodItemList from '../components/Menu/FoodItemList'
import { api_url } from '../backend/functions'
import axios from 'axios'
import Icon from 'react-native-vector-icons/Ionicons'

class MenuScreen extends Component {

    constructor() {
        super()

        this.state = {
            search: "",
            searchValue: "",
            menu: [],
            uid: "",
            rName: "",
            selectedCategory: 0,
            subCategories: []
        }
    }

    componentDidMount = async () => {

        const rName = this.props.navigation.getParam('RestaurantName', `David's Kitchen`)
        const roid = this.props.navigation.getParam('rid', '181')
        const userToken = await AsyncStorage.getItem('userToken');

        this.setState({ rName })

        if (userToken !== null) {
            const uid = JSON.parse(userToken).uid
            // alert(uid)
            this.setState({ uid })

            let url = `${api_url}/mobile/user/menu/${roid}/${this.state.uid}`

            console.log(url)

            axios.get(url)
                .then(res => {

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

        const rName = this.props.navigation.getParam('rName', `David's Kitchen`)

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
            //console.log(searchValue)
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

    categories = [
        {
            "mcid": "0",
            "categoryName": "All"

        },
        {
            "mcid": "1",
            "categoryName": "Appetizers"

        },
        {
            "mcid": "2",
            "categoryName": "Mains"

        },
        {
            "mcid": "3",
            "categoryName": "Desserts"

        },
        {
            "mcid": "4",
            "categoryName": "Drinks"

        }
    ]

    setCategory = (selectedCategory) => {
        this.setState({ selectedCategory }, () => {

            const mcid = this.state.selectedCategory;

            const { uid } = this.state

            const roid = this.props.navigation.getParam('rid', '181')

            let url = ""

            if (mcid == 0) {
                url = `${api_url}/menu/getMenuItems/${roid}`
            } else {
                url = `${api_url}/menu/getMenuItems/${roid}/${mcid}`
                this.setSubCategory(roid, mcid)
            }

            axios.get(url)
                .then(res => {
                    if (typeof (res.data.rows) !== 'undefined') {
                        this.setState({ menu: res.data.rows })
                    }
                })
                .catch(error => { console.log(error) })


        })
    }

    setSubCategory = (roid, mcid) => {
        let url = `${api_url}/menu/getSubCategories/${roid}/${mcid}/`

        axios.get(url)
                .then(res => {
                    if (typeof (res.data.rows) !== 'undefined') {
                        this.setState({ subCategories: res.data.rows })
                        console.log(this.state.subCategories)
                    }
                })
                .catch(error => { console.log(error) })
    }

    render() {
        const { navigation } = this.props
        const { splitter,
            category,
            textBox,
            backButton,
            textInput,
            headerContainer,
            categories,
            categoryButton,
            activeCategory } = styles

        const rName = navigation.getParam('RestaurantName', 'No Restaurant Name')
        // const rid = navigation.getParam('rid', '0')

        return (
            <View style={styles.container}>
                <MenuScreenHeader name={this.state.rName}>
                    <View style={textBox}>
                        <TextInput
                            //{...props}
                            value={this.state.searchValue}
                            style={textInput}
                            placeholder="Search here"
                            onChangeText={this.handleChangeText}
                        />
                    </View>
                    <FlatList
                        contentContainerStyle={{
                            flex: 1,
                            alignItems: "center",
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}
                        scrollEnabled={false}
                        style={categories}
                        horizontal={true}
                        data={this.categories}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={categoryButton}
                                onPress={() => this.setCategory(item.mcid)}>
                                <Text
                                    allowFontScaling={false}
                                    style={this.state.selectedCategory == item.mcid ? activeCategory : category}
                                >
                                    {item.categoryName}</Text>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item) => item.mcid.toString()}
                    //ItemSeparatorComponent={() => <View style={splitter}></View>}
                    //ItemSeparatorComponent={() => <Text style={splitter}>|</Text>}
                    />
                </MenuScreenHeader>
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
        flexDirection: 'column'
    },
    category: {
        fontSize: 20,
        color: "rgba(0,0,0,0.5)",
        fontWeight: '700',
    },
    activeCategory: {
        color: Colours.tintColour,
        fontWeight: '700',
        fontSize: 20,
        textDecorationLine: 'underline',
    },
    splitter: {
        // padding: 0,
        // margin: 0,
        // width: 2,
        // height: 20,
        // backgroundColor: 'black'
    },
    categories: {
        //height: 50,
        // backgroundColor: 'red',
        // flex: 4
    },
    textBox: {
        flex: 1,
        padding: 5,
        marginHorizontal: 8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: 'white'
    },
    textInput: {
        flex: 1,
        fontWeight: '800',
        fontSize: 15,
        padding: 10
    },
    // categoryButton: {
    //     backgroundColor: 'white',
    //     padding: 10,
    //     borderRadius: 10,
    //     margin: 5,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 3 },
    //     shadowOpacity: 0.2,
    //     shadowRadius: 2,
    //     elevation: 5
    // },
    headerContainer: {
        //backgroundColor: 'red',
        flex: 1,
        flexDirection: 'column',
        alignItems: "center"
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50
    },
});