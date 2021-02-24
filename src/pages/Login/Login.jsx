import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../Login/Login.scss"
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Login() {

    const history=useHistory();
   const handleSignUP=()=>{
    history.push('/signup');
    }
    return (
        <div className="HomeContainer">
            <Card className="card">
                <div className="header">
                    <Card.Header>
                        BookStore App
                </Card.Header>
                </div>
                <Card.Body>
                    <h4 className="heading">Login</h4>
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
                            <Button>Login</Button>
                        </div>
                        <div className="lables">
                            <label>Dont have an account with us?</label>
                        </div>
                        <div className="Buttons">
                            <Button onClick={handleSignUP}>SignUp</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
