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
