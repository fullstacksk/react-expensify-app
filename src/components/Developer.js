import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const Developer = () => (
    <Container>
        <Container>
            <Alert variant="success" >
                <Row className="px-2">
                    <Col>
                        <h5>Fullstack Developer</h5>
                        <p>Hey, I am <code>SK Sahil</code> and this was the my first <kbd>React</kbd> web app.</p>
                        <h6>About React Js</h6>
                        <p>React Js is an wonderful js library <code>not a framework</code> which is  being used for dynamic front end development. It is developed by <code>Facebook</code> itself. It uses nodejs internally as programming language. NodeJs works on chromes <kbd>V8 Engine</kbd></p>
                    </Col>
                </Row>
            </Alert>
            <Alert variant="info" >
                <Row className="px-2">
                    <h5>Connect with me</h5>
                </Row>
                <Row>
                    <Col md={4}>
                        <a className="btn btn-primary" href="https://www.facebook.com/profile.php?id=100008404923891">Facebook</a>
                    </Col>
                    <Col md={4}>
                        <a className="btn btn-warning" href="https://www.instagram.com/sk_sahil_official/" >Instagram</a>
                    </Col>
                    <Col md={4}>
                        <a className="btn btn-secondary" href="https://github.com/fullstacksk/react-expensify-app">Github</a>
                    </Col>
                </Row>
            </Alert>
            <Alert variant="info">
                <Row>
                    <Col>
                        <h6>Suggest Me At</h6>
                        <kbd>fullstacksk@gmail.com</kbd></Col>
                </Row>
            </Alert>
        </Container>
    </Container >
);

export default Developer;