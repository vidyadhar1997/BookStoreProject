import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap';
import "../Registration/Registration.scss"
import { Link, useHistory } from 'react-router-dom';
import { signUp } from '../../services/userServices';

export default function Registration() {

    const [validated, setValidated] = React.useState(false);
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };


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

     const[FullNameError,setFullNameError]=React.useState('');
     const[EmailError,setEmailError]=React.useState('');
     const[PasswordError,setPasswordError]=React.useState('');
     const[PhoneNumberError,setPhoneNumberError]=React.useState('');
     const SignUp=()=>{

        if (!name.match("^[A-Z]{1}[a-z]{2,}$")) {
          setFullNameError("Full name is not valid")
          }
         if (!email.match("^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$")) {
             setEmailError("Email is invalid")
           }
           if (!password.match("[A-Za-z0-9!@#$%^&*()_]{6,20}")) {
             setPasswordError("Password is not valid")
           }
           if (!number.match("^[0-9]{2}[ ][0-9]{10}$")) {
            setPhoneNumberError("Phone Number is not valid")
          }
          const signUpData={
            fullName:name,
            email:email,
            password:password,
            phone:number
          }
          signUp(signUpData).then((responce) => {
            console.log("responce data==>", responce);
        }).catch((error) => {
            console.log("error is =",error);
          })
     }

    //  const historys=useHistory();
    //  const handleSubmit=()=>{
    //     historys.push('/login');
    //  }

    return (
        <div className="HomeContainers">
            <Card className="cards">
                <div className="headers">
                    <Card.Header>
                        BookStore App
            </Card.Header>
                </div>
                <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h4 className="heading">Registration</h4>
                    <div className="InputFieldsss">
                        <div className="FullNameInputs">
                            <Form.Label >
                                Full Name
                     </Form.Label>
                            <Col>
                                <Form.Control variant="outlined" type="Full Name" required className="inputField" onChange={NameHandler} placeholder="Full Name" />
                                <Form.Control.Feedback type="invalid">
                                 {FullNameError}
                            </Form.Control.Feedback>
                            </Col>
                        </div>
                        <br></br>
                        <div className="FullNameInputs">
                            <Form.Label>
                                Email
                     </Form.Label>
                            <Col>
                                <Form.Control variant="outlined" type="Email" required className="inputField" onChange={EmailHandler} placeholder="Email" />
                                <Form.Control.Feedback type="invalid">
                                 {EmailError}
                            </Form.Control.Feedback>
                            </Col>
                        </div>
                        <br></br>
                        <div className="FullNameInputs">
                            <Form.Label >
                                Password
                     </Form.Label>
                            <Col>
                                <Form.Control variant="outlined" className="inputField" required type="Password"  onChange={PasswordHandler} placeholder="Password" />
                                <Form.Control.Feedback type="invalid">
                                {PasswordError}
                            </Form.Control.Feedback>
                            </Col>
                        </div>
                        <br></br>
                        <div className="FullNameInputs">
                            <Form.Label >
                                Phone Number
                     </Form.Label>
                            <Col>
                                <Form.Control variant="outlined" className="inputField" required type="text" onChange={NumberHandler} placeholder=" Phone Number" />
                                <Form.Control.Feedback type="invalid">
                                 {PhoneNumberError}
                            </Form.Control.Feedback>
                            </Col>
                        </div>
                        <div className="Buttons">
                            <Button onClick={SignUp} >Submit</Button>
                        </div>
                        <div className="Links">
                        <label htmlFor="ask" id="askForLogin">Have an account with us ?
                        <Link onClick={handleLogin}>Login</Link></label>
                        </div>
                    </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>

    )
}
