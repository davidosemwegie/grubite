import React, { Component } from 'react';
import axios from 'axios'
import './SubBar.css'
import {isEmpty} from '../../../backend/functions'

class SubBar extends Component {
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