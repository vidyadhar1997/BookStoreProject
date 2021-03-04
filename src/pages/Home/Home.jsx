import React, { useEffect } from 'react';
import AppBar from '../../component/AppBar/AppBar';
import DisplayBook from '../../component/Dashbord/DisplayBook';
import { getAllBooks } from '../../services/bookServices';
import { Col } from 'react-bootstrap';
import Paginations from '../../component/Pagination/Pagination';
import { getAllCartBooks } from '../../services/cartServices';
import { getAllWishListBooks } from '../../services/wishListServices';
import "../Home/Home.scss"


export default function Home(){

    const[currentPage,setCurrentpage]=React.useState(1)
    const[postPerPage,setPostPerPage]=React.useState(4)

    const pageinates=(pageNumber)=>{
        setCurrentpage(pageNumber)
    }

    const [books, setBooks] = React.useState([]);
    var bookLength=books.length;

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

    useEffect(() => {
        getAllBook(),
        getAllCartsBooks(),
        getAllWishListBook()
    }, []);

    const [searchData,setsearchData] = React.useState('')
    const handleSelect =(sd)=>{
        setsearchData(sd);
        console.log("pp ",searchData)
     }

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts= books.slice(indexOfFirstPost,indexOfLastPost);

    return(
<div className="HomeContainessssr">  
    <AppBar counts={cartbooks.length} countsWishlist={WhisListbooks.length} onSelectSearch={handleSelect}/>
    {console.log("parent ",handleSelect)}
    <Col className="stylehome">
    <DisplayBook searchData={searchData}  item={currentPosts} GetData={getAllBooks} GetCart={ getAllCartsBooks} GetWishList={getAllWishListBook}/>
    <Paginations  postPerPage={postPerPage}  totalPosts={bookLength} pageinateNumber={pageinates}  />
    </Col>
</div>
    )
}