import React, { useEffect } from 'react';
import AppBar from '../../component/AppBar/AppBar';
import DisplayBook from '../../component/Dashbord/DisplayBook';
import { getAllBooks } from '../../services/bookServices';
import { Col } from 'react-bootstrap';


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
        getAllBook()
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