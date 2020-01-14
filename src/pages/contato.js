import React, { Component } from "react";
// Components
import Btn from "../components/button.js";
// Images
import contato from "../img/contato.svg";
class Contato extends Component {
  enviarMensagem() {
    setTimeout(() => alert("Mensagem Enviada com Sucesso"), 200)
  }

  render() {
    return (
      <div className="container-fluid bg-white">
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
                alt="Imagem simbolizando diferentes formas de contato"
              />
            </div>
            {/* <!-- Fim da Imagem à direita/topo --> */}

            {/* <!-- Text-box com formulário à esquerda --> */}
            <div className="col-12 col-md-11 col-lg-7 mt-2 mb-3 mx-auto">
              <div className="jumbotron-green my-auto ">
                <form>
                  <div className="form-group">
                    <label className="text-white">
                      <strong>
                        <h5>Nome Completo</h5>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control b-info type-field"
                      id="nome-contato"
                      placeholder="João da Silva"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-white">
                      <strong>
                        <h5>E-mail</h5>
                      </strong>
                    </label>
                    <input
                      type="email"
                      className="form-control b-info type-field"
                      id="email-contato"
                      placeholder="joãodasilva@email.com"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="text-white">
                      <strong>
                        <h5>Finalidade do Contato</h5>
                      </strong>
                    </label>
                    <select
                      className="form-control b-info type-field"
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
                    <label className="text-white">
                      <strong>
                        <h5>Mensagem</h5>
                      </strong>
                    </label>
                    <textarea
                      className="form-control b-info type-field"
                      id="mensagem-contato"
                      rows="6"
                      placeholder="Digite sua mensagem neste campo..."
                    ></textarea>
                  </div>
                  <Btn
                    text="Enviar Mensagem"
                    onClick={this.enviarMensagem}
                    className="btn btn-dark-green shadow mt-2 mr-2"
                  />
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
                alt="Imagem simbolizando diferentes formas de contato"
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
