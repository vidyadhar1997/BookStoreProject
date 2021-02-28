import React from 'react';
import '../OrderSummary/OrderSummary.scss'
import CheckoutImage from "../../assets/orderSummaryimg.jpg"
import AppBar from '../AppBar/AppBar';

export default function OrderSummary() {
    return (
        <div>
        <AppBar/>
        
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

                    <button type="button" className="ContinueShopping">CONTINUE SHOPPING</button>
                </div>
            </div>
            <br />
            <div>

            </div>
        </div>
        </div>
    );
}