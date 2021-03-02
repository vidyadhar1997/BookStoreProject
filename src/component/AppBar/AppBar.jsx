import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import { FormControl } from 'react-bootstrap';
import "../AppBar/AppBar.scss"
import BookImage from '../../assets/bookLogo.svg'
import CartImage from '../../assets/cart3.svg'
import { useHistory } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function AppBar(props) {

    const history = useHistory();
    const handleCart = () => {
        history.push('/cartbooks');
    }
    const [searchD, setSearchD] = React.useState('')
    const searchDAta = (e) => {
        console.log("e", e.target.value)
        setSearchD(e.target.value)
        props.onSelectSearch(e.target.value)
    }

    const handleWhishList=()=>{
        history.push('/wishlist');
    }

    return (
        <div className="AppBar">
            <Navbar bg="#A03037" expand="lg">
                <div className="appCon">
                    <div className="booksss">
                        <img className="booksImage" src={BookImage} />
                    </div>
                    <Navbar.Brand>Bookstore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form >
                            <FormControl className="searchstyle" type="text" placeholder="Search" className="mr-sm-2" onChange={searchDAta} />
                        </Form>
                    </Navbar.Collapse>
                    <div className="cartContainer">

                        <div className="Wishlist" onClick={handleWhishList}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" color="white" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </div>
                        <div className="cart">cart</div>
                        <div onClick={handleCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" color="white" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Navbar>
         </div>
    )
}