//Data service
/*import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:7207/";*/
import api from './api'

class UserService {
  getItems() {
    //return axios.get(API_URL + "items", { headers: authHeader() });
    return api.get('items');
  }

  getCustomers() {
    //return axios.get(API_URL + "customers", { headers: authHeader() });
    return api.get('customers');
  }

  getSuppliers() {
    //return axios.get(API_URL + "suppliers", { headers: authHeader() });
    return api.get('suppliers');
  }
}

export default new UserService();
