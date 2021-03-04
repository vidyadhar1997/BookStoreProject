import React, { useEffect } from 'react'
import { Card, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import "../CartBooks/CartBooks.scss"
import AppBar from '../AppBar/AppBar';
import { EditCustomerDetails, getAllCartBooks, removeFromCart, updateToCart, OrderBookDetails } from '../../services/cartServices';
import { useHistory } from 'react-router-dom';
import { getAllWishListBooks } from '../../services/wishListServices';
const bookImageData = require('../../assets/bookImage.json')

export default function CartBooks() {

    const [count, setCount] = React.useState(0);
    const [card, setCard] = React.useState(false)

    const PlaceOrderDetails = () => {
        setCard(!card)
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
        getAllWishListBook()
    }, []);


    const [cartId, setCartId] = React.useState('')
    const HandlePlusItem = (cartbook, isincrease) => {
        console.log("data=", cartbook)
        if (isincrease) {
            const data = {
                quantityToBuy: cartbook.quantityToBuy + 1,
            }

            updateToCart(cartbook._id, data).then((responce) => {
                if (responce.status === 200) {
                    getAllCartsBooks()
                    console.log("responce cart ", responce)
                    setCartId(cartbook.product_id)
                    setCount(cartbook.quantityToBuy)
                }
            }).catch((error) => {
                console.log("error is ", error)
            });
        } else {
            const data = {
                product_id: cartbook.product_id,
                quantityToBuy: cartbook.quantityToBuy--,
            }
            updateToCart(data).then((responce) => {
                if (responce.status === 200) {
                    getAllCartsBooks()
                    console.log("responce cart ", responce)
                    setCartId(cartbook.product_id)
                    setCount(cartbook.quantityToBuy)
                }
            }).catch((error) => {
                console.log("error is ", error)
            });
        }
    }

    const removeCartItem = (cartbook) => {
        const cartItem_id = cartbook._id
        console.log("id===", cartItem_id)
        removeFromCart(cartItem_id).then((responce) => {
            if (responce.status === 200) {
                getAllCartsBooks()
                console.log("responce cart ", responce)
            }
        }).catch((error) => {
            console.log("error is ", error)
        });
    }

    const [continues, setContinues] = React.useState(false)
    const ContinueHandler = () => {
        setContinues(true)
    }

    const [name, setName] = React.useState('');
    const nameHandler = (event) => {
        setName(event.target.value)
        console.log("name=", name)
    }
    const [number, numberHandler] = React.useState('');
    const phoneNumberHandler = (event) => {
        numberHandler(event.target.value)
        console.log("phone number=", number)
    }
    const [pincode, setPincode] = React.useState('');
    const pinCodeHandler = (event) => {
        setPincode(event.target.value)
        console.log("PinCode=", pincode)
    }
    const [locality, setLocality] = React.useState('');
    const localityHandler = (event) => {
        setLocality(event.target.value)
        console.log("Locality=", locality)
    }
    const [address, setAddress] = React.useState('');
    const addressHandler = (event) => {
        setAddress(event.target.value)
        console.log("Address=", address)
    }
    const [city, setCity] = React.useState('');
    const cityHandler = (event) => {
        setCity(event.target.value)
        console.log("City=", city)
    }

    const [state, setState] = React.useState('');
    const stateHandler = (event) => {
        setState(event.target.value)
        console.log("Landmark=", state)
    }
    const [addressType, setAddressType] = React.useState('');
    const RadioHandler = (event) => {
        setAddressType(event.target.value)
        console.log("Radio Button=", addressType)
    }

    const EditDetailsHandler = () => {
        const CustomerDetails = {
            addressType: addressType,
            fullAddress: address,
            city: city,
            state: state
        }
        EditCustomerDetails(CustomerDetails).then((responce) => {
            if (responce.status === 200) {
                console.log("responce data==>", responce);
            }
        }).catch((error) => {
            console.log("error is =", error);
        })
    }

    const history = useHistory();
    const checkoutHandler = () => {
        cartbooks.map((order, index) => {
            console.log("product_id._id", order.product_id._id)
            console.log("product_id.bookName", order.product_id.bookName)
            console.log("product_id.quantity", order.quantityToBuy)
            console.log("product_id.price", order.product_id.price)
          
            const req ={ "orders" : [ {
                "product_id": order.product_id._id.toString(),
                "product_name": order.product_id.bookName.toString(),
               " product_quantity": parseInt(order.quantityToBuy),
                "product_price": parseInt(order.product_id.price)
            }]}
            OrderBookDetails(req).then((responce) => {
                if (responce.status === 200) {
                    history.push('/ordersummary');
                    console.log("responce data==>", responce);
                    removeCartItem(order)
                }
            }).catch((error) => {
                console.log("error is =", error);
            })
        
        })
    }

    return (
        <div className="CartBookContainer">
            <AppBar counts={cartbooks.length} countsWishlist={WhisListbooks.length}/>
            <Col className="Columnsssssssss">
                <Card className="cardsssssssssss">
                    <div className="MyCart">My Cart ({cartbooks.length})</div>
                    {cartbooks.map((cartbook, index) => {
                        return (

                            <div className="cardContainerss">
                                <div>
                                    {bookImageData.bookImage.map((book, index) => {
                                        return (book.id === cartbook.product_id._id ?
                                            <img className="imgage" src={book.bookImage} />
                                            : null)
                                    })}
                                </div>

                                <div className="Content">
                                    <div className="BookNames">{cartbook.product_id.bookName}</div>
                                    <div className="Authors">{cartbook.product_id.author}</div>

                                    <div className="rupeess">{cartbook.product_id.price}</div>

                                    <div className="Signsss">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onClick={() => HandlePlusItem(cartbook, false)}>
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                        </svg>

                                        <button type="button" className="buttonsss">{cartbook.quantityToBuy}</button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onClick={() => HandlePlusItem(cartbook, true)} >
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                        <div onClick={() => removeCartItem(cartbook)}>
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
                        {continues ? <div className="Edit" onClick={EditDetailsHandler}>Edit</div> : undefined}
                        <div className="NamePhoneField">
                            <Form.Control variant="outlined" type="Name" className="inputField" placeholder="Name" onChange={nameHandler} />
                            <Form.Control variant="outlined" type="Phone number" className="inputField" placeholder="Phone number" onChange={phoneNumberHandler} />
                        </div>
                        <div className="NamePhoneField">
                            <Form.Control variant="outlined" type="Pincode" className="inputField" placeholder="Pincode" onChange={pinCodeHandler} />
                            <Form.Control variant="outlined" type="Locality" className="inputField" placeholder="Locality" onChange={localityHandler} />
                        </div>
                        <div className="NamePhoneField">
                            <Form.Control variant="outlined" type="Address" className="inputFieldAddress" width="80%" placeholder="Address" onChange={addressHandler} />
                        </div>
                        <div className="NamePhoneField">
                            <Form.Control variant="outlined" type="City/town" className="inputField" placeholder="City/town" onChange={cityHandler} />
                            <Form.Control variant="outlined" type="LandMark" className="inputField" placeholder="state" onChange={stateHandler} />
                        </div>

                        <div className="RadioContainer">
                            <div className="Type">Type</div>
                            <div>
                                <fieldset >
                                    <Form.Group onChange={RadioHandler}>
                                        <Col sm={10}>
                                            <Form.Check
                                                type="radio"
                                                label="Home"
                                                inline
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                                value="Home"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Office"
                                                inline
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                                value="Office"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Other"
                                                inline
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                                value="Other"
                                            />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                            </div>
                        </div>
                        <div className="ContinueButtons">
                            {!continues ? <button type="button" className="ContinueButton" onClick={ContinueHandler}>Continue</button> : undefined}
                        </div>

                    </Card>}
                {!continues ? <Card className="CardDetails">
                    Order summery
            </Card> :
                    <Card className="cardsssssssssss">
                        <div className="OrderSummary">Order summery</div>
                        {cartbooks.map((cartbook, index) => {
                            return (
                                <div className="cardOrderContainerss">
                                    <div>
                                        {bookImageData.bookImage.map((book, index) => {
                                            return (book.id === cartbook.product_id._id ?
                                                <img className="imgage" src={book.bookImage} />
                                                : null)
                                        })}
                                    </div>
                                    <div className="Content">
                                        <div className="BookNames">{cartbook.product_id.bookName}</div>
                                        <div className="Authors">{cartbook.product_id.author}</div>
                                        <div className="rupeess">{cartbook.product_id.price}</div>
                                    </div>
                                </div>

                            )
                        })}
                        <div className="addedToBagss">
                            <button type="button" className="Checkout" onClick={checkoutHandler}>CHECKOUT</button>
                        </div>

                    </Card>}
            </Col>


        </div>

    )
}