import React, { Component } from 'react';
import axios from 'axios'
import './MenuTable.css'
import MenuBar from '../Menubar/MenuBar'
import SubBar from '../SubBar/SubBar'
// import { Table as zTable } from 'react-bootstrap'
import Table from './Table'

const roid = sessionStorage.getItem('roid')


export default class MenuTable extends Component {


    constructor() {
        super();

        this.state = {
            selectedCategory: null,
            Menu: [],
            mcid: null,
            showSubBar: false,
            subCategories: [],
            subCategoryId: null,
            searchValue : ""
        }

        this.setCategory = this.setCategory.bind(this)
        this.loadMenu = this.loadMenu.bind(this)
        this.showSubCategories = this.showSubCategories.bind(this)
        this.loadSubCategories = this.loadSubCategories.bind(this)
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.setUpCategory = this.setUpCategory.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.search = this.search.bind(this)
    }

    //This is the function that is going to be called when a value is changed

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        //https://www.google.ca/search?q=state+is+one+character+begind&oq=state+is+one+character+begind&aqs=chrome..69i57j33.7407j1j1&sourceid=chrome&ie=UTF-8

        this.setState({
            searchValue: value
        }, () => {
            const {searchValue} = this.state
            console.log(searchValue)
            this.search(searchValue)
        });

    }

    search(value) {
        let url = ""

        if (value === null || value === "") {
           url = `http://localhost:3001/menu/getMenuItems/${roid}`
       } else {
           url = `http://localhost:3001/menu/search/${roid}/${value}`
       }
       
        axios.get(url)
           .then(res => {
               this.setState({Menu: res.data.rows})
           })
           .catch(function (error) {
               console.log(error);
           });

    }

    handleSearchInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

        const {searchValue} = this.state
         let url = ""
         if (searchValue === null) {
            url = `http://localhost:3001/menu/getMenuItems/${roid}`
        } else {
            url = `http://localhost:3001/menu/search/${roid}/${searchValue}`
        }
        
         axios.get(url)
            .then(res => {
                this.setState({Menu: res.data.rows})
            })
            .catch(function (error) {
                console.log(error);
            });

        //console.log(searchValue)
    }





    loadMenu() {
        const { mcid, subCategoryId } = this.state

        //const roid = sessionStorage.getItem('roid')
        let url = ''

        if (mcid === null) {
            url = `http://localhost:3001/menu/getMenuItems/${roid}`
        } else if (subCategoryId == null) {
            url = `http://localhost:3001/menu/getMenuItems/${roid}/${mcid}`
        } else {
            url = `http://localhost:3001/menu/getMenuItems/${roid}/${mcid}/${subCategoryId}`
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

        axios.get(`http://localhost:3001/menu/getMenuItems/${roid}`)
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
        const url = `http://localhost:3001/menu/getSubCategories/${roid}/${mcid}`

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
            subBar = <SubBar category={mcid} subCategories={subCategories} setSubCategory={this.setUpCategory} />
        }

        return (
            <div>
                <MenuBar setCategory={this.setCategory} onChange={this.handleChange} />
                {subBar}
                <div className="menuTableContainer">
                    <div className='addItemButtonContainer'>
                        {/* <AddItemButton /> */}
                    </div>
                    {/* <ReactTable
                data={Menu}
                columns = {[
                    {
                        Header: "Name",
                        accessor: "foodName"
                    },
                    {
                        Header: "Description",
                        accessor: "description"
                    },
                    {
                        Header: "Price",
                        accessor: "price"
                    },
                ]}
                defaultPageSize={10}
                /> */}
                    {/* <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Menu.map((food) => (
                                    <tr key={food.foodId}>
                                        <td>{food.foodName}</td>
                                        <td>{food.description}</td>
                                        <td>${food.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table> */}
                    <Table data={Menu} />
                </div>
            </div>
        );
    }
}