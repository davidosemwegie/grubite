import React, { Component } from 'react';
import axios from 'axios'
import './MenuTable.css'
import {Table} from 'react-bootstrap'
import MenuBar from '../Menubar/MenuBar'
import SubBar from '../SubBar/SubBar'


export default class MenuTable extends Component {

    constructor() {
        super();

        this.state = {
            selectedCategory: null,
            Menu: [],
            mcid: null,
            showSubBar: false,
            subCategories: []
        }

        this.setCategory = this.setCategory.bind(this)
        this.loadMenu = this.loadMenu.bind(this)
        this.showSubCategories = this.showSubCategories.bind(this)
        this.loadSubCategories = this.loadSubCategories.bind(this)
    }

    loadMenu(){
        const {mcid} = this.state

        const roid = sessionStorage.getItem('roid')
        let url = ''
        // const allFoodItems = `http://localhost:3001/menu/getMenuItems/${roid}`
        // const categoryFoodItems = `http://localhost:3001/menu/getMenuItems/${roid}/${mcid}`
        //|| typeof(mcid) === 'undefined'

        if (mcid === null ){
            url = `http://localhost:3001/menu/getMenuItems/${roid}`
        } else {
            url = `http://localhost:3001/menu/getMenuItems/${roid}/${mcid}`
        }

        axios.get(url)
            .then(res => {
                this.setState({Menu: res.data.rows}, this.showSubCategories)
                
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    componentDidMount(){
        this.loadMenu()
    }

    setCategory(e) {
        //get the category attribute from the button
        const mcid = e.target.getAttribute('category')

        this.setState({mcid}, this.loadMenu)
    }

    showSubCategories(){
        this.setState({showSubBar: true}, this.loadSubCategories())
    }

    loadSubCategories(){
        const roid = sessionStorage.getItem('roid')
        const mcid = this.state.mcid
        const url = `http://localhost:3001/menu/getSubCategories/${roid}/${mcid}`

        axios.get(url)
            .then(res => {
                this.setState({subCategories: res.data.rows})
                //console.log(this.state.subCategories)
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    
    render() {
        const {Menu, showSubBar, mcid, subCategories} = this.state

        let subBar = null

        if(showSubBar && mcid !== null) {
            subBar = <SubBar category = {mcid} subCategories = {subCategories}/>
        }

        return (
            <div>
                <MenuBar onClick={this.setCategory}/>
                {subBar}
                <div className="menuTableContainer">
                <Table responsive>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Menu.map((food) =>(
                                <tr key={food.foodId}>
                                    <td>{food.foodName}</td>
                                    <td>{food.description}</td>
                                    <td>${food.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                </div>
            </div>
        );
    }
}