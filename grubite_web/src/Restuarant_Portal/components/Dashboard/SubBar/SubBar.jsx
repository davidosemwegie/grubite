import React, { Component } from 'react';
import './SubBar.css'
import SubBarButton from './SubBarButton'
import {
    Panel,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    Button
} from 'react-bootstrap'

class SubBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            newSubCategory: ''
        }

        this.select = this.select.bind(this)
        // this.handleInputChange = this.handleInputChange.bind(this)
        // this.addSubCategory = this.addSubCategory.bind(this)
    }

    select(index, e) {
        ///https://stackoverflow.com/questions/44695985/toggle-class-on-menu-items-with-reactjs
        this.setState({ activeIndex: index })
    }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]: value
    //     });
    //     //console.log(this.state.newSubCategory)
    // }


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
                                    subcategoryid={sub.subCategoryId}
                                    className={this.state.activeIndex === sub.subCategoryId ? 'subBarButton active' : "subBarButton"}
                                    onClick={this.props.setSubCategory}>
                                    {sub.subCategoryName}
                                </SubBarButton>
                            </li>
                        ))
                    }
                    <form></form>
                    <li className="sub-barListItem">
                        <input id="newSubCategoryInput" type="text" name='newSubCategory' placeholder="Type in new subcategory here" onChange={this.props.addNewSubCategoryInput} />
                    </li>
                    <li className="menubarListItem">
                        <SubBarButton onClick={this.props.addNewSubCategory} className="subBarButton">Add Sub-Category</SubBarButton>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SubBar;