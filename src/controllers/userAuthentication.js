import { Component } from "react";

class User extends Component {
  constructor() {
    super();
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  isAuthenticated = () => {
    const token = JSON.parse(localStorage.getItem("tokenJWT"));

    if (token === undefined) {
      return false;
    } else {
      return true;
    }
  };
}

export default User;
