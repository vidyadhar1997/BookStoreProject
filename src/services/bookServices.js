import axios from "axios";
import bookApiConstant from "../apiConstants/bookApiConstant";

export function getAllBooks() {
    try {
      const response = axios.get(process.env.REACT_APP_USER_URL+bookApiConstant.getAllBook);
      return response;
    }
    catch (error) {
      return error;
    }
  }