import React, { Component } from 'react';
import axios from 'axios'
import './MenuTable.css'
import MenuBar from '../Menubar/MenuBar'
import SubBar from '../SubBar/SubBar'
// import { Table as zTable } from 'react-bootstrap'
import Table from './Table'
import { API_URL } from '../../../../backend/functions'

const roid = sessionStorage.getItem('roid')


export default class MenuTable extends Component {


    constructor(props) {
        super(props);

        this.state = {
            //selectedCategory: null,
            Menu: JSON.parse(sessionStorage.getItem('menu')),
            mcid: null,
            showSubBar: false,
            subCategories: [],
            subCategoryId: null,
            searchValue: "",
            newSubCategory: ''
        }

        this.setCategory = this.setCategory.bind(this)
        this.loadMenu = this.loadMenu.bind(this)
        this.showSubCategories = this.showSubCategories.bind(this)
        this.loadSubCategories = this.loadSubCategories.bind(this)
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.setUpCategory = this.setUpCategory.bind(this)
        this.handleNewSubCategoryChange = this.handleNewSubCategoryChange.bind(this)
        this.search = this.search.bind(this)
        this.addSubCategory = this.addSubCategory.bind(this)
    }

    //This is the function that is going to be called when a value is changed

    handleSearchInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        //https://www.google.ca/search?q=state+is+one+character+begind&oq=state+is+one+character+begind&aqs=chrome..69i57j33.7407j1j1&sourceid=chrome&ie=UTF-8

        this.setState({
            searchValue: value
        }, () => {
            const { searchValue } = this.state
            console.log(searchValue)
            this.search(searchValue)
        });

    }

    handleNewSubCategoryChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            newSubCategory: value
        });
    }


    addSubCategory() {
        const { newSubCategory, mcid } = this.state

        sessionStorage.getItem("roid")

        const data = {
            mcid,
            subCategoryName: newSubCategory,
            roid: sessionStorage.getItem("roid")
        }

        const url = `${API_URL}/menu/addSubCategory`

        axios.post(url, data)
            .then(() => {
                alert(`The ${newSubCategory} sub-Category has been added. This Screen will new-refresh`)
                window.location.reload();
            })


    }

    search(value) {
        let url = ""

        if (value === null || value === "") {
            url = `${API_URL}/menu/getMenuItems/${roid}`
        } else {
            url = `${API_URL}/menu/search/${roid}/${value}`
        }

        axios.get(url)
            .then(res => {
                this.setState({ Menu: res.data.rows })
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    loadMenu() {
        const { mcid, subCategoryId } = this.state

        //const roid = sessionStorage.getItem('roid')
        let url = ''

        if (mcid === null) {
            url = `${API_URL}/menu/getMenuItems/${roid}`
        } else if (subCategoryId == null) {
            url = `${API_URL}/menu/getMenuItems/${roid}/${mcid}`
        } else {
            url = `${API_URL}/menu/getMenuItems/${roid}/${mcid}/${subCategoryId}`
        }

        axios.get(url)
            .then(res => {
                this.setState({ Menu: res.data.rows })
                this.showSubCategories()

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    componentDidMount() {

        axios.get(`${API_URL}/menu/getMenuItems/${roid}`)
            .then(res => {
                this.setState({ Menu: res.data.rows })
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log(this.state.Menu)
    }


    setCategory(e) {
        //get the category attribute from the button
        let mcid = e.target.getAttribute('category')

        console.log(mcid)

        this.setState({ mcid }, this.loadMenu)
    }

    showSubCategories(e) {
        this.setState({ showSubBar: true }, this.loadSubCategories())
    }

    setUpCategory(e) {
        this.setState({ subCategoryId: e.target.getAttribute('subcategoryid') }, this.loadMenu)
    }

    loadSubCategories() {
        //const roid = sessionStorage.getItem('roid')
        const mcid = this.state.mcid
        const url = `${API_URL}/menu/getSubCategories/${roid}/${mcid}`

        axios.get(url)
            .then(res => {
                this.setState({ subCategories: res.data.rows })
                //console.log(this.state.subCategories)

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const { Menu, showSubBar, mcid, subCategories } = this.state

        let subBar = null

        if (showSubBar && mcid !== null) {
            subBar = <SubBar
                category={mcid}
                subCategories={subCategories}
                setSubCategory={this.setUpCategory}
                addNewSubCategoryInput={this.handleNewSubCategoryChange}
                addNewSubCategory={this.addSubCategory}
            />
        }

        return (
            <div>
                <MenuBar setCategory={this.setCategory} onChange={this.handleSearchInputChange} />
                {subBar}
                <div className="menuTableContainer">
                    <div className='addItemButtonContainer'>
                        {/* <AddItemButton /> */}
                    </div>
                    <Table data={Menu} />
                </div>
            </div>
        );
    }
}