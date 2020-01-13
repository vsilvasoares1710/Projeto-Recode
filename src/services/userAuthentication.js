import { Component } from "react";

class User extends Component {
  constructor() {
    super();
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  isAuthenticated = () => {
    return true
  };
  tipoUsuario = () => {
    return "cliente"
  }
}

export default User;
