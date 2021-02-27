import React from 'react'
import { Card, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import "../CartBooks/CartBooks.scss"
import AppBar from '../AppBar/AppBar';
import letUsCs from '../../assets/letUsC.jpg';
export default function CartBooks() {
    return (
        <div className="CartBookContainer">

            {/* <AppBar/> */}

            {/* <Col> */}
            <Card className="cardsss">
               
                <div className="cardContainerss">

                    <div>
                        <img className="imgages" src={letUsCs} />
                    </div>

                    <div className="Content">
                        <div className="BookNames">Don't Make Me Think </div>
                        <div className="Authors">by steve king </div>
                        <div className="rupeess">Rs.1500 </div>
                   
                    <div className="Signsss">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                        <button type="button" className="buttonsss">1</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        Remove
                    </div>
                    </div>
                   
                </div>
                <div className="addedToBagss">
                    <button type="button" className="addedsToBag">PLACE ORDER</button>
                </div>

            </Card>
            {/* </Col> */}
        </div>

    )
}