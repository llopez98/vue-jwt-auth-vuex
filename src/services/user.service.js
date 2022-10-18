//Data service
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:7207/";

class UserService {
  getItems() {
    return axios.get(API_URL + "items", { headers: authHeader() });
  }

  getCustomers() {
    return axios.get(API_URL + "customers", { headers: authHeader() });
  }

  getSuppliers() {
    return axios.get(API_URL + "suppliers", { headers: authHeader() });
  }
}

export default new UserService();
