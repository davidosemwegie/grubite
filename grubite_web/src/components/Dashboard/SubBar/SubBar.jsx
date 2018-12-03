import React, { Component } from 'react';
import './SubBar.css'
import { isEmpty } from '../../../backend/functions'
import SubBarButton from './SubBarButton'

class SubBar extends Component {
    render() {
        const { subCategories } = this.props

        // if (isEmpty(subCategories)) {
        //     return (
        //         <div className="subMenuContainer">
        //             <ul className='sub-barList'>
        //                 <li className="sub-barListItem">
        //                     <SubBarButton>Add a sub category</SubBarButton>
        //                 </li>
        //             </ul>
        //         </div>
        //     )
        // }

        return (
            <div className="subMenuContainer">
                <ul className="sub-barList">
                    {
                        subCategories.map((sub) => (
                            <li className="sub-barListItem" key={sub.subCategoryId}>
                                <SubBarButton>
                                    {sub.subCategoryName}
                                </SubBarButton>
                            </li>
                        ))
                    }
                    <li className="menubarListItem">
                        <SubBarButton onClick={this.props.onClick}>&#43; ( Add sub-category )</SubBarButton>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SubBar;