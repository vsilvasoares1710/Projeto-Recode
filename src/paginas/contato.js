import React, { Component } from "react";
// Components
import Btn from "../components/button.js";
// Images
import contato from "../img/contato.png";
class Contato extends Component {
  enviarMensagem() {
    alert("Sua mensagem foi enviada com sucesso.");
  }

  render() {
    return (
      <div className="container-fluid bg-info">
        <div className="container bg-white">
          <h1 className="green-text text-center pt-3">Contato</h1>
          {/* <!-- Primeira row --> */}
          <div className="row">
            {/* <!-- Imagem à direita/topo --> */}
            <div className="col-sm-12 col-md-11 mt-2 mb-3 mx-auto pr-1 d-lg-none ">
              <img
                src={contato}
                width="98%"
                className="my-auto rounded-image"
                alt="Mão segurando celular para entrar em contato com a empresa"
              />
            </div>
            {/* <!-- Fim da Imagem à direita/topo --> */}

            {/* <!-- Text-box com formulário à esquerda --> */}
            <div className="col-12 col-md-11 col-lg-7 mt-2 mb-3 mx-auto">
              <div className="jumbotron-clear my-auto ">
                <form>
                  <div className="form-group">
                    <label className="text">
                      <h5>Nome Completo</h5>
                    </label>
                    <input
                      type="text"
                      className="form-control b-info"
                      id="nome-contato"
                      placeholder="João da Silva"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text">
                      <h5>E-mail</h5>
                    </label>
                    <input
                      type="email"
                      className="form-control b-info"
                      id="email-contato"
                      placeholder="joãodasilva@email.com"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="text">
                      <h5>Finalidade do Contato</h5>
                    </label>
                    <select
                      className="form-control b-info"
                      id="finalidade-contato"
                    >
                      <option>Sugestão</option>
                      <option>Elogio</option>
                      <option>Ajuda</option>
                      <option>Outros</option>
                      <option>Reclamação</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="text">
                      <h5>Mensagem</h5>
                    </label>
                    <textarea
                      className="form-control b-info"
                      id="mensagem-contato"
                      rows="6"
                      placeholder="Digite sua mensagem neste campo..."
                    ></textarea>
                  </div>
                  <Btn text="Enviar Mensagem" onClick={this.enviarMensagem} />
                </form>
              </div>
            </div>
            {/* <!-- Fim da text-box com formulário à esquerda --> */}
            {/* <!-- Imagem à direita/topo --> */}
            <div className="col-sm-12 col-md-8 col-lg-5 mt-2 mb-3 mx-auto d-none d-lg-block">
              <img
                src={contato}
                width="98%"
                className="my-auto rounded-image"
                alt="Mão segurando celular para entrar em contato com a empresa"
              />
            </div>
            {/* <!-- Fim da Imagem à direita/topo --> */}
          </div>
          {/* <!-- Fim da primeira row --> */}
        </div>
      </div>
    );
  }
}

export default Contato;
