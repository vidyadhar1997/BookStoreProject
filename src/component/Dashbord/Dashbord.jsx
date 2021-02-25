import React, { useEffect } from 'react';
import { getAllBooks } from '../../services/bookServices';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import '../Dashbord/Dashbord.scss'


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
                            </div> 
                          <div>{note.bookName}</div>
                          <div>{note.author}</div>
                          <div>{note.price} </div>
                        <div>
                        <button type="button" className="bagButton">ADD TO BAG</button>
                        <button type="button" className="wishlist button">WISHLIST</button>
                        </div>
                          </div>
                                            
                      </Card>

                    </div>
                );
            })}
        </div>
    )

}