import React, { Component } from "react";
// Components
import Btn from "../components/button.js";
// Services
import search from "../services/search.js";
import getFiltros from "../services/filters.js";
import getLocais from "../services/locais.js";
import RenderProfissionais from "../components/cardDoProfissional";
import filterValidation from "../services/filterValidation.js";
// Images
import workers from "../img/workers.jpg";
import loadingScreenGreenBg from "../img/white-green-loading.gif";
import loadingScreenWhiteBg from "../img/green-white-loading.gif";

class EncontreProfissionais extends Component {
  constructor() {
    super();
    this.state = {
      filtros: [],
      profissionaisEncontrados: [],
      filtrosMarcados: [],
      paginas: {
        atual: 1,
        total: 1
      },
      locais: "",
      estadoSelecionado: "",
      cidades: "",
      cidadeSelecionada: "",
      bairros: [],
      bairroSelecionado: ""
    };
    this.getProfissionais = this.getProfissionais.bind(this);
    this.limparFiltros = this.limparFiltros.bind(this);
    this.limparLista = this.limparLista.bind(this);
    this.carregarFiltros = this.carregarFiltros.bind(this);
    this.carregarLocais = this.carregarLocais.bind(this);
  }

  async getProfissionais() {
    this.setState({ profissionaisEncontrados: "Carregando..." });

    let tags = this.state.filtrosMarcados;
    if (tags.length === 0) {
      tags = "";
    }
    let termosPesquisados = document
      .querySelector("#campo-pesquisa")
      .value.trim();

    let { estadoSelecionado, cidadeSelecionada, bairros } = this.state;

    const searchParams = {
      tags:
        tags === "" || tags === undefined || tags === null || tags === false
          ? "_"
          : tags,
      pesquisa:
        termosPesquisados === "" ||
        termosPesquisados === undefined ||
        termosPesquisados === null ||
        termosPesquisados === false
          ? "_"
          : termosPesquisados,
      estado:
        estadoSelecionado === "" ||
        estadoSelecionado === undefined ||
        estadoSelecionado === null ||
        estadoSelecionado === false
          ? "_"
          : estadoSelecionado,
      cidade:
        cidadeSelecionada === "" ||
        cidadeSelecionada === undefined ||
        cidadeSelecionada === null ||
        cidadeSelecionada === false
          ? "_"
          : cidadeSelecionada,
      bairros:
        bairros === "" ||
        bairros === undefined ||
        bairros === null ||
        bairros === false
          ? "_"
          : bairros
    };

    // console.log(searchParams);

    const rota = `/profissionais/${searchParams.estado}/${searchParams.cidade}/${searchParams.bairros}/${searchParams.tags}/${searchParams.pesquisa}/${this.state.paginas.atual}`;
    const pesquisa = await search(rota);
    console.log(pesquisa);
    if (typeof pesquisa === "object" && pesquisa !== null) {
      this.setState({ profissionaisEncontrados: pesquisa.profissionais });
      localStorage.setItem(
        "profissionaisEncontradosFixHub",
        JSON.stringify(this.state.profissionaisEncontrados)
      );
    }
  }

  async carregarLocais() {
    const locais = await getLocais();
    if (typeof locais === "object") {
      this.setState({ locais: locais });
      // console.log(this.state.locais.estados);
    } else {
      return;
    }
  }

  async carregarFiltros() {
    const filtros = await getFiltros();
    if (typeof filtros === "object" && filtros.categoria !== null) {
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

    localStorage.setItem(
      "filtrosMarcadosFixHub",
      JSON.stringify(filtrosMarcados)
    );

    this.setState({
      filtrosMarcados: JSON.parse(localStorage.getItem("filtrosMarcadosFixHub"))
    });
  };

  renderCheckbox = labelText => {
    const label = labelText.charAt(0).toUpperCase() + labelText.slice(1);
    const inputId = label + "Checkbox";
    let isChecked;
    JSON.parse(localStorage.getItem("filtrosMarcadosFixHub")).indexOf(
      label.toLowerCase()
    ) === -1
      ? (isChecked = false)
      : (isChecked = true);
    return (
      <div className="form-inline text-wrap">
        <input
          type="checkbox"
          className="checkbox"
          id={inputId}
          onChange={() => this.validateCheckbox(inputId)}
          checked={isChecked}
        />
        <label
          className="form-check-label checkbox-label unselectable"
          onClick={() => this.validateCheckbox(inputId)}
        >
          <strong>{label}</strong>
          <label for={inputId} className="d-none">
            {label}
          </label>
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
            <div className="accordion-group accordion-card shadow mr-2">
              <div className="accordion-heading">
                <button
                  type="button"
                  className="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordionFiltros"
                  data-target={"#collapse" + categoriaFormatted}
                >
                  <div className="d-flex align-items-center card-heading">
                    <h5 className="green-text mx-auto text-center">
                      {objeto.categoria}
                    </h5>
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
                <div className="checkbox-wrapper">
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
          </div>
        );
      });
    } else {
      return;
    }
  }
  validateCitiesCheckbox = bairro => {
    const estado = this.state.bairros;
    if (this.state.bairros.indexOf(bairro) == -1) {
      estado.push(bairro);
      this.setState({ bairros: estado });
    } else {
      const novoEstado = this.state.bairros.filter(bairroEstado => {
        return bairroEstado !== bairro;
      });
      this.setState({ bairros: novoEstado });
    }
    // console.log(this.state)
  };

  renderCitiesCheckbox = labelText => {
    const label = labelText;
    const inputId = label + "Checkbox";
    let isChecked;
    this.state.bairros.indexOf(label) === -1
      ? (isChecked = false)
      : (isChecked = true);
    return (
      <div className="form-inline text-wrap">
        <input
          type="checkbox"
          className="checkbox"
          id={inputId}
          onChange={() => this.validateCitiesCheckbox(label)}
          checked={isChecked}
        />
        <label
          className="form-check-label checkbox-label unselectable"
          onClick={() => this.validateCitiesCheckbox(label)}
        >
          <strong>{label}</strong>
          <label for={inputId} className="d-none">
            {label}
          </label>
        </label>
      </div>
    );
  };

  renderCitiesAccordion() {
    if (this.state.cidadeSelecionada.length > 3) {
      console.log("Estados:", this.state.locais.estados);
      console.log("estadoSelecionado:", this.state.estadoSelecionado);
      const estado = this.state.locais.estados.find(estado => {
        return estado.uf === this.state.estadoSelecionado;
      });
      const cidade = estado.cidades.find(cidade => {
        return cidade.nome === this.state.cidadeSelecionada;
      });

      const categoriaFormatted = cidade.nome.replace(/ /g, "-");
      return (
        <div className="col-12 col-sm-6 col-md-4 m-0 p-0">
          <div className="accordion-group accordion-card shadow mr-2">
            <div className="accordion-heading">
              <button
                type="button"
                className="accordion-toggle"
                data-toggle="collapse"
                data-parent="#accordionFiltros"
                data-target={"#collapse" + categoriaFormatted}
              >
                <div className="d-flex align-items-center card-heading">
                  <h5 className="green-text mx-auto text-center">
                    Selecione os bairros
                    {/* {this.state.cidadeSelecionada} */}
                  </h5>
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
              <div className="checkbox-wrapper">
                {cidade.bairros.map((bairro, index) => {
                  let inferiorPadding;
                  index < cidade.bairros.length - 1
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
                        {this.renderCitiesCheckbox(bairro)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return;
    }
  }

  validateEstadoCidade = estadoCidade => {
    this.setState({
      estadoSelecionado: estadoCidade.estado,
      cidadeSelecionada: estadoCidade.cidade
    });
    // console.log(this.state)
  };

  renderRadialButton = labelText => {
    // console.log(labelText)

    const label = labelText.cidade;
    const inputId = label + "RadialButton";

    let isChecked;
    this.state.cidadeSelecionada.indexOf(label) === -1
      ? (isChecked = false)
      : (isChecked = true);
    return (
      <div className="form-inline text-wrap">
        <input
          type="radio"
          className="radial-button"
          id={inputId}
          name="cidade"
          tabIndex="1"
          onChange={() => this.validateEstadoCidade(labelText)}
          checked={isChecked}
        />
        <label
          className="form-check-label radial-button-label unselectable"
          onClick={() => this.validateEstadoCidade(labelText)}
        >
          <strong>{label}</strong>
          <label for={inputId} className="d-none">
            {label}
          </label>
        </label>
      </div>
    );
  };

  renderScrollBoxes() {
    if (this.state.locais.estados) {
      // console.log(this.state.locais.estados);
      const estados = this.state.locais.estados;

      return estados.map(estado => {
        const estadoFormatted = estado.uf.replace(/ /g, "-");
        return (
          <div className="col-12 col-sm-6 col-md-4 m-0 p-0">
            <div className="accordion-group accordion-card shadow mr-2">
              <div className="accordion-heading">
                <button
                  type="button"
                  className="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordionFiltros"
                  data-target={"#collapse" + estadoFormatted}
                  tabIndex="0"
                >
                  <div className="d-flex align-items-center card-heading ">
                    <h5 className="green-text mx-auto text-center">
                      Selecione uma Cidade
                      {/* {estado.uf} */}
                    </h5>
                  </div>
                </button>
              </div>
              <div
                id={"collapse" + estadoFormatted}
                className="accordion-body collapse in"
              >
                <div className="card-divider"></div>
              </div>
              <div className="inner-card-accordion">
                <div className="checkbox-wrapper">
                  {estado.cidades.map((cidade, index) => {
                    let inferiorPadding;
                    index < estado.cidades.length - 1
                      ? (inferiorPadding = "")
                      : (inferiorPadding = "pb-1");
                    return (
                      <div
                        id={"collapse" + estadoFormatted}
                        className="accordion-body collapse out"
                      >
                        <div
                          className={`accordion-inner card-item ${inferiorPadding}`}
                        >
                          {this.renderRadialButton({
                            estado: estado.uf,
                            cidade: cidade.nome
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return;
    }
  }

  sincronizarState() {
    if (JSON.parse(localStorage.getItem("filtrosMarcadosFixHub")) !== null) {
      this.setState({
        filtrosMarcados: JSON.parse(
          localStorage.getItem("filtrosMarcadosFixHub")
        )
      });
    }
  }
  limparFiltros() {
    localStorage.setItem("filtrosMarcadosFixHub", "[]");
    this.setState({
      filtrosMarcados: JSON.parse(localStorage.getItem("filtrosMarcadosFixHub"))
    });
  }
  limparLista() {
    localStorage.setItem("profissionaisEncontradosFixHub", "[]");
    this.setState({
      profissionaisEncontrados: JSON.parse(
        localStorage.getItem("profissionaisEncontradosFixHub")
      )
    });
  }
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("filtrosMarcadosFixHub")) === null) {
      localStorage.setItem("filtrosMarcadosFixHub", "[]");
    }
    if (
      JSON.parse(localStorage.getItem("profissionaisEncontradosFixHub")) ===
      null
    ) {
      localStorage.setItem("profissionaisEncontradosFixHub", "[]");
    }
    this.setState({
      filtrosMarcados: JSON.parse(
        localStorage.getItem("filtrosMarcadosFixHub")
      ),
      profissionaisEncontrados: JSON.parse(
        localStorage.getItem("profissionaisEncontradosFixHub")
      )
    });
    this.carregarFiltros();
    this.carregarLocais();
    document.getElementById("top-of-root").scrollIntoView(true);
  }

  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        {/* <!-- Background verde água --> */}
        <div className="container-fluid bg-white">
          {/* <!-- Conteúdo principal da página --> */}
          <div className="container bg-white">
            {/* <!-- Primeira row --> */}
            <div className="row">
              <form className="col-12 mt-4 ">
                {/* Início do Jumbotron de borda verde que engloba toda a seção de pesquisa */}
                <div className="text-center mx-auto">
                  {/* Inicio do Jumbotron verde com filtros de pesquisa */}
                  <div className="jumbotron-green col-12 text-left">
                    <h1 className="white-text">Encontre Profissionais</h1>
                    <div className="form-group">
                      <input
                        type="text"
                        id="campo-pesquisa"
                        className="form-control type-field col mr-0"
                        placeholder="Busque por termos chave..."
                      />
                      <div className="accordion" id="accordionFiltros">
                        <div className="accordion-group mr-0">
                          <div className="d-flex justify-content-between">
                            <div className="accordion-heading">
                              <button
                                type="button"
                                className="mt-2"
                                data-toggle="collapse"
                                data-parent="#accordionFiltros"
                                data-target={"#collapseConjuntoFiltros"}
                              >
                                <div className="btn btn-white shadow">
                                  <h5 className="mt-1 mb-1">Filtros</h5>
                                </div>
                              </button>
                            </div>
                            <Btn
                              text="Pesquisar"
                              className="btn btn-white shadow my-2 mr-1"
                              onClick={this.getProfissionais}
                            />
                          </div>
                          <div
                            id={"collapseConjuntoFiltros"}
                            className="accordion-body collapse in"
                          ></div>
                          <div className="inner-card-accordion bg-info">
                            <div
                              id={"collapseConjuntoFiltros"}
                              className="accordion-body collapse out"
                            >
                              <div className="mt-2 text-center mx-auto">
                                <Btn
                                  text="Limpar Filtros"
                                  className="btn btn-dark-green shadow mt-2 mr-2"
                                  onClick={this.limparFiltros}
                                />
                                <Btn
                                  text="Limpar Lista"
                                  className="btn btn-dark-green shadow mt-2"
                                  onClick={this.limparLista}
                                />
                              </div>
                              <div className="accordion-inner card-item">
                                <h3 className="white-text mb-0 pb-0 mt-2">
                                  Localização
                                </h3>
                                <div className="card-divider-long-white"></div>
                                <div className="d-flex flex-wrap mr-0">
                                  {this.renderScrollBoxes()}
                                  {this.renderCitiesAccordion()}
                                </div>
                                <h3 className="white-text mt-1 mb-0 pb-0 mt-4">
                                  Categorias
                                </h3>
                                <div className="card-divider-long-white"></div>
                                <div className="d-flex flex-wrap mr-0">
                                  {this.state.filtros.length === 0 ? (
                                    <>
                                      <div className="container-fluid bg-info">
                                        <div className="row">
                                          <div className="d-flex flex-column mx-auto">
                                            <h3 className="white-text">
                                              Carregando filtros...
                                            </h3>
                                            <img
                                              src={loadingScreenGreenBg}
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
                                <div className="card-divider-long-white mt-2"></div>

                                <div className="text-center mx-auto">
                                  <Btn
                                    text="Pesquisar"
                                    className="btn btn-white shadow my-2 mr-1"
                                    onClick={this.getProfissionais}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Fim do Jumbotron verde com filtros de pesquisa */}

                  {/* Inicio dos resultados de pesquisa */}
                  {typeof this.state.profissionaisEncontrados !== "string" ? (
                    this.state.profissionaisEncontrados.map(profissional => {
                      return (
                        <RenderProfissionais
                          idProfissional={profissional.id}
                          nome={profissional.nome}
                          icone={profissional.icone}
                          texto={profissional.anuncio.texto}
                          tags={profissional.tags}
                          anuncioPago={profissional.anuncio.anuncioPago}
                          tagOnClick={() => this.sincronizarState()}
                        />
                      );
                    })
                  ) : (
                    <>
                      <div className="container-fluid bg-white">
                        <div className="row pb-5">
                          <div className="d-flex flex-column mx-auto">
                            <h3 className="green-text">
                              Buscando Profissionais...
                            </h3>
                            <img
                              src={loadingScreenWhiteBg}
                              height="100"
                              width="100"
                              className="mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {/* Fim dos resultados de pesquisa */}
                </div>
                {/* Fim do Jumbotron de borda verde que engloba toda a seção de pesquisa */}
              </form>
            </div>
            {/* <!-- Fim da primeira row --> */}

            {/* <!-- Inicio da segunda row --> */}
            {this.state.profissionaisEncontrados.length < 1 ? (
              <div className="row mx-3">
                <div className="row jumbotron-clear ">
                  {/* <!-- Imagem à esquerda/baixo --> */}
                  <div className="col-10 col-sm-9 col-lg-6 mx-auto">
                    <img
                      src={workers}
                      width="100%"
                      alt="Pessoas apertando as mãos"
                    />
                  </div>
                  {/* <!-- Fim da Imagem à esquerda/baixo --> */}

                  {/* <!-- Text-box com conteúdo à direita/abaixo da primeira imagem --> */}
                  <div className="col-sm-12 col-lg-6 rounded my-auto text-center">
                    <h1 className="green-text">
                      A qualquer hora em qualquer lugar
                    </h1>
                    <br />
                    <h4 className="text-content text-left">
                      Encontre o profissional adequado para as suas
                      necessidades, realize um busca mais profunda, contate e
                      negocie com diversos profissionais, cadastre-se para ter
                      acesso a mais informações.
                    </h4>
                  </div>
                  {/* <!-- Fim da text-box com conteúdo à direita/abaixo da primeira imagem --> */}
                </div>
              </div>
            ) : (
              <> </>
            )}

            {/* Fim da segunda row */}
          </div>
          {/* <!-- Conteúdo principal da página --> */}
        </div>
        {/* <!-- Fim do background verde água --> */}
      </div>
    );
  }
}

export default EncontreProfissionais;
