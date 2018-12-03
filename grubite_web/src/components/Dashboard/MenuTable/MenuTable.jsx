import React, { Component } from 'react';
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
            searchValue: null,
            justLoggedIn: false
        }

        this.setCategory = this.setCategory.bind(this)
        this.loadMenu = this.loadMenu.bind(this)
        this.showSubCategories = this.showSubCategories.bind(this)
        this.loadSubCategories = this.loadSubCategories.bind(this)
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    //This is the function that is going to be called when a value is changed
    handleSearchInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });



        // const { searchValue } = this.state

        // let url = ""

        // if (searchValue === null) {
        //     url = `http://localhost:3001/menu/getMenuItems/${roid}`
        // } else {
        //     url = `http://localhost:3001/menu/search/${roid}/${searchValue}`
        // }

        // axios.get(url)
        //     .then(res => {
        //         this.setState({ Menu: res.data.rows })

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    

    loadMenu() {
        const { mcid } = this.state

        //const roid = sessionStorage.getItem('roid')
        let url = ''

        if (mcid === null) {
            url = `http://localhost:3001/menu/getMenuItems/${roid}`
        } else {
            url = `http://localhost:3001/menu/getMenuItems/${roid}/${mcid}`
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
                this.showSubCategories()

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

    showSubCategories() {
        this.setState({ showSubBar: true }, this.loadSubCategories())
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
            subBar = <SubBar category={mcid} subCategories={subCategories} />
        }

        return (
            <div>
                <MenuBar onClick={this.setCategory} onChange={this.handleSearchInputChange} />
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