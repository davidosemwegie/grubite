import React, { Component } from 'react';
import {Form,
        FormGroup,
        ControlLabel,
        FormControl,
        Button,
        InputGroup,
        Checkbox} from 'react-bootstrap'
import './ItemForm.css'
import FieldGroup from '../../common/FieldGroup'
import {restaurantInfo} from '../../../backend/api'

class index extends Component {

    //constructor method
    constructor() {
        super();

        //state variables
        this.state = {
            foodName: "",
            price: "",
            description: "",
            mcid: "",
            tags: ""
        }

        //Initializing the functions that are going to be used in this class
        this.addItem = this.addItem.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    //This is the method that is called when an input value is changed
    handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

        this.setState({
        [name]: value
        });
    }

    /* 
        The addItem() method going to submit the form data to the database
    */
    addItem() {
        //const { foodName, price } = this.state
        let rid = restaurantInfo().rid

        const {foodName, price, description, mcid, tags } = this.state

        console.log(`${tags}`)

    }


    render() {
        return (
            <div id='modalBackground'>
                <div id="formContainer">
                    <div id='exitButtonContainer'>
                        <button onClick={this.props.exitMethod} id='exitButton'>X</button>
                    </div>
                    <h1 id='formHeader'>Add Menu Item</h1>
                    <Form>
                    <FieldGroup 
                        label="Food Name"
                        type="text"
                        name="foodName"
                        onChange={this.handleInputChange}
                        placeholder="Enter Food Name"
                    />
                    <FormGroup>
                        <ControlLabel>Price</ControlLabel>
                        <InputGroup>
                        <InputGroup.Addon>$</InputGroup.Addon>
                        <FormControl
                            type="number"
                            name="price"
                            onChange={this.handleInputChange}
                            placeholder="Enter the price"
                        />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Menu Category</ControlLabel>
                        <FormControl componentClass="select" onChange={this.handleInputChange} name='mcid'>
                            <option value="" disabled>Select Menu Category</option>
                            <option value="1">Appetizer</option>
                            <option value="2">Main</option>
                            <option value="3">Dessert</option>
                            <option value="4">Drink</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Tags</ControlLabel>
                        <FormControl componentClass="select" multiple onChange={this.handleInputChange} name='tags'>
                            <option value="" disabled>Select Tag</option>
                            <option value="1">Vegan</option>
                            <option value="2">Gluten-Free</option>
                            <option value="3">Dairy-Free</option>
                            <option value="4">Nut-Free</option>
                            <option value="5">Egg-Free</option>
                        </FormControl>
                    </FormGroup>
                    <FieldGroup
                        label="Description"
                        type="textarea"
                        name="description"
                        onChange={this.handleInputChange}
                        placeholder="Enter Food Description"
                        rows="3"
                    />
                    {/* <FieldGroup
                        type="file"
                        label="File"
                        help="Upload an Image of the menu item"
                    /> */}
                    <div id="buttonContainer">
                        <Button onClick={this.addItem} id="addItemSubmitButton" bsStyle="primary" className="loginButton primary">Add Food Item</Button>
                    </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default index;