import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



export const MyNavbar = ({ startLogout, isAuthenticated }) => (
    <Container className="border-bottom mb-3 " fluid>
        <Container >
            <Navbar expand="lg" className=" px-md-3 px-0">
                <NavLink to="/" className="text-primary navbar-brand"><kbd className="bg-info text-light">Expensify</kbd></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {isAuthenticated && <NavLink activeClassName="is-active" className="nav-link text-info" to="/dashboard">Dashboard</NavLink>}
                        {isAuthenticated && <NavLink activeClassName="is-active" className="nav-link text-info" to="/create">Add Expanse</NavLink>}
                        <NavLink activeClassName="is-active" className="nav-link text-info" to="/About">About</NavLink>
                        <NavLink activeClassName="is-active" className="nav-link text-info" to="/developer">Developer</NavLink>
                        {isAuthenticated ? (
                            <NavLink activeClassName="is-active" className="nav-link text-info pr-0" to="/" ><Button variant="danger" id="logout" onClick={startLogout} className="py-0">Logout</Button></NavLink>
                        ) : (
                                <NavLink activeClassName="is-active" className="nav-link text-info pr-0 " to="/"><Button variant="info" className="py-0">Login</Button></NavLink>
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </Container>

);
const mapDispatchToprops = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps, mapDispatchToprops)(MyNavbar);