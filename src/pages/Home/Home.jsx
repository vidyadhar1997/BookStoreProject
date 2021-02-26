import React, { useEffect } from 'react';
import AppBar from '../../component/AppBar/AppBar';
import DisplayBook from '../../component/Dashbord/DisplayBook';
import { getAllBooks } from '../../services/bookServices';
import { Col } from 'react-bootstrap';
const bookImageData = require('../../assets/bookImage.json');

export default function Home(){

    const [books, setBooks] = React.useState([]);
    const getAllBook = () => {
         getAllBooks ().then((responce) => {
            if(responce.status===200){
            console.log("resp ", responce)
            setBooks(responce.data.result)
            }
        }).catch((error) => {
            console.log("error is ", error)
        });
    }

    useEffect(() => {
        console.log("book data=", bookImageData.bookImage[0].id)
        getAllBook()
           if(bookImageData.bookImage.id===books._id){
                 books.bookImage=bookImageData.bookImage
              }
    }, []);

    return(
<div className="HomeContainessssr">
   
    <AppBar/>
    
    <Col>
    <DisplayBook  item={books} GetData={getAllBooks}/>
    </Col>
</div>
    )
}