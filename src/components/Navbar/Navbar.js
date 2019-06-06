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
                <NavDropdown.Item Link="/home">General</NavDropdown.Item>
                <NavDropdown.Item Link="/user">User</NavDropdown.Item>
                <NavDropdown.Item Link="/business">Business</NavDropdown.Item>
                <NavDropdown.Item Link="/sales">Sales</NavDropdown.Item>
                <NavDropdown.Item Link="/marketing">Marketing</NavDropdown.Item>
                <NavDropdown.Item Link="/tech">Tech</NavDropdown.Item>
                <NavDropdown.Item Link="/finance">Finance</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
            &copy; Financeboyke 2019
        </Nav>
    </Navbar.Collapse>
</Navbar>

export default CustomNavbar;