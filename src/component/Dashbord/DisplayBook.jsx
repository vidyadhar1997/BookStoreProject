import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import '../Dashbord/DisplayBook.scss'
import LetUsC from '../../assets/letUsC.jpg'
import { addToCart } from '../../services/cartServices';
import BookInformation from '../BookInformation/BookInformation';
const bookImageData = require('../../assets/bookImage.json')

export default function DisplayBook(props) {
    const [bookID,setid] =  React.useState('')
    const addToBag = (note) => {
        const productId=note._id
        addToCart(productId).then((responce) => {
            console.log("responce data==>", responce);
            setid(note._id)

        }).catch((error) => {
            console.log("error is =", error);
        })
        console.log("id=",setid(note._id))
        }

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
                                      {bookImageData.bookImage.map((book,index)=>{
                                        return(book.id===note._id?
                                      <img className="imgage" src={book.bookImage}/>
                                      :null)
                                    })}
                                    </div>
                                    <div className="content">
                                        <div className="BookName">{note.bookName}</div>
                                       <div className="BookDescription"><BookInformation description={note}/></div> 
                                        <div className="Author">{note.author}</div>
                                        <div className="rupees">Rs. {note.price} </div>
                                        <div className="Buttonss">
                                            {console.log("note w",note._id,"bookID",bookID)}
                                            {(note._id === bookID) ?<button type="button" className="addedToBag">ADDED TO BAG</button>:<button type="button" className="bagButton" onClick={()=>addToBag(note)}>ADD TO BAG</button>}
                                            {(note._id != bookID)?<button type="button" className="wishlistButton">WISHLIST</button>:undefined}
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