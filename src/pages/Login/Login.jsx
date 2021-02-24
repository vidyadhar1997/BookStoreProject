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
        event.stopPropagation();
      }
      setValidated(true);
    };

    const[email,setEmail]=React.useState('');
    const EmailHandler=(event)=>{
        setEmail(event.target.value)
        console.log("Email=",email)
    }

    const[password,setPassword]=React.useState('');
    const PasswordHandler=(event)=>{
        setPassword(event.target.value)
        console.log("Password=",password)
    }

    const history=useHistory();
    const handleSignUP=()=>{
    history.push('/signup');
    }

    const[EmailError,setEmailError]=React.useState('');
    const[PasswordError,setPasswordError]=React.useState('');
    const Login=()=>{
        if (!email.match("^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$")) {
            setEmailError("Email is invalid")
          }
          if (!password.match("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}")) {
            setPasswordError("Password is not valid")
          }
          const loginData={
            email:email,
            password:password
          }
          login(loginData).then((responce) => {
            console.log("responce data==>", responce);
        }).catch((error) => {
            console.log("error is =",error);
          })
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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <h4 className="heading">Login</h4>
                    <div className="InputFieldss">
                        <div className="EmailInput">
                            <Form.Label>
                                Email
                         </Form.Label>
                         <Col>
                            <Form.Control variant="outlined" required type="Email" className="inputField" onChange={EmailHandler} placeholder="Email" />
                            <Form.Control.Feedback type="invalid">
                                  {EmailError}
                            </Form.Control.Feedback>
                            </Col>
                        </div>
                        <br></br>
                        <div className="PasswordInput">
                            <Form.Label>
                                Password
                         </Form.Label>
                            <Col>
                                <Form.Control  variant="outlined" required   type="text" className="inputField" onChange={PasswordHandler} placeholder="Password" />
                                <Form.Control.Feedback type="invalid">
                                 {PasswordError}
                            </Form.Control.Feedback>
                            </Col>
                        </div>
                        <div className="Buttons">
                            <Button  onClick={Login}>Login</Button>
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
