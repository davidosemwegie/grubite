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
import { withNavigation } from 'react-navigation';

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
            subCategories: [],
            showSubCategories: false
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
                    this.setState({
                        subCategories: res.data.rows
                    })
                    console.log(this.state.subCategories)

                    if (this.state.subCategories.length > 0) {
                        this.setState({ showSubCategories: true })
                        //console.log(this.state.subCategories.length)
                    }
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
            activeCategory,
            categoryButtonSmall,
            icon } = styles

        const rName = navigation.getParam('RestaurantName', 'No Restaurant Name')
        // const rid = navigation.getParam('rid', '0')

        let SubRows = () => <View></View>

        if (this.state.showSubCategories) {
            SubRows = () => {
                return (
                    <FlatList
                        contentContainerStyle={{
                            flex: 1,
                            alignItems: "center",
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            backgroundColor: 'pink'
                        }}
                        // scrollEnabled={false}
                        // style={categories}
                        automaticallyAdjustContentInsets={true}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.subCategories}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={categoryButtonSmall}
                            //onPress={() => this.setCategory(item.mcid)}
                            >
                                <Text
                                    allowFontScaling={false}
                                    style={this.state.selectedCategory == item.mcid ? activeCategory : category}
                                >{item.subCategoryName}</Text>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item) => item.subCategoryId.toString()}
                    />
                )
            }
        }

        return (
            <View style={styles.container}>
                {/* <MenuScreenHeader name={this.state.rName}>
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
                            height: 40,
                            alignItems: "center",
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            backgroundColor: 'red'
                        }}
                        // scrollEnabled={false}
                        automaticallyAdjustContentInsets={true}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.categories}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={category}
                                onPress={() => this.setCategory(item.mcid)}>
                                <Text
                                    allowFontScaling={false}
                                    style={this.state.selectedCategory == item.mcid ? activeCategory : category}
                                >
                                    {item.categoryName}</Text>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item) => item.mcid.toString()}
                    />
                    <SubRows />
                </MenuScreenHeader> */}
                <SafeAreaView style={{
                    backgroundColor: '#FFFFFF',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    marginBottom: 5,
                    padding: 5
                    //flex: 1,
                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            //backgroundColor: 'blue',
                        }}
                    >
                        <TouchableOpacity
                            style={icon}
                            onPress={() => this.props.navigation.navigate("Discover")}>
                            <Icon
                                name="md-arrow-round-back"
                                size={35}
                                color="rgba(0,0,0,0.7)"
                            />
                        </TouchableOpacity>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    //backgroundColor: 'red',
                                }}
                                allowFontScaling={false}>
                                {this.state.rName}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: Colours.bgColor,
                            margin: 10,
                            borderRadius: 10
                        }}>
                        <View style={icon}>
                            <Icon
                                name="ios-search"
                                size={25}
                                color="rgba(0,0,0,0.7)"
                            />
                        </View>
                        <TextInput
                            value={this.state.searchValue}
                            style={textInput}
                            placeholder="Search here"
                            onChangeText={this.handleChangeText}
                        />
                    </View>
                    <View>
                        <FlatList
                            contentContainerStyle={{
                                flex: 1,
                                height: 40,
                                alignItems: "center",
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                            }}
                            // scrollEnabled={false}
                            automaticallyAdjustContentInsets={true}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={this.categories}
                            renderItem={({ item }) =>
                                <TouchableOpacity
                                    style={category}
                                    onPress={() => this.setCategory(item.mcid)}>
                                    <Text
                                        allowFontScaling={false}
                                        style={this.state.selectedCategory == item.mcid ? activeCategory : category}
                                    >
                                        {item.categoryName}</Text>
                                </TouchableOpacity>
                            }
                            keyExtractor={(item) => item.mcid.toString()}
                        />
                    </View>
                </SafeAreaView>
                <FoodItemList
                    reload={() => this.reload()}
                    data={this.state.menu}
                />
            </View>
        );
    }
}
export default withNavigation(MenuScreen);

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
        //marginHorizontal: 5,
        // backgroundColor: Colours.textColor
        // padding: 10,
        // borderRadius: 20,
        // borderWidth: 1,
        // marginHorizontal: 5,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // elevation: 5,
        // backgroundColor: 'white'
    },
    activeCategory: {
        color: Colours.tintColour,
        fontWeight: '700',
        fontSize: 20,
        // backgroundColor: Colours.tintColour,
        // padding: 10,
        // marginHorizontal: 5,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // elevation: 5
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
        //backgroundColor: 'red',
        //marginHorizontal: -30,
        // paddingVertical: 0,
        //flex: 4
    },
    textBox: {
        flex: 1,
        padding: 5,
        margin: 10,
        //marginHorizontal: 8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5
    },
    textInput: {
        flex: 1,
        fontWeight: '800',
        fontSize: 15,
        padding: 5,
        margin: 0,
        //backgroundColor: "red"
    },
    categoryButton: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        //borderRadius: 10,
    },
    categoryButtonSmall: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    activeCategoryButton: {
        backgroundColor: Colours.tintColour,
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    headerContainer: {
        //backgroundColor: 'red',
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
    },
    rowItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        //backgroundColor: 'pink'
    },
});