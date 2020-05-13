import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { connect } from 'react-redux';
import { startLogin, startFacebookLogin } from '../actions/auth';

export const Login = ({ startLogin, startFacebookLogin }) => (
    <Container fluid className="h-min-100 h-max-100 bg-light">
        <Row md={4} className="justify-content-center align-items-center h-min-100 h-max-100">
            <Form>
                <Button
                    id="loginWithGoogle"
                    variant="success"
                    type="button"
                    className="w-100"
                    onClick={startLogin}
                > Login With Google</Button>
                <p className="text-center my-2 p-1"><Badge variant="info">Or</Badge></p>
                <Button
                    id="loginWithFacebook"
                    variant="primary"
                    type="button"
                    className="w-100"
                    onClick={startFacebookLogin}
                > Login With Facebook</Button>
                <p className="text-center my-2 p-1"><Badge variant="info">Or</Badge></p>

                <Accordion >
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-0">
                            <Button variant="info" type="button" className="w-100" disabled> Login Anonymously</Button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="info" type="submit" className="w-100"> Submit</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Form>
        </Row>
    </Container>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);