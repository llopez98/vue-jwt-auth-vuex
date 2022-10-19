/*
Authentication service

login(): POST {username, password} & save JWT to Local Storage
logout(): remove JWT from Local Storage
register(): POST {username, email, password}


import axios from "axios";

const API_URL = "https://localhost:7207/";*/
import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(user) {
    return api
      .post("login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          //localStorage.setItem("user", JSON.stringify(response.data));
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    //localStorage.removeItem('user');
    TokenService.removeUser();
  }

  register(user) {
    return api.post("registration", {
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
    });
  }
}

export default new AuthService();
