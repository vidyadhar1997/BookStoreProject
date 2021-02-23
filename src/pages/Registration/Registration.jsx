import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap';
import "../Registration/Registration.scss"

export default function Registration() {

    return (
        <div className="HomeContainers">
        <Card className="cards">
            <div className="headers">
                <Card.Header>
                    BookStore App
            </Card.Header>
            </div>
            <Card.Body>
                <div className="InputFieldsss">
                <div className="FullNameInputs">
                        <Form.Label >
                            Full Name
                     </Form.Label>
                        <Col>
                            <Form.Control variant="outlined" type="Email" className="inputField" placeholder="Full Name" />
                        </Col>
                    </div>
                    <br></br>
                    <div className="FullNameInputs">
                        <Form.Label>
                            Email
                     </Form.Label>
                        <Col>
                            <Form.Control variant="outlined" type="Email" className="inputField" placeholder="Email" />
                        </Col>
                    </div>
                    <br></br>
                    <div className="FullNameInputs">
                    <Form.Label >
                        Password
                     </Form.Label>
                    <Col>
                        <Form.Control variant="outlined" className="inputField" type="Password" placeholder="Password" />
                    </Col>
                    </div>
                    <br></br>
                    <div className="FullNameInputs">
                    <Form.Label >
                        Phone Number
                     </Form.Label>
                    <Col>
                        <Form.Control variant="outlined" className="inputField" type="Password" placeholder=" Phone Number" />
                    </Col>
                    </div>
                <div className="Buttons">
                    <Button variant="primary">Submit</Button>
                </div>
                </div>
            </Card.Body>
        </Card>
    </div>
        
    )
}
