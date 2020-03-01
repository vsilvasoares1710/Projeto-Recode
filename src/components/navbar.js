import React, { Component } from "react";
import { Link } from "react-router-dom";
import Btn from "./button.js";
import Logo from "../img/fixhub_oficial.png";
import isAuthenticated from "../services/userAuthentication.js";
import logout from "../services/logout";

class Navbar extends Component {

  scrollToTheTop(){
    window.scrollTo(0,0)
  }
  renderButtons() {
    if (isAuthenticated() === false) {
      return (
        <div data-toggle="collapse" data-target=".navbar-collapse.show">
          <Btn text="Entrar" lead="/entrar" onClick={this.scrollToTheTop} />
          <Btn text="Cadastro" lead="/cadastro" onClick={this.scrollToTheTop} />
        </div>
      );
    } else if (isAuthenticated() === true) {
      return (
        <div data-toggle="collapse" data-target=".navbar-collapse.show">
          <Btn text="Alterar Cadastro" lead="/alterarCadastro" onClick={this.scrollToTheTop} />
          <Btn text="Sair" lead="/" onClick={logout} />
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-xl navbar-dark">
        <Link to="/" className="navbar-brand ml-1" id="brand-logo" tabIndex="0">
          <img
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            className="mx-auto my-1"
            src={Logo}
            height="50px"
            width="63px"
            alt="logo"
            onClick={this.scrollToTheTop}
          />
        </Link>

        <button
          className="navbar-toggler no-outline"
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
              <Link to="/" className="nav-link ml-1" onClick={this.scrollToTheTop} >
                Home
              </Link>
            </li>
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/encontreProfissionais" className="nav-link ml-1" onClick={this.scrollToTheTop} >
                Encontre Profissionais
              </Link>
            </li>
            {isAuthenticated() === false ? (
              <li
                className="nav-item active my-3"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link to="/divulgueSeuTrabalho" className="nav-link ml-1" onClick={this.scrollToTheTop} >
                  Divulgue seu Trabalho
                </Link>
              </li>
            ) : (
              <li
                className="nav-item active my-3"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link to="/perfil" className="nav-link ml-1" onClick={this.scrollToTheTop} >
                  Meu Perfil
                </Link>
              </li>
            )}
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/quemSomos" className="nav-link ml-1" onClick={this.scrollToTheTop} >
                Quem Somos
              </Link>
            </li>
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/contato" className="nav-link ml-1" onClick={this.scrollToTheTop} >
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
