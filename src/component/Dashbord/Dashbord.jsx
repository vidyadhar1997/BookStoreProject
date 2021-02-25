import React, { useEffect } from 'react';
import { getAllBooks } from '../../services/bookServices';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';


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
        <div>
            {books.map((note, index) => {
                return (
                    <Card>

                    </Card>
                );
            })}
        </div>
    )

}