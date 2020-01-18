import React, { Component } from "react";
// Components
import Btn from "../components/button.js";
// Images

class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      identificação: "pessoaFisica"
    };
  }
  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="container bg-white">
          <div className="col-12 mt-4 mb-4 mx-auto">
            <div className="jumbotron-green my-auto">
              <div className="jumbotron-clear my-auto shadow">
                <h1 className="">Cadastre-se</h1>
                <div className="card-divider-long"></div>
                <form className="mt-3 p-0">
                  <div className="form-group">
                    <label className="text-green">
                      <strong>
                        <h4>Nome Completo</h4>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control b-info type-field"
                      id="nome"
                      placeholder="João da Silva"
                    />
                  </div>
                  <div className="row">
                    <div className="form-group col-12 col-md-8 col-lg-6 col-xl-5">
                      <label className="text-green">
                        <strong>
                          <h4>E-mail</h4>
                        </strong>
                      </label>
                      <input
                        type="email"
                        className="form-control b-info type-field"
                        id="email"
                        placeholder="joãodasilva@email.com"
                      />
                    </div>
                    <div className="form-group col-12 col-md-4 col-lg-2">
                      <label className="text-green">
                        <strong>
                          <h4>Documento</h4>
                        </strong>
                      </label>
                      <select
                        className="form-control b-info type-field"
                        id="tipo-de-pessoa"
                      >
                        <option>CPF</option>
                        <option>CNPJ</option>
                      </select>
                    </div>
                    <div className="form-group col-12 col-lg-4 col-xl-5">
                      <label className="text-green">
                        <strong>
                          <h4>CPF</h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control b-info type-field"
                        id="documento-cpf"
                        placeholder="456.789.123-10"
                      />
                    </div>
                  </div>
                  <Btn text="Cadastrar" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cadastro;
