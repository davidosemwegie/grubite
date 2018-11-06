import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="https://www.google.com">GRUBITE</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default Header;