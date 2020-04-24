import React from 'react';
import ExpanseList from './ExpanseList';
import ExpanseListFilters from './ExpanseListFilters';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
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
        <Container>
            <ExpanseListFilters />
        </Container>

        <ExpanseList />
    </div>
);

export default ExpanseDashboard;