import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



export const MyNavbar = ({ startLogout }) => (
    <Container className="border-bottom mb-3 " fluid>
        <Container >
            <Navbar expand="lg">
                <NavLink to="/" className="text-primary navbar-brand"><kbd className="bg-info text-light">Expensify</kbd></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <NavLink activeClassName="is-active" className="nav-link text-info" to="/dashboard" exact={true}>Dashboard</NavLink>
                        <NavLink activeClassName="is-active" className="nav-link text-info" to="/create">Add Expanse</NavLink>
                        <NavLink activeClassName="is-active" className="nav-link text-info" to="/About">About</NavLink>
                        <NavLink activeClassName="is-active" className="nav-link text-info" to="/support">Support</NavLink>
                        <NavLink activeClassName="is-active" className="nav-link text-info" to="/support"><Button variant="danger" className="py-0" onClick={startLogout}>Logout</Button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </Container>

);
const mapDispatchToprops = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToprops)(MyNavbar);