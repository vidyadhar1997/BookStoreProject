import React, { useEffect } from 'react'
import { Card, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import "../CartBooks/CartBooks.scss"
import AppBar from '../AppBar/AppBar';
import letUsCs from '../../assets/letUsC.jpg';
import { getAllCartBooks, updateToCart } from '../../services/cartServices';
const bookImageData = require('../../assets/bookImage.json')

export default function CartBooks() {

    const [count, setCount] = React.useState(0);
    const [card, setCard] = React.useState(false)

    const PlaceOrderDetails = () => {
        setCard(!card)
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
    useEffect(() => {
        getAllCartsBooks()
        //console.log("bookImageData",bookImageData)
    }, []);


    ///update cart
    const[cartId,setCartId]=React.useState('')
    const HandlePlusItem=(cartbook,isincrease)=>{
        console.log("data=",cartbook)
        //,cartbook.product_id._id
       //setCount(count + 1)
       const data={}
       if(isincrease){
        const data={
            product_id:cartbook.product_id,
            quantityToBuy:cartbook.quantityToBuy++,
        }   
    
        updateToCart(data).then((responce)=>{
        if (responce.status === 200) {
            console.log("responce cart ", responce)
            setCartId(cartbook.product_id)
            setCount(cartbook.quantityToBuy)
        }
    }).catch((error) => {
        console.log("error is ", error)
    });
}else{
    const data={
        product_id:cartbook.product_id,
        quantityToBuy:cartbook.quantityToBuy--,
    } 
    
    updateToCart(data).then((responce)=>{
        if (responce.status === 200) {
            console.log("responce cart ", responce)
            setCartId(cartbook.product_id)
            setCount(cartbook.quantityToBuy)
        }
    }).catch((error) => {
        console.log("error is ", error)
    });

}  
    }
   
    return (

        <div className="CartBookContainer">
            <AppBar />


            <Col className="Columnsssssssss">
                <Card className="cardsssssssssss">
                    { cartbooks.map((cartbook,index)=>{
                        return(
                       
                            <div className="cardContainerss">

                        <div>
                        {bookImageData.bookImage.map((book,index)=>{
                                        return(book.id===cartbook.product_id._id?
                                      <img className="imgage" src={book.bookImage}/>
                                      :null)
                                    })}
                        </div>

                        <div className="Content">
                            <div className="BookNames">{cartbook.product_id.bookName}</div>
                            <div className="Authors">{cartbook.product_id.author}</div>

                            <div className="rupeess">{cartbook.product_id.price}</div>

                            <div className="Signsss">
                           <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"  onClick={()=>HandlePlusItem(cartbook,false)}>
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>

                                <button type="button" className="buttonsss">{cartbook.quantityToBuy}</button>
                               <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onClick={()=>HandlePlusItem(cartbook,true)} >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                <div>
                        Remove
                        </div>
                    </div>
                        </div>
                    </div>
                    )
                    })}
                    <div className="addedToBagss">
                        {
                            !card ? <button type="button" className="addedsToBag" onClick={PlaceOrderDetails}>PLACE ORDER</button> : undefined}
                    </div>
                </Card>

                {!card ? <Card className="CardDetails">
                    <div>Customer Details</div>
            </Card> : <Card className="CardDetailss">

                    <div className="customerHeading">Customer Details</div> 
                            <div className="NamePhoneField">
                            <Form.Control variant="outlined" type="Name" className="inputField" placeholder="Name" />
                            <Form.Control variant="outlined" type="Phone number" className="inputField" placeholder="Phone number" />
                        </div>
                        <div className="NamePhoneField">
                            <Form.Control variant="outlined" type="Pincode" className="inputField" placeholder="Pincode" />
                            <Form.Control variant="outlined" type="Locality" className="inputField" placeholder="Locality" />
                        </div>
                        <div className="NamePhoneField">
                            <Form.Control variant="outlined" type="Address" className="inputFieldAddress" width="80%" placeholder="Address" />
                        </div>
                        <div className="NamePhoneField">
                            <Form.Control variant="outlined" type="City/town" className="inputField" placeholder="City/town" />
                            <Form.Control variant="outlined" type="LandMark" className="inputField" placeholder="LandMark" />
                        </div>
                        <div className="ContinueButtons">
                            <button type="button" className="ContinueButton">Continue</button>
                        </div>

                    </Card>}

                <Card className="CardDetails">
                    Order summery
            </Card>
            </Col>


        </div>

    )
}