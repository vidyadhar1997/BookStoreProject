import React, { useEffect } from 'react';
import AppBar from '../../component/AppBar/AppBar';
import DisplayBook from '../../component/Dashbord/DisplayBook';
import { getAllBooks } from '../../services/bookServices';
import { Col } from 'react-bootstrap';
import Paginations from '../../component/Pagination/Pagination';


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

    useEffect(() => {
        getAllBook()
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
    <AppBar onSelectSearch={handleSelect}/>
    {console.log("parent ",handleSelect)}
    <Col className="stylehome">
    <DisplayBook searchData={searchData}  item={currentPosts} GetData={getAllBooks}/>
    <Paginations  postPerPage={postPerPage}  totalPosts={bookLength} pageinateNumber={pageinates}  />
    </Col>
</div>
    )
}