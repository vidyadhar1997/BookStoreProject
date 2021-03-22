import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import '../Dashbord/DisplayBook.scss'
import { addToCart } from '../../services/cartServices';
import BookInformation from '../BookInformation/BookInformation';
const bookImageData = require('../../assets/bookImage.json')
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap';
import { addToWhislist } from '../../services/wishListServices';

export default function DisplayBook(props) {
    const [iswishlist,setiswishlist] = React.useState(false)
    const [bookID, setid] = React.useState('')
    const [isAddedToBag,setisAddedToBag] = React.useState(true)
    const addToBag = (note) => {
        console.log("dhiraj")
        const productId = note._id
        addToCart(productId).then((responce) => {
            console.log("responce data==>", responce);
            props.GetCart()
            setid(note._id)
            setiswishlist(false)
        }).catch((error) => {
            console.log("error is =", error);
        })
    }
   
    const addToWhislists = (note) => {
        console.log("dhirajssssssss")
        const productId = note._id
        addToWhislist(productId).then((responce) => {
            console.log("responce data==>", responce);
           props.GetWishList()
            setiswishlist(true)
            setid(note._id)
        setisAddedToBag(false)
        }).catch((error) => {
            console.log("error is =", error);
        })
    }
    const [isLowTOHigh,setisLowTOHigh] = React.useState(false)
    const [isNoteSort,setisNoteSort] = React.useState(false)

    const sortByPriceAsc=()=> {
    setisNoteSort(true)
    setisLowTOHigh(true)
    }

     const sortByPriceDesc=()=> {
        setisNoteSort(true)
        setisLowTOHigh(false)
      }

    return (
        <div className="DisplayBook" >
            <div className="BooksCount">
                <h3> Books({props.item.filter((i) => i.bookName.includes(props.searchData.toString())).length})</h3>
                <div className="Dropdawnfiledss">
                    <DropdownButton className="drop" title="Sort by relevance">
                        <Dropdown.Item href="#/action-1" onClick={sortByPriceAsc}>Price:Low to High </Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={sortByPriceDesc}>Price:High to Low</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div className="bookContainer">
                {
                (isNoteSort?(isLowTOHigh?(props.item.sort((a, b) => a.price > b.price ? 1 : -1)):(props.item.sort((a, b) => a.price < b.price ? 1 : -1))):props.item.filter((i) => i.bookName.includes(props.searchData.toString()))).map((note, index) => {
                    return (
                        <div className="main-card-con" key={index}>
                            <Card>
                                <div className="cardContainer">
                                    <div className="bookImage">
                                        {bookImageData.bookImage.map((book, index) => {
                                            return (book.id === note._id ?
                                                <img className="imgage" src={book.bookImage} />
                                                : null)
                                        })}
                                    </div>
                                    <div className="content">
                                        <div className="BookName">{note.bookName}</div>
                                        <div className="BookDescription"><BookInformation description={note} /></div>
                                        <div className="Author">{note.author}</div>
                                        <div className="rupees">Rs. {note.price} </div>

                                        <div className="Buttonss">
                                            {console.log("note w", note._id, "bookID", bookID)}
                                            {(note._id === bookID) ? !iswishlist?<button type="button" className="addedToBag">ADDED TO BAG</button>:<button type="button" className="addedToWishlist">ADDED TO WISHLIST</button> : <button type="button" className="bagButton" onClick={() => addToBag(note)}>ADD TO BAG</button>}
                                            {(note._id != bookID) ? <button type="button" className="wishlistButton" onClick={() => addToWhislists(note)}>WISHLIST</button> : undefined}
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