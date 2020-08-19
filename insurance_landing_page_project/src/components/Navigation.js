import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Navbar.Brand style={{ color: "#300c3a", fontSize: "x-large", fontWeight: "850", paddingLeft: "60px" }}>INSURE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav >
                    <Nav.Link href="#howwework" className="link">How we Work</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#account">Account</Nav.Link>
                    <Nav.Link href="viewplans">View Plans</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation