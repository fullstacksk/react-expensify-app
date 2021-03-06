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
export class ExpanseListFilters extends React.Component {
    state = {
        calenderFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
    }

    onSortChange = (e) => {
        if (e.target.value === 'date')
            this.props.sortByDate();
        else if (e.target.value === 'amount')
            this.props.sortByAmount();
    }

    onTextChange = (e) => {
        this.props.setFilterText(e.target.value)
    }

    render() {
        return (
            <Container className="mb-0">
                <Alert variant="success" className="mb-0 py-1">
                    <Row className="justify-content-between px-2 ">
                        <div className="w-50">
                            <FormControl
                                id="filterText"
                                type="text"
                                placeholder="Search"
                                className=" float-right"
                                value={this.props.filters.text}
                                onChange={this.onTextChange}
                            />
                        </div>
                        <div>
                            <Form.Control
                                id="sortBy"
                                as="select"
                                value={this.props.filters.sortBy}
                                onChange={this.onSortChange}
                            >
                                <option>Sort</option>
                                <option value="amount">Amount</option>
                                <option value="date">Date</option>
                            </Form.Control>
                        </div>
                        <div id='dateRangePicker'>
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
const mapStatetoProps = (state) => ({
    filters: state.filters
})
const mapDispatchToProps = (dispatch) => ({
    setFilterText: (text) => dispatch(setFilterText(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})
export default connect(mapStatetoProps, mapDispatchToProps)(ExpanseListFilters);