import React from 'react';
import { connect } from 'react-redux';
import { startEditExpanse, startRemoveExpanse } from '../actions/expanses';
import ExpanseForm from './ExpanseForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

export class EditExpanse extends React.Component {

    onSubmit = (expanse) => {
        this.props.startEditExpanse(this.props.expanse.id, expanse);
        this.props.history.push('/dashboard');
    };
    startRemoveExpanse = () => {
        this.props.startRemoveExpanse(this.props.expanse.id);
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <Container>
                <Container className="pt-3 pb-1">
                    <Alert variant='info'>
                        <Row className="px-2">
                            <p className="text-success mb-0">There is a request to edit the expanse having id : <kbd className="bg-info">{this.props.expanse.id}</kbd></p>
                        </Row>
                    </Alert>
                </Container>
                <ExpanseForm

                    onSubmit={this.onSubmit}
                    expanse={this.props.expanse}
                    startRemoveExpanse={this.startRemoveExpanse}
                />
            </Container>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expanse: state.expanses.find((expanse) => expanse.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpanse: (id, expanse) => dispatch(startEditExpanse(id, expanse)),
    startRemoveExpanse: (id) => dispatch(startRemoveExpanse({ id }))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpanse);