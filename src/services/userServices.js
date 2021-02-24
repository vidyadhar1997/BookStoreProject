import axios from "axios";
import userApiConstant from "../apiConstants/userApiConstant";

export function signUp(signUpData) {
    try {
      const response = axios.post(process.env.REACT_APP_USER_URL+userApiConstant.signUp,signUpData);
      return response;
    }
    catch (error) {
      return error;npm 
    }
  }
