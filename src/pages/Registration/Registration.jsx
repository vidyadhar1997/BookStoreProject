import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap';
import "../Registration/Registration.scss"
import { Link, useHistory } from 'react-router-dom';

export default function Registration() {

    const[name,setName]=React.useState('');
    const NameHandler=(event)=>{
        setName(event.target.value)
        console.log("Full Name=",name)
    }

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

    const[number,setNumber]=React.useState('');
    const NumberHandler=(event)=>{
        setNumber(event.target.value)
        console.log("Phone Number=",number)
    }

    const history=useHistory();
    const handleLogin=()=>{
     history.push('/login');
     }

     const historys=useHistory();
     const handleSubmit=()=>{
        historys.push('/login');
     }

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
                                <Form.Control variant="outlined" type="Full Name" className="inputField" onChange={NameHandler} placeholder="Full Name" />
                            </Col>
                        </div>
                        <br></br>
                        <div className="FullNameInputs">
                            <Form.Label>
                                Email
                     </Form.Label>
                            <Col>
                                <Form.Control variant="outlined" type="Email" className="inputField" onChange={EmailHandler} placeholder="Email" />
                            </Col>
                        </div>
                        <br></br>
                        <div className="FullNameInputs">
                            <Form.Label >
                                Password
                     </Form.Label>
                            <Col>
                                <Form.Control variant="outlined" className="inputField" type="Password"  onChange={PasswordHandler} placeholder="Password" />
                            </Col>
                        </div>
                        <br></br>
                        <div className="FullNameInputs">
                            <Form.Label >
                                Phone Number
                     </Form.Label>
                            <Col>
                                <Form.Control variant="outlined" className="inputField" type="text" onChange={NumberHandler} placeholder=" Phone Number" />
                            </Col>
                        </div>
                        <div className="Buttons">
                            <Button onClick={handleSubmit}>Submit</Button>
                        </div>
                        <div className="Links">
                        <label htmlFor="ask" id="askForLogin">Have an account with us ?
                        <Link onClick={handleLogin}>Login</Link></label>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}
