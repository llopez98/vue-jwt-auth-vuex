/*
Authentication service

login(): POST {username, password} & save JWT to Local Storage
logout(): remove JWT from Local Storage
register(): POST {username, email, password}
*/

import axios from "axios";

const API_URL = "https://localhost:7207/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout(){
    localStorage.removeItem('user');
  }

  register(user){
    return axios.post(API_URL + 'registration', {
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword
    });
  }
}

export default new AuthService();
