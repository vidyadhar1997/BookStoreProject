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