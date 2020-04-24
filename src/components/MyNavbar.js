import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const MyNavbar = (props) => (
    <Container className="border-bottom mb-3 " fluid>
        <Container >
            <Navbar expand="lg">
                <NavLink to="/" className="text-primary navbar-brand"><kbd className="bg-info text-light">Expensify</kbd></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <NavLink activeClassName="is-active" className="nav-link text-info" to="/" exact={true}>Dashboard</NavLink>
                        <NavLink activeClassName="is-active" className="nav-link text-info" to="/create">Add Expanse</NavLink>
                        <NavLink activeClassName="is-active" className="nav-link text-info" to="/About">About</NavLink>
                        <NavLink activeClassName="is-active" className="nav-link text-info" to="/support">Support</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </Container>

);

export default MyNavbar;