import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import slectExpanses from '../slectors/expanses';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

export const ExpanseList = (props) => (
    <Container>
        <Container>
            <Alert variant="warning" className="mb-1 py-2">
                <Row className="justify-content-between px-2">
                    <div><h5>Expanse<Badge variant="success" className="ml-2">{props.expanses.length}</Badge></h5></div>
                    <div><h5>Amount<Badge variant="warning" className="ml-2">
                        {
                            props.expanses.length ?
                                props.expanses.map(
                                    ({ amount = '0' }) => parseFloat(amount)
                                ).reduce((a = 0, v = 0) => a + v)
                                : 0
                        }
                    </Badge></h5></div>
                </Row>
            </Alert>
        </Container>
        {
            props.expanses.length ?

                <Container>
                    {
                        props.expanses.map((expanse, idx) => (
                            <NavLink
                                to={`/edit/${expanse.id}`}
                                key={idx}
                            >

                                <Alert variant="info" className="mb-2 shadow-sm ">
                                    <Row className="justify-content-between px-2">
                                        <div>
                                            <h5 className="pb-0">{expanse.description}</h5>
                                            <span className="small mt-0">{moment(expanse.createdAt).format('Do MMM, YYYY')}</span>
                                        </div>
                                        <div><h5>{expanse.amount}</h5></div>
                                    </Row>
                                </Alert>
                            </NavLink>
                        ))
                    }
                </Container >
                :

                <Container>
                    <Alert variant="dark" className="mb-1 py-2">
                        <Row className="justify-content-center px-2">
                            <div><h6><Badge variant="success" className="ml-2">No</Badge> Expanses</h6></div>
                        </Row>
                    </Alert>
                </Container>
        }
    </Container >
);
const mapStateToProps = (state) => ({
    expanses: slectExpanses(state.expanses, state.filters),
    filters: state.filters
});
export default connect(mapStateToProps)(ExpanseList);