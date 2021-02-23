import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../Login/Login.scss"
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap';

export default function Login() {
    return (
        <div className="HomeContainer">
            <Card className="card">
                <div className="header">
                    <Card.Header>
                        BookStore App
                </Card.Header>
                </div>
                <Card.Body>
                    <div className="InputFieldss">
                        <div className="EmailInput">
                            <Form.Label>
                                Email
                         </Form.Label>
                            <Col>
                                <Form.Control variant="outlined" type="Email" className="inputField" placeholder="Email" />
                            </Col>
                        </div>
                        <br></br>
                        <div className="PasswordInput">
                        <Form.Label>
                            Password
                         </Form.Label>
                        <Col>
                            <Form.Control variant="outlined" className="inputField" type="Password" placeholder="Password" />
                        </Col>
                        </div>
                    <div className="Buttons">
                        <Button variant="primary">Login</Button>
                    </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
