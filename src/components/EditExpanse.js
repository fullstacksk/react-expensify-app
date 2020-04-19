import React from 'react';
import { connect } from 'react-redux';
import { editExpanse, removeExpanse } from '../actions/expanses';
import ExpanseForm from './ExpanseForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

const EditExpanse = (props) => (
    <Container>
        <Container className="pt-3 pb-1">
            <Alert variant='info'>
                <Row className="px-2">
                    <p className="text-success mb-0">There is a request to edit the expanse having id : <kbd className="bg-info">{props.match.params.id}</kbd></p>
                </Row>
            </Alert>
        </Container>
        <ExpanseForm

            onSubmit={(expanse) => {
                props.dispatch(editExpanse(props.expanse.id, expanse));
                props.history.push('/');
            }}
            expanse={props.expanse}
            removeExpanse={() => {
                props.dispatch(removeExpanse({ id: props.expanse.id }));
                props.history.push('/');
            }}
        />
    </Container>
);
const mapStateToProps = (state, props) => {
    return {
        expanse: state.expanses.find((expanse) => expanse.id === props.match.params.id)
    }
}
export default connect(mapStateToProps)(EditExpanse);