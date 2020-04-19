import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

const AboutExpanse = () => (
    <Container>
        <Container>
            <Alert variant="success">
                <Row className="px-2">
                    <h5>About Expanse Manager</h5>
                    <p>Visual Studio Code and WebStorm support debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don’t have to switch between tools.</p>
                </Row>
            </Alert>
        </Container>
    </Container>
);

export default AboutExpanse;