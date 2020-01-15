import React, { Component } from "react";
import axios from "axios";
// Images
import LogoFundoClaro from "../img/logFundoClaro.png";

class Profissional extends Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      dadosProfissional: "Carregando..."
    };
    // this.getProfissionaisId = this.getProfissionaisId.bind(this)
  }
  getProfissionaisId() {
    try {
      axios
        .get(`/profissionais/${this.props.match.params.id}`)
        .then(response => {
          console.log(response.data);
          if (!response.data) {
            this.setState({ dadosProfissional: null });
          } else {
            this.setState({ dadosProfissional: response.data });
          }
        });
    } catch (error) {
      console.error(error);
      this.setState({ dadosProfissional: null });
    }
  }

  componentDidMount() {
    this.getProfissionaisId();
  }

  shouldComponentUpdate() {
    if (typeof this.state.dadosProfissional === "object") {
      return false;
    } else {
      return true;
    }
  }
  renderTags() {
    return this.state.dadosProfissional.tags.map(value => {
      const tagName = value.charAt(0).toUpperCase() + value.slice(1);
      return (
        <div className="b-info rounded green-text py-1 px-2 m-1">
          <strong>{tagName}</strong>
        </div>
      );
    });
  }
  renderContatos() {
    const contato = this.state.dadosProfissional.contato
    const dadosARenderizar = []
    if (contato.celular) dadosARenderizar.push(<div><h3>Celular: {contato.celular}</h3></div>)
    if (contato.telefone) dadosARenderizar.push(<div><h3>Telefone: {contato.telefone}</h3></div>)
    if (contato.whatsapp) dadosARenderizar.push(<div><h3>WhatsApp: {contato.whatsapp}</h3></div>)
    if (contato.email) dadosARenderizar.push(<div><h3>Email: {contato.email}</h3></div>)
    return dadosARenderizar.map( jsx => {
      return jsx
    })
  }
  renderRedesSociais() {
    const redes = this.state.dadosProfissional.redes_sociais
    const dadosARenderizar = []
    if (redes.facebook) dadosARenderizar.push(<div><h3>Facebook: {redes.facebook}</h3></div>)
    if (redes.linkedin) dadosARenderizar.push(<div><h3>LinkedIn: {redes.linkedin}</h3></div>)
    if (redes.siteOficial) dadosARenderizar.push(<div><h3>Site Oficial: {redes.siteOficial}</h3></div>)
    return dadosARenderizar.map( jsx => {
      return jsx
    })
  }
  render() {
    if (this.state.dadosProfissional === "Carregando...") {
      return (
        <div className="container-fluid bg-white">
          <div className="container bg-white stretch">
            <div className="col">
              <h1 className="green-text text-enter mx-auto">Carregando...</h1>
            </div>
          </div>
        </div>
      );
    } else if (this.state.dadosProfissional === null) {
      return (
        <div className="container-fluid bg-white">
          <div className="container bg-white stretch">
            <div className="col">
              <h1 className="green-text text-enter mx-auto">
                Falha na Requisição, volte para a página anterior
              </h1>
            </div>
          </div>
        </div>
      );
    } else {
      const dados = this.state.dadosProfissional
      return (
        <div className="container-fluid bg-white">
          {/* <!-- Conteúdo principal da página --> */}
          <div className="container bg-white">
            {/* <!-- Inicio da primeira row --> */}
            <div className="row">
              {/* <!-- Inicio do conteiner quem somos --> */}
              <div className="col-12 mt-4">
                {/* <!-- Inicio do jumbotron superior --> */}
                <div className="jumbotron-green text-center mt-0 mb-4">
                  <div className="jumbotron-clear">
                  <img
                    src={dados.icone}
                    className="rounded-circle col-8 col-sm-7 col-md-5 col-lg-4 col-xl-3 text-left ml-4"
                  />
                  <h3 className="text-content text-justify">
                    {dados.nome}
                  </h3>
                  <div className="card-divider-long"></div>
                    <h4 className="text-content text-justify mb-4">
                      {dados.anuncio.texto}
                    </h4>
                    <div className="d-flex flex-wrap mb-3">{this.renderTags()}</div>
                    <div className="text-content text-left">
                      <h3>
                      Contato:
                      </h3>
                      <div className="card-divider-long"></div>
                      {this.renderContatos()}
                      {this.renderRedesSociais()}
                    </div>
                  </div>
                  <h3 className="white-text text-left text-content"><strong>Imagens: </strong></h3>
                  <div className ="card-divider-long-white mb-4"></div>
                  <div className="row">
                    {this.state.dadosProfissional.anuncio.imagens.map(
                      linkDaImagem => {
                        return (
                          <div className="col-6 col-md-3 col-xl-3">
                            <img
                              src={linkDaImagem}
                              width="100%"
                              className="rounded m-1 border-white"
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Profissional;
