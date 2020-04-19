import React from 'react';
import ExpanseForm from './ExpanseForm';
import { addExpanse } from '../actions/expanses';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

const AddExpanse = (props) => (
    <Container>
        <Container>
            <Alert variant="info">
                <Row className="text-success px-2">
                    <h5>You can add your expanse!</h5>
                </Row>
            </Alert>
        </Container>
        <ExpanseForm
            onSubmit={(expanse) => {
                props.dispatch(addExpanse(expanse));
                props.history.push("/");
            }}
        />
    </Container>
);

export default connect()(AddExpanse);