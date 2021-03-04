import React, { useEffect } from 'react';
import '../OrderSummary/OrderSummary.scss'
import CheckoutImage from "../../assets/orderSummaryimg.jpg"
import AppBar from '../AppBar/AppBar';
import { useHistory } from 'react-router-dom';
import { getAllWishListBooks } from '../../services/wishListServices';

export default function OrderSummary() {

    const historys = useHistory();
    const shoppingHandler=()=>{
        historys.push('/home');
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
        getAllWishListBook()
    }, []);

    return (
        <div>
        <AppBar countsWishlist={WhisListbooks.length} counts={0}/>
        <div className="ordersummaryPage">
            <div className="summary">
                <div className="ordersummaryimage">
                    <img
                        src={CheckoutImage}
                        className="ordersummaryimage"
                        alt="summary img"
                    />
                </div>
                <br />
                <div className="Comfirmation">
                    Hurray!!!your order is confirmed
                    the order id is # save order id for
                    further communication..
              </div>


                <div className="tablecontainer" >
                    <br />  <br /> 
                    <div className="table">

                        <div className="flexSetting">
                            <div className="Columns">
                                <div className="headersss"> Email Id</div><br />
                                <div className="headersss">admin@bookstore.com</div>
                            </div>
                            <div className="Columns">
                                <div className="headersss">Contact us </div> <br />
                                <div className="headersss">+91 8149713160 </div>
                            </div>
                            <div className="Columns">
                                <div className="headersss">Address</div>
                                <br />
                                <div className="headersss">
                                    42, 14th Main, 15th Cross,Sector 4,opp to BDA complex,
                                    near Kumarakom restraurant,HSR Layout,Banglore 560034
                      </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div >

                    <button type="button" className="ContinueShopping" onClick={shoppingHandler}>CONTINUE SHOPPING</button>
                </div>
            </div>
            <br />
            <div>

            </div>
        </div>
        </div>
    );
}