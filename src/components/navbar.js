import React, { Component } from "react";
import { Link } from "react-router-dom";
import Btn from "./button.js";
import LogoFundoEscuro from "../img/logFundoEscuro.png";
import User from "../controllers/userAuthentication.js";

class Navbar extends Component {
  renderButtons() {
    const user = new User();

    if (user.isAuthenticated() === false) {
      return (
        <div data-toggle="collapse" data-target=".navbar-collapse.show">
          <Btn text="Entrar" lead="/entrar" />
          <Btn text="Cadastro" lead="/cadastro" />
        </div>
      );
    } else if (user.isAuthenticated() === true) {
      return (
        <div data-toggle="collapse" data-target=".navbar-collapse.show">
          <Btn text="Sair" lead="/" />
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-xl navbar-dark">
        <Link to="/" className="navbar-brand ml-1" id="brand-logo">
          <img
            className="mx-auto my-1"
            src={LogoFundoEscuro}
            height="35px"
            width="120px"
            alt="logo"
            align-self-start
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo"
          aria-controls="navbarTogglerDemo"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul className="navbar-nav mr-auto">
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/" className="nav-link ml-1" tabIndex="0">
                Home
              </Link>
            </li>
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/encontreProfissionais" className="nav-link ml-1">
                Encontre Profissionais
              </Link>
            </li>
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/divulgueSeuTrabalho" className="nav-link ml-1">
                Divulgue seu Trabalho
              </Link>
            </li>
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/quemSomos" className="nav-link ml-1">
                Quem Somos
              </Link>
            </li>
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/contato" className="nav-link ml-1">
                Contato
              </Link>
            </li>
          </ul>
          {this.renderButtons()}
        </div>
      </nav>
    );
  }
}

export default Navbar;
