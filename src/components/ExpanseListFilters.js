import React from 'react';
import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { DateRangePicker } from 'react-dates';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
class ExpanseListFilters extends React.Component {
    state = {
        calenderFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch((setEndDate(endDate)));
    }
    onFocusChange = (calenderFocused) => {
        console.log(calenderFocused);
        this.setState(() => ({ calenderFocused }));
    }
    render() {
        return (
            <Container className="mb-0">
                <Alert variant="success" className="mb-0 py-1">
                    <Row className="justify-content-between px-2 ">
                        <div className="w-50">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className=" float-right"
                                value={this.props.filters.text}
                                onChange={(e) => {
                                    this.props.dispatch(setFilterText(e.target.value))
                                }}
                            />
                        </div>
                        <div>
                            <Form.Control
                                as="select"
                                value={this.props.filters.sortBy}
                                onChange={(e) => {
                                    if (e.target.value === 'date')
                                        this.props.dispatch(sortByDate());
                                    else if (e.target.value === 'amount')
                                        this.props.dispatch(sortByAmount());
                                }}
                            >
                                <option>Sort</option>
                                <option value="amount">Amount</option>
                                <option value="date">Date</option>
                            </Form.Control>
                        </div>
                        <div className="">
                            <DateRangePicker
                                startDate={this.props.filters.startDate}
                                startDateId="expanse_start_date"
                                endDate={this.props.filters.endDate}
                                endDateId="expanse_end_date"
                                onDatesChange={this.onDatesChange}
                                focusedInput={this.state.calenderFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                showClearDates={true}
                                isOutsideRange={() => false}
                            />
                        </div>
                    </Row>
                </Alert>
            </Container>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStatetoProps)(ExpanseListFilters);