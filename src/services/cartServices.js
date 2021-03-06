import axios from "axios";
import cartApiConstant from "../apiConstants/cartApiConstant";

  export function addToCart(productId) {
    try {
        const response = axios.post(process.env.REACT_APP_USER_URL+cartApiConstant.addToCart+productId,null,
      {
        headers: {
           'x-access-token':localStorage.getItem('token')
        },
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function getAllCartBooks() {
    try {
      const response = axios.get(process.env.REACT_APP_USER_URL+cartApiConstant.getToCart,
        {
          headers: {
             'x-access-token':localStorage.getItem('token')
          },
        }
      );
        return response;
      }
      catch (error) {
        return error;
      }
  }

  export function updateToCart(_id,data) {
    try {
        const response = axios.put(process.env.REACT_APP_USER_URL+cartApiConstant.updatCart+_id,data,
      {
        headers: {
           'x-access-token':localStorage.getItem('token')
        },
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function removeFromCart(cartItem_id) {
    try {
        const response = axios.delete(process.env.REACT_APP_USER_URL+cartApiConstant.RemoveFromCart+cartItem_id,
      {
        headers: {
           'x-access-token':localStorage.getItem('token')
        },
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function EditCustomerDetails(CustomerDetails) {
    try {
        const response = axios.put(process.env.REACT_APP_USER_URL+cartApiConstant.EditDetails,CustomerDetails,
      {
        headers: {
           'x-access-token':localStorage.getItem('token')
        },
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }
    export function OrderBookDetails(orders) {
      try {
          const response = axios.post(process.env.REACT_APP_USER_URL+cartApiConstant.OrderDetails,orders,
        {
          headers: {
             'x-access-token':localStorage.getItem('token')
          },
        }
      );
        return response;
      }
      catch (error) {
        return error;
      }
    }
