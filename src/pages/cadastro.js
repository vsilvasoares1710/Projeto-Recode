import React, { Component } from "react";
// Components
import Btn from "../components/button.js";
// Services
import getFiltros from "../services/filters.js";
import filterValidation from "../services/filterValidation.js";
// Images
import loadingScreen from "../img/green-white-loading.gif";

class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      documento: "CPF",
      tagsDoAnuncio: [],
      filtros: [],
      filtrosMarcados: []
    };
  }

  async carregarFiltros() {
    const filtros = await getFiltros();
    if (typeof filtros === "object" && filtros.catregoria !== null) {
      console.log(typeof filtros);
      this.setState({ filtros: filtros });
    } else {
      return;
    }
  }

  validateCheckbox = inputId => {
    const filtrosMarcados = filterValidation(
      inputId,
      this.state.filtrosMarcados
    );

    this.setState({
      filtrosMarcados: filtrosMarcados
    });
  };

  renderCheckbox = labelText => {
    const label = labelText.charAt(0).toUpperCase() + labelText.slice(1);
    const inputId = label + "Checkbox";
    let isChecked;
    this.state.filtrosMarcados.indexOf(label.toLowerCase()) === -1
      ? (isChecked = false)
      : (isChecked = true);
    return (
      <div className="form-inline text-wrap bg-white">
        <input
          type="checkbox"
          className="checkbox"
          id={inputId}
          onChange={() => this.validateCheckbox(inputId)}
          checked={isChecked}
        />
        <label
          className="form-check-label checkbox-l unselectable mb-1 ml-1"
          onClick={() => this.validateCheckbox(inputId)}
        >
          <strong>{label}</strong>
        </label>
      </div>
    );
  };

  renderAccordion() {
    if (this.state.filtros) {
      const filtros = this.state.filtros;

      return filtros.map(objeto => {
        const categoriaFormatted = objeto.categoria.replace(/ /g, "-");
        return (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="accordion-group accordion-card b-info mr-2">
              <div className="accordion-heading">
                <button
                  type="button"
                  className="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordionFiltros"
                  data-target={"#collapse" + categoriaFormatted}
                >
                  <div className="d-flex align-items-center card-heading ">
                    <h5 className="mx-auto text-center">{objeto.categoria}</h5>
                  </div>
                </button>
              </div>
              <div
                id={"collapse" + categoriaFormatted}
                className="accordion-body collapse in"
              >
                <div className="card-divider"></div>
              </div>
              <div className="inner-card-accordion">
                {objeto.tags.map((tag, index) => {
                  let inferiorPadding;
                  index < objeto.tags.length - 1
                    ? (inferiorPadding = "")
                    : (inferiorPadding = "pb-1");
                  return (
                    <div
                      id={"collapse" + categoriaFormatted}
                      className="accordion-body collapse out"
                    >
                      <div
                        className={`accordion-inner card-item ${inferiorPadding}`}
                      >
                        {this.renderCheckbox(tag)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      });
    } else {
      return;
    }
  }

  componentDidMount() {
    this.carregarFiltros();
  }
  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="container bg-white">
          <div className="col-12 mt-4 mb-4 mx-auto">
            <div className="jumbotron-green my-auto">
              <div className="jumbotron-clear my-auto shadow">
                <h1 className="">Cadastro</h1>
                <div className="card-divider-long"></div>
                <form className="mt-3 p-0">
                  <div className="row">
                    <div className="form-group col-12 col-md-4 col-lg-2">
                      <label className="text-green">
                        {/* inicio bloco de informações de dados prestador/empresa */}
                        <strong>
                          <h4>Documento</h4>
                        </strong>
                      </label>
                      <select
                        className="form-control b-info type-field"
                        id="tipo-documento"
                        onChange={() =>
                          this.setState({
                            documento: document.getElementById("tipo-documento")
                              .value
                          })
                        }
                      >
                        <option>CPF</option>
                        <option>CNPJ</option>
                      </select>
                    </div>
                    <div className="form-group col-12 col-md-8 col-lg-4 col-xl-5">
                      <label className="text-green">
                        <strong>
                          <h4>{this.state.documento}</h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control b-info type-field"
                        id="documento"
                        placeholder={
                          this.state.documento === "CPF"
                            ? "45678901234"
                            : "12345678000101"
                        }
                        maxLength="15"
                      />
                    </div>
                    <div className="form-group col-12 col-lg-6 col-xl-5">
                      <label className="text-green">
                        <strong>
                          <h4>E-mail</h4>
                        </strong>
                      </label>
                      <input
                        type="email"
                        className="form-control b-info type-field"
                        id="email"
                        placeholder={
                          this.state.documento === "CPF"
                            ? "joãodasilva@email.com"
                            : "email@empresa.com"
                        }
                        maxLength="128"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-green">
                      <strong>
                        <h4>
                          {this.state.documento === "CPF"
                            ? "Nome Completo"
                            : "Nome da Empresa"}
                        </h4>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control b-info type-field"
                      id="nome"
                      placeholder={
                        this.state.documento === "CPF"
                          ? "João da Silva"
                          : "Oficina do João"
                      }
                      maxLength="128"
                    />
                  </div>
                  <div className="row">
                    <div className="form-group col-12 col-md-6">
                      <label className="text-green">
                        <strong>
                          <h4>Senha</h4>
                        </strong>
                      </label>
                      <input
                        type="password"
                        className="form-control b-info type-field"
                        id="senha1"
                        maxLength="32"
                      />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label className="text-green">
                        <strong>
                          <h4>Confirmação da Senha</h4>
                        </strong>
                      </label>
                      <input
                        type="password"
                        className="form-control b-info type-field"
                        id="senha2"
                        maxLength="32"
                      />
                    </div>
                  </div>
                  {/* fim bloco de informações de dados prestador/empresa */}

                      {/* inicio bloco de informações de endereço*/}
                  <h3 className="mt-3">Informações de Endereço:</h3>

                  <div className="card-divider-long mb-3"></div>
                  <div className="row">
                  <div className="form-group col-12 col-md-6 col-lg-4">
                      <label className="text-green">
                        <strong>
                          <h4>CEP</h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control b-info type-field"
                        id="cep"
                        placeholder="00000-000"
                        maxLength="10"
                      />
                    </div>
                    <div className="form-group col-12 col-md-6 col-lg-4">
                      <label className="text-green">
                        <strong>
                          <h4>Estado</h4>
                        </strong>
                      </label>
                      <select
                        className="form-control b-info type-field"
                        id="estado"
                        onChange={() =>
                          this.setState({
                            documento: document.getElementById("estado")
                              .value
                          })
                        }
                      >
                        <option></option>
                        <option>SP</option>
                      </select>

                    </div>
                    <div className="form-group col-12 col-md-6 col-lg-4">
                    <label className="text-green">
                        <strong>
                          <h4>Cidade</h4>
                        </strong>
                      </label>
                        <select
                        className="form-control b-info type-field"
                        id="cidade"
                        onChange={() =>
                          this.setState({
                            documento: document.getElementById("cidade")
                              .value
                          })
                        }
                      >
                        <option></option>
                        <option>ver array para cidades</option>
                      </select>

                    </div>

                  </div>
                  <div className="row mt-3">
                    <div className="form-group col-12 col-md-10">
                      <label className="text-green">
                        <strong>
                          <h4>Logradouro</h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control b-info type-field"
                        id="logradouro"
                        placeholder="Rua / Avenida "
                        maxLength="70"
                      />
                    </div>
                    <div className="form-group col-12 col-md-2">
                      <label className="text-green">
                        <strong>
                          <h4>Numero</h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control b-info type-field"
                        id="numero"
                        placeholder="000"
                        maxLength="5"
                      />
                    </div>
                  </div>
                  {/* fim bloco de informações de endereço*/}

                {/* inicio bloco de informações de contato*/}
                  <h3 className="mt-3">Informações de contato:</h3>
                  <div className="card-divider-long mb-3"></div>
                  <div className="row">
                    <div className="form-group col-12 col-md-6 col-lg-4">
                      <label className="text-green">
                        <strong>
                          <h4>Telefone</h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control b-info type-field"
                        id="telefone"
                        placeholder="1012345678"
                        maxLength="10"
                      />
                    </div>
                    <div className="form-group col-12 col-md-6 col-lg-4">
                      <label className="text-green">
                        <strong>
                          <h4>Celular</h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control b-info type-field"
                        id="celular"
                        placeholder="11912345678"
                        maxLength="11"
                      />
                    </div>
                    <div className="form-group col-12 col-md-6 col-lg-4">
                      <label className="text-green">
                        <strong>
                          <h4>WhatsApp</h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control b-info type-field"
                        id="whatsapp"
                        placeholder="11912345678"
                        maxLength="11"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="form-group col-12 col-md-6">
                      <label className="text-green">
                        <strong>
                          <h4>Facebook</h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control b-info type-field"
                        id="facebook"
                        placeholder="facebook.com/oficinaDoJoão"
                        maxLength="128"
                      />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label className="text-green">
                        <strong>
                          <h4>LinkedIn</h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control b-info type-field"
                        id="linkedin"
                        placeholder="linkedin.com/oficinaDoJoão"
                        maxLength="128"
                      />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label className="text-green">
                        <strong>
                          <h4>
                            {this.state.documento === "CPF"
                              ? "Site Pessoal"
                              : "Site Oficial"}
                          </h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control b-info type-field"
                        id="site"
                        placeholder="www.oficinadojoao.com.br"
                        maxLength="128"
                      />
                    </div>
                  </div>
                  {/* fim bloco de informações de contato*/}
                   {/* inicio bloco de informações do anuncio */}
                  <h3 className="mt-3">Informações do Anúncio:</h3>
                  <div className="card-divider-long mb-3"></div>
                  <div className="row">
                    <div className="form-group col-12">
                      <label className="text-green">
                        <strong>
                          <h4>Texto do Anúncio</h4>
                        </strong>
                      </label>
                      <textarea
                        className="form-control type-field"
                        id="texto"
                        rows="8"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row pb-0 mb-0">
                    <div className="form-group col-12 pb-0 mb-0">
                      <label className="text-green">
                        <strong>
                          <h4>Tags do Anúncio</h4>
                        </strong>
                      </label>
                    </div>
                  </div>
                  <h5>Selecione abaixo as tags que serão utilizadas para encontrarem seu anúncio</h5>
                  <div
                    className="form-group d-flex flex-wrap mr-0"
                    id="accordionFiltros"
                  >
                    {this.state.filtros.length === 0 ? (
                      <>
                        <div className="container-fluid bg-white">
                          <div className="row">
                            <div className="d-flex flex-column mx-auto">
                              <h3 className="green-text">Carregando tags...</h3>
                              <img
                                src={loadingScreen}
                                height="100"
                                width="100"
                                className="mx-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      this.renderAccordion()
                    )}
                  </div>
                  <Btn text="Cadastrar" className="btn btn-info shadow" />
                  {/* fim bloco de informações do anuncio */}
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
