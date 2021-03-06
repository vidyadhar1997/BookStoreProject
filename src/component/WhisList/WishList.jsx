import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { getAllWishListBooks, removeFromWishList } from "../../services/wishListServices";
import Card from 'react-bootstrap/Card'
import "../Dashbord/DisplayBook.scss"
import AppBar from '../AppBar/AppBar';
import { Col } from 'react-bootstrap';
const bookImageData = require('../../assets/bookImage.json')
import { addToCart, getAllCartBooks } from '../../services/cartServices';

export default function WishList(){

    const [bookID, setid] = React.useState('')
    const [WhisListbooks, setWishListBooks] = React.useState([]);
    const getAllWishListBook = () => {
         getAllWishListBooks().then((responce) => {
            if (responce.status === 200) {
                console.log("responce cart ", responce)
                setWishListBooks(responce.data.result)
            }
        }).catch((error) => {
            console.log("error is ", error)
        });
    }
    
    const addToBag = (note) => {
        console.log("dhiraj")
        const productId = note.product_id._id
        addToCart(productId).then((responce) => {
            console.log("responce data==>", responce);
            setid(note.product_id._id)
            removeBook(note);
            getAllWishListBook()
        }).catch((error) => {
            console.log("error is =", error);
        })
    }

    const [cartbooks, setCartBooks] = React.useState([]);
    const getAllCartsBooks = () => {
        getAllCartBooks().then((responce) => {
            if (responce.status === 200) {
                console.log("responce cart ", responce)
                setCartBooks(responce.data.result)
            }
        }).catch((error) => {
            console.log("error is ", error)
        });
    }

    useEffect(() => {
        getAllWishListBook()
        getAllCartsBooks()
    }, []);

   
    const removeBook=(cartbook)=>{
        const cartItem_id = cartbook.product_id._id
        console.log("id===", cartItem_id)
        removeFromWishList (cartItem_id).then((responce) => {
            if (responce.status === 200) {
               getAllWishListBook()
             console.log("responce wishlist ", responce)
            }
        }).catch((error) => {
            console.log("error is ", error)
        });
    }

    return (
        <div>
    <AppBar countsWishlist={WhisListbooks.length} counts={cartbooks.length}/>
    <Col className="stylehome">
        <div >
            <div className="BooksCounts">
                <h3> Books({WhisListbooks.length})</h3>
            
            </div>
            <div className="bookContainers">
                {WhisListbooks.filter((i)=>i.product_id != null).map((note, index) => {
                    return (
                        <div className="main-card-con" key={index}>
                            <Card>
                                <div className="cardContainer">
                                    <div className="bookImage">
                                        {bookImageData.bookImage.map((book, index) => {
                                            return (book.id === note.product_id._id ?
                                                <img className="imgage" src={book.bookImage} />
                                                : null)
                                        })}
                                    </div>
                                    <div className="content">
                                        <div className="BookName">{note.product_id.bookName}</div>
                                          <div className="Author">{note.product_id.author}</div>
                                        <div className="rupees">Rs. {note.product_id.price} </div>

                                        <div className="Buttonss">
                                            {console.log("note w", note._id, "bookID", bookID)}
                                            {(note._id === bookID) ? <button type="button" className="addedToBag">ADDED TO BAG</button> : <button type="button" className="bagButton" onClick={() => addToBag(note)}>ADD TO BAG</button>}
                                            {(note._id != bookID) ? <button type="button" className="wishlistButton" onClick={() => removeBook(note)}>Remove</button> : undefined}
                                        </div>


                                    </div>
                                </div>

                            </Card>

                        </div>
                    );
                })}
            </div>
        </div>
        </Col>
        </div>
    )
}