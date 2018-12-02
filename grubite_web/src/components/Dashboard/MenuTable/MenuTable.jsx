import React, { Component } from 'react';
import axios from 'axios'
import './MenuTable.css'
import {Table} from 'react-bootstrap'
import MenuBar from '../Menubar/MenuBar'


export default class MenuTable extends Component {

    constructor() {
        super();

        this.state = {
            selectedCategory: null,
            Menu: [],
            mcid: null
        }

        this.setCategory = this.setCategory.bind(this)
        this.loadMenu = this.loadMenu.bind(this)
    }

    setCategory(e) {
        //get the category attribute from the button
        const mcid = e.target.getAttribute('category')
        const roid = sessionStorage.getItem('id')

        this.setState({mcid}, this.loadMenu)

        this.loadMenu()

        //this.setState({selectedCategory: mcid})
    }

    async loadMenu(){
        const {mcid} = this.state

        const roid = sessionStorage.getItem('id')
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
                this.setState({Menu: res.data.rows})
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    async componentDidMount(){
        this.loadMenu()
    }


    
    render() {
        return (
            <div>
                <MenuBar onClick={this.setCategory}/>
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
                            this.state.Menu.map((food) =>(
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