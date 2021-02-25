import React, { useEffect } from 'react';
import { getAllBooks } from '../../services/bookServices';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import '../Dashbord/Dashbord.scss'
import LetUsC from '../../assets/letUsC.jpg'


export default function Dashboard() {
    const [books, setBooks] = React.useState([]);
    const getAllBook = () => {

        getAllBooks().then((responce) => {
            console.log("resp ", responce)
            setBooks(responce.data.result)
        }).catch((error) => {
            console.log("error is ", error)
        });
    }
    useEffect(() => {
        getAllBook()
    }, []);

    return (

        <div className="bookContainer">
            {books.map((note, index) => {
                return (
                   <div className="main-card-con">  
                    <Card>
                         <div className="cardContainer">
                             <div className="bookImage">
                             <img   className="imgage" src={LetUsC}/>
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
    )

}