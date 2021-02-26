import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import '../Dashbord/DisplayBook.scss'
import LetUsC from '../../assets/letUsC.jpg'

export default function DisplayBook(props) {
    return (
        <div className="DisplayBook" >
          <div className="BooksCount">
            <h3> Books({props.item.length})</h3>
            </div>
            <div className="bookContainer">
                {props.item.map((note, index) => {
                    return (
                        <div className="main-card-con" key={index}>
                            <Card>

                                <div className="cardContainer">
                                    <div className="bookImage">
                                        <img className="imgage" src={LetUsC} />
                                    </div>
                                    <div className="content">
                                        <div className="BookName">{note.bookName}</div>
                                        <div className="Author">{note.author}</div>
                                        <div className="rupees">Rs. {note.price} </div>
                                        <div className="Buttonss">
                                            <button type="button" className="bagButton">ADD TO BAG</button>
                                            <button type="button" className="wishlistButton">WISHLIST</button>
                                        </div>
                                    </div>
                                </div>

                            </Card>

                        </div>
                    );
                })}
            </div>
        </div>
    )

}