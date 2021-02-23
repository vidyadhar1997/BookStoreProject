import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../Login/Login.scss"
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap';

export default function Login() {

    return (
        // <div className="HomeContainer">
        //     <Card className="Cardss">
        //         <Card.Body>
        //             {/* <Card.Title>Special title treatment</Card.Title> */}
        //             {/* <Card.Text>
        //     With supporting text below as a natural lead-in to additional content.
        //   </Card.Text> */}

        //    <Card.Header>Featured</Card.Header>
        //             <Form.Group as={Row} controlId="formHorizontalPassword">
        //                 <Form.Label column sm={2}>
        //                     Email
        //                 </Form.Label>
        //                 <Col sm={10} className="Email">
        //                     <Form.Control className="inputField" type="Email" placeholder="Email" />
        //                 </Col>
        //                 <Form.Label column sm={2}>
        //                     Password
        //                 </Form.Label>
        //                 <Col sm={10}>
        //                     <Form.Control className="inputField" type="Password" placeholder="Password" />
        //                 </Col>
        //             </Form.Group>
        //             <Button variant="primary">Login</Button>
        //         </Card.Body>
        //     </Card>
        // </div>
        <div className="HomeContainer">
            <Card className="card">
                <div className="header">
                    <Card.Header>
                        BookStore App
                </Card.Header>
                </div>
                <Card.Body>
                    {/* <Card.Title></Card.Title> */}
                    {/* <Card.Text>
                    </Card.Text> */}
                    <div className="InputFieldss">
                        <div className="EmailInput">
                            <Form.Label column sm={2}>
                                Email
                         </Form.Label>
                            <Col sm={10}>
                                <Form.Control variant="outlined" type="Email" className="inputField" placeholder="Email" />
                            </Col>
                        </div>
                        <br></br>
                        <div className="PasswordInput">
                        <Form.Label column sm={2}>
                            Password
                         </Form.Label>
                        <Col sm={10}>
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
