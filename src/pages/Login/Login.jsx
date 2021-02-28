import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../Login/Login.scss"
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/userServices';

export default function Login() {

    const [validated, setValidated] = React.useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation(a);
        }
        setValidated(true);
    };
    const [errorEmail, setemailErrorE] = React.useState(false);
    const [errorPassword, setPasswordE] = React.useState(false);

    const [email, setEmail] = React.useState('');
    const EmailHandler = (event) => {
        setEmail(event.target.value)
        console.log("Email=", email)
    }

    const [password, setPassword] = React.useState('');
    const PasswordHandler = (event) => {
        setPassword(event.target.value)
        console.log("Password=", password)
    }

    const history = useHistory();
    const handleSignUP = () => {
        history.push('/signup');
    }

    const validation = () => {
        var check = true;
        if (!email.match("^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$")) {
            check = false;
            setemailErrorE(true)
        }
        if (!password.match("[A-Za-z0-9!@#$%^&*()_]{6,20}")) {
            check = false;
            setPasswordE(true)
        }
        return check;
    }

    const Login = () => {
        setemailErrorE(false)
        setPasswordE(false)
        if (validation()) {
            const loginData = {
                email: email,
                password: password
            }
            login(loginData).then((responce) => {
            
                if (responce.status === 200) 
                {
                   var value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNiOGRiMDkwNzkzMDAwMTUzZGZmODQiLCJmdWxsTmFtZSI6IlZpZHlhZGhhciIsImVtYWlsIjoidnNodWRnZTE5OTdAZ21haWwuY29tIiwiaWF0IjoxNjE0NTE1NjMzLCJleHAiOjE2MTQ2MDIwMzN9.i3h09HXUGi2BLtQRj7OcD0YuBe_Vs6mM4sDINv5bymg"

                    localStorage.setItem('token',value)
                    // localStorage.setItem('userId',responce.data.userId)
                    // localStorage.setItem('firstname',responce.data.firstName)
                    // localStorage.setItem('lastname',responce.data.lastName)
                    // localStorage.setItem('email',responce.data.data)
                    history.push('/home');
                }
                console.log("responce data==>", responce);
            }).catch((error) => {
                console.log("error is =", error);
            })
        }
    }

    return (
        <div className="HomeContainer">
            <h4 className="header">
                BookStore App
                </h4>
            <Card>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <h4 className="heading">Login</h4>
                        <div className="InputFieldss">
                            <div className="EmailInput">
                                <Form.Label>
                                    Email
                         </Form.Label>
                                <Col>
                                    <Form.Control variant="outlined" required type="Email" className="inputField" onChange={EmailHandler} placeholder="Email" isInvalid={!!errorEmail} />
                                    <Form.Control.Feedback type="invalid">
                                        Email is invalid
                            </Form.Control.Feedback>
                                </Col>
                            </div>
                            <br></br>
                            <div className="PasswordInput">
                                <Form.Label>
                                    Password
                         </Form.Label>
                                <Col>
                                    <Form.Control variant="outlined" required type="text" className="inputField" onChange={PasswordHandler} placeholder="Password" isInvalid={!!errorPassword} />
                                    <Form.Control.Feedback type="invalid">
                                        Password is invalid
                            </Form.Control.Feedback>
                                </Col>
                            </div>
                            <div className="Buttons">
                                <Button onClick={Login}>Login</Button>
                            </div>
                            <div className="lables">
                                <label>Dont have an account with us?</label>
                            </div>
                            <div className="Buttons">
                                <Button onClick={handleSignUP}>SignUp</Button>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
