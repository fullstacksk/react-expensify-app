import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const AboutExpanse = () => (
    <Container>
        <Container>
            <Alert variant="success">
                <Row className="px-2">
                    <Col>
                        <h5>About Expansify</h5>
                        <h6><code>It's a prototype. It is only for testing purpose.</code> <kbd>conditions applied!</kbd></h6>
                        <p>Expansify is a react web app which manages users expanses and keeps them with you for lifetime</p>
                        <h5>What can you do through it?</h5>
                        <ol>
                            <li>You can add your expanse.</li>
                            <li>You can edit your expanse.</li>
                            <li>You can delete your expanse.</li>
                            <li>You can get summary of your expanses.</li>
                            <li>You can sort your expanses.</li>
                            <li>You can search your expanses.</li>
                        </ol>
                    </Col>
                </Row>
            </Alert>
        </Container>
    </Container>
);

export default AboutExpanse;