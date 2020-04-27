import React from 'react';
import { connect } from 'react-redux';
import { editExpanse, removeExpanse } from '../actions/expanses';
import ExpanseForm from './ExpanseForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

export class EditExpanse extends React.Component {

    onSubmit = (expanse) => {
        this.props.editExpanse(this.props.expanse.id, expanse);
        this.props.history.push('/');
    };
    removeExpanse = () => {
        this.props.removeExpanse(this.props.expanse.id);
        this.props.history.push('/');
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
                    removeExpanse={this.removeExpanse}
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
    editExpanse: (id, expanse) => dispatch(editExpanse(id, expanse)),
    removeExpanse: (id) => dispatch(removeExpanse({ id }))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpanse);