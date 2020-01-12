import React, { Component } from "react";
// Components
import Btn from "../components/button.js";
// Images

class Entrar extends Component {
  render() {
    return (
      <div className="container-fluid bg-info">
        {/* <!-- Conteúdo principal da página --> */}
        <div className="container bg-white px-4 pb-4 stretch">
          <h1 className="green-text text-center pt-4">Entrar</h1>
          <div className="row mx-auto">
            <div className="jumbotron-clear text-center col-12 col-md mr-2 mb-2 mt-2">
              <h1 className="green-text">Sou Usuário</h1>
              <div className="card-divider-long mb-3"></div>
              <div className="form-group pb-3">
                <label className="d-flex justify-content-start">
                  <h5>E-mail</h5>
                </label>
                <input
                  type="text"
                  className="form-control type-field col mr-0"
                  placeholder="usuaio@email.com"
                />
              </div>
              <div className="form-group">
                <label className="d-flex justify-content-start">
                  <h5>Senha</h5>
                </label>
                <input
                  type="password"
                  className="form-control type-field col mr-0"
                  placeholder="Senha de Usuário"
                />
              </div>
              <Btn text="Entrar" lead="/"/>
            </div>
            <div className="jumbotron-green text-center col-12 col-md ml-2 mb-2 mt-2">
              <h1 className="white-text">Sou Profissional</h1>
              <div className="card-divider-long-white mb-3"></div>
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
