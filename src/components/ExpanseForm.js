import React from 'react';
import moment from 'moment';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

export default class ExpanseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.expanse ? props.expanse.id : '',
            description: props.expanse ? props.expanse.description : "",
            note: props.expanse ? props.expanse.note : "",
            amount: props.expanse ? props.expanse.amount.toString() : "",
            createdAt: props.expanse ? moment(props.expanse.craetedAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Please provide description and amount!!" }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {

        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
            this.setState(() => ({ amount }))
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        {
                            this.state.error &&
                            <Alert variant="warning">
                                {this.state.error}
                            </Alert>
                        }
                        <Form onSubmit={this.onSubmit} >
                            <Form.Group >
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="description"
                                    value={this.state.description}
                                    onChange={this.onDescriptionChange}
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Note</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="2"
                                    id="note"
                                    value={this.state.note}
                                    onChange={this.onNoteChange}
                                />
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col>
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="amount"
                                        value={this.state.amount}
                                        onChange={this.onAmountChange}
                                    />
                                </Col>
                                <Col id="singleDatePicker">
                                    <Form.Label>Created At</Form.Label>
                                    <br />
                                    <SingleDatePicker
                                        date={this.state.createdAt}
                                        onDateChange={this.onDateChange}
                                        focused={this.state.calenderFocused}
                                        onFocusChange={this.onFocusChange}
                                        numberOfMonths={1}
                                        isOutsideRange={() => false}
                                        anchorDirection="right"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={6} className="mb-1">
                                    <Button variant="info" className="w-100" type="submit">Add Expanse </Button>
                                </Col>
                                {this.props.expanse &&
                                    <Col sm={6}>
                                        <Button
                                            id="removeExpanse"
                                            variant="success"
                                            className="w-100"
                                            onClick={this.props.startRemoveExpanse}
                                        >Remove Expanse </Button>
                                    </Col>}
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
