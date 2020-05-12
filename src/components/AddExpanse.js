import React from 'react';
import ExpanseForm from './ExpanseForm';
import { startAddExpanse } from '../actions/expanses';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

export class AddExpanse extends React.Component {

    onSubmit = (expanse) => {
        this.props.startAddExpanse(expanse);
        this.props.history.push("/dashboard");
    };
    render() {
        return (
            <Container>
                <Container>
                    <Alert variant="info">
                        <Row className="text-success px-2">
                            <h5>You can add your expanse!</h5>
                        </Row>
                    </Alert>
                </Container>
                <ExpanseForm
                    onSubmit={this.onSubmit}
                />
            </Container>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddExpanse: (expanse) => dispatch(startAddExpanse(expanse))
})

export default connect(undefined, mapDispatchToProps)(AddExpanse);