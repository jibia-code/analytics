import React from "react";
import { Navbar, Nav, NavDropdown, } from "react-bootstrap";

const CustomNavbar = () => <Navbar bg="light" variant="light" expand="lg">
    <Navbar.Brand href="#home">
        <img
            src={require("../../images/Jibia Logo.svg")}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />
        Jibia
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
            &copy; Financeboyke 2019
        </Nav>
    </Navbar.Collapse>
</Navbar>

export default CustomNavbar;