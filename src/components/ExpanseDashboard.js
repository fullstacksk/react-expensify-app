import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import ExpanseList from './ExpanseList';

const ExpanseDashboard = () => (
    <div>
        <Container>
            <Container >
                <Alert variant="danger" >
                    <Row className="px-2">
                        <h5>Expanse Dashboard</h5>
                    </Row>
                </Alert>
            </Container>
        </Container>

        <ExpanseList />
    </div>
);

export default ExpanseDashboard;