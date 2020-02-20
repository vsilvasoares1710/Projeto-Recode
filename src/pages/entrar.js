import React, { Component } from "react";
// Components
import Btn from "../components/button.js";
// Images
import loginImg from "../img/login.svg"

class Entrar extends Component {

  render() {
    return (
      <div className="container-fluid bg-white extend">
        {/* <!-- Conteúdo principal da página --> */}
        <div className="container bg-white my-auto">
          <h1 className="green-text text-center pt-4">Entrar</h1>
          <div className="row mx-1">
            <div className="d-none d-lg-block col-lg-6 my-auto">
              <img src={loginImg}
                width="90%"
                alt="Fechadura simbolizando a autenticação de login"
              />
            </div>
            <div className="jumbotron-green text-center col-12 col-md-11 col-lg-6 mb-2 mt-2">
              <div className="form-group pb-3">
                <label className="d-flex justify-content-start text-white">
                  <h5>CPF/CNPJ</h5>
                </label>
                <input
                  type="text"
                  className="form-control type-field col mr-0"
                  placeholder="123.456.789-01"
                />
              </div>
              <div className="form-group">
                <label className="d-flex justify-content-start text-white">
                  <h5>Senha</h5>
                </label>
                <input
                  type="password"
                  className="form-control type-field col mr-0"
                  placeholder="Senha de Profissional"
                />
              </div>
              <Btn text="Entrar" lead="/" className="btn btn-white mb-2 mt-1" />
            </div>
          </div>
        </div>
        {/* <!-- Conteúdo principal da página --> */}
      </div>
    );
  }
}

export default Entrar;
