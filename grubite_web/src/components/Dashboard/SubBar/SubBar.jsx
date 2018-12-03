import React, { Component } from 'react';
import axios from 'axios'
import './SubBar.css'
import {isEmpty} from '../../../backend/functions'

class SubBar extends Component {
    constructor(){
        super();

        this.state = {
            subCategories: []
        }

        this.loadSubCategories = this.loadSubCategories.bind(this)
    }

    loadSubCategories(category){
        const roid = sessionStorage.getItem('roid')
        const mcid = category
        const url = `http://localhost:3001/menu/getSubCategories/${roid}/${mcid}`

        axios.get(url)
            .then(res => {
                this.setState({subCategories: res.data.rows})
                console.log(this.state.subCategories)
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const {subCategories} = this.props
        
        if (isEmpty(subCategories)){
            return (
                <div className="subMenuContainer">
                    <button className='addSubButton'>Add a sub category</button>
                </div>
            )
        }
        
        return (
            <div className="subMenuContainer">
                <ul className="sub-barList">
                {
                    subCategories.map((sub) => (
                        <li className="sub-barListItem" key={sub.subCategoryId}>{sub.subCategoryName}</li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default SubBar;