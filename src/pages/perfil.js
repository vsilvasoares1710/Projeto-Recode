import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../services/fixhubAPI";
import logout from "../services/logout";
// Images
import phoneIcon from "../img/phone-icon.svg";
import cellphoneIcon from "../img/cellphone-icon.svg";
import whatsappIcon from "../img/whatsapp-icon.svg";
import emailIcon from "../img/email-icon.svg";
import facebookIcon from "../img/facebook-icon.svg";
import linkedinIcon from "../img/linkedin-icon.svg";
import siteOficialIcon from "../img/siteOficial-icon.svg";
import loadingScreen from "../img/green-white-loading.gif";

class Perfil extends Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      dadosProfissional: "Carregando..."
    };
    // this.getProfissionaisId = this.getProfissionaisId.bind(this)
  }
  getProfissionaisId() {
    const tokenLocalStorage = localStorage.getItem("token");
    const idLocalStorage = localStorage.getItem("id");
    const idProfisional = JSON.parse(idLocalStorage);
    if (!idLocalStorage | !tokenLocalStorage) {
      logout();
      return;
    } else {
      try {
        api.get(`/profissionais/${idProfisional}`).then(response => {
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
  }

  componentDidMount() {
    this.getProfissionaisId();
    document.getElementById("top-of-root").scrollIntoView(true);
  }

  shouldComponentUpdate() {
    if (typeof this.state.dadosProfissional === "object") {
      return false;
    } else {
      return true;
    }
  }
  renderTags() {
    if (!this.state.dadosProfissional.tags) {
      return <></>;
    } else {
      return this.state.dadosProfissional.tags.map(value => {
        const tagName = value.charAt(0).toUpperCase() + value.slice(1);
        return (
          <div className="b-info rounded green-text py-1 px-2 m-1">
            <strong>{tagName}</strong>
          </div>
        );
      });
    }
  }
  renderContatos() {
    const contato = this.state.dadosProfissional.contato;
    const celular = (
      <div className="d-flex flex-nowrap">
        <img src={cellphoneIcon} height="35" className="my-2 ml-2 mr-2" />
        <h3 className="mt-2 ml-1">{contato.celular}</h3>
      </div>
    );
    const telefone = (
      <div className="d-flex flex-nowrap">
        <img src={phoneIcon} height="30" className="ml-1 mr-2" />
        <h3 className="">{contato.telefone}</h3>
      </div>
    );
    const whatsapp = (
      <div className="d-flex flex-nowrap">
        <img src={whatsappIcon} height="35" className="ml-1 mr-2" />
        <h3 className="mt-1">{contato.whatsapp}</h3>
      </div>
    );
    const email = (
      <div className="d-flex flex-nowrap">
        <img src={emailIcon} height="35" className="ml-0 mr-2" />
        <h3 className="pb-1 text-break-all">{contato.email}</h3>
      </div>
    );
    const dadosARenderizar = [];

    if (contato.celular) dadosARenderizar.push(celular);
    if (contato.telefone) dadosARenderizar.push(telefone);
    if (contato.whatsapp) dadosARenderizar.push(whatsapp);
    if (contato.email) dadosARenderizar.push(email);

    return dadosARenderizar.map(jsx => {
      return jsx;
    });
  }
  renderRedesSociais() {
    if (!this.state.dadosProfissional.redes_sociais) {
      return;
    }
    const redes = this.state.dadosProfissional.redes_sociais;

    const dadosARenderizar = [];

    if (redes.facebook)
      dadosARenderizar.push(
        <div className="d-flex flex-nowrap justify-content-end text-break-all">
          <a
            href={`http://www.${redes.facebook}`}
            className="d-flex flex-nowrap"
          >
            <h3 className="text-link">Facebok</h3>
          </a>
          <a
            href={`http://www.${redes.facebook}`}
            className="d-flex flex-nowrap"
          >
            <img src={facebookIcon} height="35" className="ml-2 mr-2" />
          </a>
        </div>
      );

    if (redes.linkedin)
      dadosARenderizar.push(
        <div className="d-flex flex-nowrap justify-content-end text-break-all">
          <a
            href={`http://www.${redes.linkedin}`}
            className="d-flex flex-nowrap"
          >
            <h3 className="text-link">LinkedIn</h3>
          </a>
          <a
            href={`http://www.${redes.linkedin}`}
            className="d-flex flex-nowrap"
          >
            <img src={linkedinIcon} height="30" className="ml-2 mr-1" />
          </a>
        </div>
      );

    if (redes.siteOficial)
      dadosARenderizar.push(
        <div className="d-flex flex-nowrap justify-content-end text-break-all">
          <a
            href={`http://www.${redes.siteOficial}`}
            className="d-flex flex-nowrap"
          >
            <h3 className="text-link" width="100">
              Site
            </h3>
          </a>
          <a
            href={`http://www.${redes.siteOficial}`}
            className="d-flex flex-nowrap"
          >
            <img src={siteOficialIcon} height="35" className="ml-1" />
          </a>
        </div>
      );

    return dadosARenderizar.map(jsx => {
      return jsx;
    });
  }
  render() {
    if (typeof this.state.dadosProfissional === "string") {
      return (
        <div className="container-fluid bg-white">
          <div className="row extend col">
            <div className="d-flex flex-column mx-auto my-auto">
              <h3 className="green-text text-center">
                Carregando dados do profissional...
              </h3>
              <img
                src={loadingScreen}
                height="100"
                width="100"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.dadosProfissional === null) {
      return (
        <div className="container-fluid bg-white">
          <div className="container bg-white">
            <div className="row my-auto extend">
              <h1 className="green-text text-enter mx-auto my-auto">
                Falha na requisição, retorne para a página anterior
              </h1>
            </div>
          </div>
        </div>
      );
    } else {
      const dados = this.state.dadosProfissional;
      const local = dados.localização;
      console.log(dados);
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
                  <div className="jumbotron-clear shadow mb-0">
                    {/* {dados.anuncio.anuncioPago === true ? (
                      <h6 className="text-right green-text m-0 p-0">
                        Anúncio Promovido
                      </h6>
                    ) : (
                      <> </>
                    )} */}
                    <img
                      src={dados.icone}
                      className="rounded-circle col-8 col-sm-7 col-md-5 col-lg-4 col-xl-3 text-left ml-4"
                    />

                    <h3 className="text-content text-justify">{dados.nome}</h3>
                    <div className="card-divider-long"></div>
                    {!dados.anuncio.texto ? (
                      <> </>
                    ) : (
                      <h4 className="text-content text-left mb-4">
                        {dados.anuncio.texto}
                      </h4>
                    )}
                    <div className="d-flex flex-wrap mb-3">
                      {this.renderTags()}
                    </div>
                    <div>
                      <h3 className="text-content text-left">Contato:</h3>
                      <div className="card-divider-long"></div>
                      <div className="">
                        <div className="d-flex flex-wrap justify-content-between">
                          <div className="pb-2">{this.renderContatos()}</div>
                          <div className=" mt-2">
                            {this.renderRedesSociais()}
                          </div>
                        </div>
                      </div>
                    </div>
                    {local ? (
                      <>
                        <h3 className="text-content text-left mt-4">
                          Localização:
                        </h3>
                        <div className="card-divider-long"></div>
                        <h3 className="text-content text-left mb-4">
                          {local.endereco ? <> {local.endereco}</> : <> </>}
                          {local.endereco && local.numero ? <>, </> : <> </>}
                          {local.numero ? <> {local.numero}</> : <> </>}
                          {local.cep ? (
                            <>
                              {" "}
                              - CEP: {local.cep}
                              <br />
                            </>
                          ) : (
                            <> </>
                          )}
                          {`${dados.localização.bairro}, ${
                            dados.localização.cidade
                          } - ${dados.localização.estado.toUpperCase()}`}
                        </h3>
                      </>
                    ) : (
                      <> </>
                    )}
                  </div>
                  {!dados.anuncio.imagens ? (
                    <> </>
                  ) : typeof dados.anuncio.imagens === "string" ? (
                    <>
                      <h3 className="white-text text-left text-content mt-3">
                        <strong>Imagens: </strong>
                      </h3>
                      <div className="card-divider-long-white mb-4"></div>
                      <div className="row">
                        <div className="col-6 col-md-3 col-xl-3">
                          <Link
                            to={{
                              pathname: "/imagem",
                              link: dados.anuncio.imagens
                            }}
                          >
                            <img
                              src={dados.anuncio.imagens}
                              width="100%"
                              className="rounded m-1 bg-white"
                            />
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="white-text text-left text-content mt-3">
                        <strong>Imagens: </strong>
                      </h3>
                      <div className="card-divider-long-white mb-4"></div>
                      <div className="row">
                        {dados.anuncio.imagens.map(imagem => {
                          return (
                            <>
                              <div className="col-6 col-md-3 col-xl-3">
                                <Link
                                  to={{
                                    pathname: "/imagem",
                                    link: imagem
                                  }}
                                >
                                  <img
                                    src={imagem}
                                    width="100%"
                                    className="rounded m-1 bg-white"
                                  />
                                </Link>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </>
                  )}
                  {!dados.anuncio.imagems ? (
                    <> </>
                  ) : (
                    <>
                      <h3 className="white-text text-left text-content mt-3">
                        <strong>Imagens: </strong>
                      </h3>
                      <div className="card-divider-long-white mb-4"></div>
                      <div className="row">
                        <div className="col-6 col-md-3 col-xl-3">
                          <Link
                            to={{
                              pathname: "/imagem",
                              link: dados.anuncio.imagens
                            }}
                          >
                            <img
                              src={dados.anuncio.imagens}
                              width="100%"
                              className="rounded m-1 bg-white"
                            />
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Perfil;
