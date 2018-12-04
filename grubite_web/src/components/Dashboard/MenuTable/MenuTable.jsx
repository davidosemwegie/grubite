import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import './MenuTable.css'
import MenuBar from '../Menubar/MenuBar'
import SubBar from '../SubBar/SubBar'
import { Table as zTable } from 'react-bootstrap'
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
            subCategoryId: null
        }

        this.setCategory = this.setCategory.bind(this)
        this.loadMenu = this.loadMenu.bind(this)
        this.showSubCategories = this.showSubCategories.bind(this)
        this.loadSubCategories = this.loadSubCategories.bind(this)
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.setUpCategory = this.setUpCategory.bind(this)
    }

    //This is the function that is going to be called when a value is changed
    handleSearchInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }



    loadMenu() {
        const { mcid, subCategoryId } = this.state

        //const roid = sessionStorage.getItem('roid')
        let url = ''

        if (mcid === null) {
            url = `http://localhost:3001/menu/getMenuItems/${roid}`
        } if (subCategoryId == null) {
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
        const mcid = e.target.getAttribute('category')

        this.setState({ mcid }, this.loadMenu)
    }

    showSubCategories(e) {
        this.setState({ showSubBar: true }, this.loadSubCategories())
    }

    setUpCategory(e) {

        this.setState({subCategoryId: e.target.getAttribute('subcategoryid')}, this.loadMenu)

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
                <MenuBar setCategory={this.setCategory} onChange={this.handleSearchInputChange} />
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