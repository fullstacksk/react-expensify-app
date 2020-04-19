import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const NotFound = () => (
    <Container>
        <Jumbotron className="py-5">
            <h1 className="text-center">404</h1>
        </Jumbotron>
    </Container>
);

export default NotFound;