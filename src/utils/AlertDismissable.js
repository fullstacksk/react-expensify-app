import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
function AlertDismissibleExample() {
    return (
        [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ].map((variant, idx) => {

            const [show, setShow] = useState(true);
            return (
                <Row key={idx}>
                    <Col>
                        <Alert show={show} variant={variant}>
                            <Alert.Heading>How's it going?!</Alert.Heading>
                            <p>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                fermentum.
              </p>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button onClick={() => setShow(false)} variant={variant}>
                                    Close me ya'll!
                </Button>
                            </div>
                        </Alert>

                        {!show && <Button className="rounded-0" variant={variant} onClick={() => setShow(true)}>Show Alert</Button>}
                    </Col>
                </Row>
            );
        })
    );


}


const AlertDisMissable = () => (
    <Container>
        {AlertDismissibleExample()}
    </Container>
);

export default AlertDisMissable;