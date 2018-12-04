import React, { Component } from 'react';
import './SubBar.css'
import { isEmpty } from '../../../backend/functions'
import SubBarButton from './SubBarButton'

class SubBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        }

        this.select = this.select.bind(this)
    }

    select(index, e) {
        ///https://stackoverflow.com/questions/44695985/toggle-class-on-menu-items-with-reactjs
        this.setState({ activeIndex: index })
    }

    render() {
        const { subCategories } = this.props

        return (
            <div className="subMenuContainer">
                <ul className="sub-barList">
                    <li onClick={this.select.bind(this, 0)} className="sub-barListItem">
                        <SubBarButton
                            className={this.state.activeIndex === 0 ? 'subBarButton active' : "subBarButton"}
                            onClick={this.props.setSubCategory}>
                            All
                        </SubBarButton>
                    </li>
                    {
                        subCategories.map((sub) => (
                            <li onClick={this.select.bind(this, sub.subCategoryId)} className="sub-barListItem" key={sub.subCategoryId}>
                                <SubBarButton
                                    subcategoryid = {sub.subCategoryId}
                                    className={this.state.activeIndex === sub.subCategoryId ? 'subBarButton active' : "subBarButton"}
                                    onClick={this.props.setSubCategory}>
                                    {sub.subCategoryName}
                                </SubBarButton>
                            </li>
                        ))
                    }
                    <li className="menubarListItem">
                        {/* <SubBarButton onClick={this.props.onClick}>&#43; ( Add sub-category )</SubBarButton> */}
                        <SubBarButton onClick={this.props.onClick} className="subBarButton">Edit sub-categories</SubBarButton>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SubBar;