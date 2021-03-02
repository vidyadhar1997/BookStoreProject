import axios from "axios";
import wishListApiConstant from "../apiConstants/wishListApiConstant";

export function addToWhislist(productId) {
    try {
        const response = axios.post(process.env.REACT_APP_USER_URL + wishListApiConstant.addWishlist+productId, null,
            {
                headers: {
                    'x-access-token': localStorage.getItem('token')
                },
            }
        );
        return response;
    }
    catch (error) {
        return error;
    }
}

export function getAllWishListBooks() {
    try {
      const response = axios.get(process.env.REACT_APP_USER_URL+wishListApiConstant.getWishList,
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


  export function removeFromWishList(product_id) {
    try {
        const response = axios.delete(process.env.REACT_APP_USER_URL+wishListApiConstant.removeWishList+product_id,
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