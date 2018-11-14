import React, { Component } from 'react';
import {Panel,
        Form,
        FormGroup,
        ControlLabel,
        FormControl,
        Button,
        Modal,
        HelpBlock,
        InputGroup} from 'react-bootstrap'
import './ItemForm.css'

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

class index extends Component {
    render() {
        return (
            <div id='modalBackground'>
                <div id="formContainer">
                    <div id='exitButtonContainer'>
                        <button onClick={this.props.exitMethod} id='exitButton'>X</button>
                    </div>
                    <h1 id='formHeader'>Add Menu Item</h1>
                    <Form>
                    <FieldGroup label="Food Name" type="text" placeholder="Enter Food Name"/>
                    <FormGroup>
                        <ControlLabel>Price</ControlLabel>
                        <InputGroup>
                        <InputGroup.Addon>$</InputGroup.Addon>
                        <FormControl type="number" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Select</ControlLabel>
                        <FormControl componentClass="select" placeholder="Select Menu Category">
                            <option value="" disabled selected>Select Menu Category</option>
                            <option value="1">Appetizer</option>
                            <option value="2">Main</option>
                            <option value="3">Dessert</option>
                            <option value="4">Drink</option>
                        </FormControl>
                    </FormGroup>
                    <FieldGroup label="Food Name" type="text" placeholder="Enter Food Name"/>
                    <FieldGroup label="Description" type="textarea" placeholder="Enter Food Description" rows="3"/>
                    <FieldGroup type="file" label="File" help="Upload an Image of the menu item"/>
                    <div id="buttonContainer">
                        <Button id="addItemSubmitButton" bsStyle="primary" className="loginButton primary">Add Food Item</Button>
                    </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default index;