import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap';
import "../Registration/Registration.scss"
import { Link } from 'react-router-dom';

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
                <h4 className="heading">Registration</h4>
                    <div className="InputFieldsss">
                        <div className="FullNameInputs">
                            <Form.Label >
                                Full Name
                     </Form.Label>
                            <Col>
                                <Form.Control variant="outlined" type="Full Name" className="inputField" placeholder="Full Name" />
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
                                <Form.Control variant="outlined" className="inputField" type="number" placeholder=" Phone Number" />
                            </Col>
                        </div>
                        <div className="Buttons">
                            <Button>Submit</Button>
                        </div>
                        <div className="Links">
                        <label htmlFor="ask" id="askForLogin">Have an account with us ?
                        <Link>Login</Link></label>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}
