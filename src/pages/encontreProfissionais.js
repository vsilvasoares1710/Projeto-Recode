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
      estado: "",
      estadoSelecionado: "",
      cidades: "",
      cidadeSelecionada: "",
      bairros: "",
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
    let termosPesquisados = document.querySelector("#campo-pesquisa").value.trim();

    let { estadoSelecionado, cidadeSelecionada, bairroSelecionado } = this.state

    const searchParams = {
      tags: tags === "" || tags === undefined || tags === null || tags === false ? "_" : tags,
      pesquisa: termosPesquisados === "" || termosPesquisados === undefined || termosPesquisados === null || termosPesquisados === false ? "_" : termosPesquisados,
      estado: estadoSelecionado === "" || estadoSelecionado === undefined || estadoSelecionado === null || estadoSelecionado === false ? "_" : estadoSelecionado,
      cidade: cidadeSelecionada === "" || cidadeSelecionada === undefined || cidadeSelecionada === null || cidadeSelecionada === false ? "_" : cidadeSelecionada,
      bairro: bairroSelecionado === "" || bairroSelecionado === undefined || bairroSelecionado === null || bairroSelecionado === false ? "_" : bairroSelecionado
    }

    console.log(searchParams)

    const rota = `/profissionais/${searchParams.estado}/${searchParams.cidade}/${searchParams.bairro}/${searchParams.tags}/${searchParams.pesquisa}/${this.state.paginas.atual}`;
    const pesquisa = await search(rota);
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
      console.log(this.state.locais.estados);
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
          {label}
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
                  <div className="d-flex align-items-center card-heading ">
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
                                className="accordion-toggle col-1"
                                data-toggle="collapse"
                                data-parent="#accordionFiltros"
                                data-target={"#collapseConjuntoFiltros"}
                              >
                                <div className="btn btn-white shadow my-2">
                                  Filtros
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
                              <div className="accordion-inner card-item">
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
                                <div className="card-divider-long-white mt-3"></div>
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <select
                        class="custom-select custom-select-lg type-field mt-3 col-3 col-sm-2 col-lg-1"
                        id="uf-select"
                        onChange={() => {
                          const { uf, cidades} = JSON.parse(document.querySelector("#uf-select").value)
                          console.log(uf)
                          this.setState({
                            cidades,
                            estadoSelecionado: uf
                          });
                        }}
                      >
                        <option selected value="">
                          UF
                        </option>
                        {this.state.locais.estados === undefined ? (
                          <option value="">Carregando estados...</option>
                        ) : (
                          <>
                            {this.state.locais.estados.map(estado => {
                              const {uf, cidades} = estado
                              return (
                                <option value={JSON.stringify({uf, cidades})}>
                                  {uf}
                                </option>
                              );
                            })}
                          </>
                        )}
                      </select>
                      {this.state.cidades === "" ? (
                        <></>
                      ) : (
                        <select
                          class="custom-select custom-select-lg type-field mt-3 col-9 col-sm-10 col-md-5"
                          id="cidade-select"
                          onChange={() => {
                            const { nome, bairros} = JSON.parse(document.querySelector("#cidade-select").value)
                            this.setState({
                              bairros,
                              cidadeSelecionada: nome
                            });
                          }}
                        >
                          <option selected value="">
                            Cidade
                          </option>
                          {this.state.cidades === "" ? (
                            <option value="">
                              Selecione um estado primeiro
                            </option>
                          ) : (
                            <>
                              {this.state.cidades.map(cidade => {
                                const { nome, bairros } = cidade
                                return (
                                  <option
                                    value={JSON.stringify({nome, bairros})}
                                  >
                                    {nome}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </select>
                      )}
                      {this.state.bairros === "" ? (
                        <></>
                      ) : (
                        <select
                          class="custom-select custom-select-lg type-field mt-3 col-12 col-sm-8 col-md-5 col-xl-6"
                          id="bairros-select"
                          onChange={() => {
                            this.setState({
                              bairroSelecionado: document.querySelector("#bairros-select")
                                .value
                            });
                          }}
                        >
                          <option selected value="">
                            Bairro
                          </option>
                          {this.state.bairros === "" ? (
                            <option value="">
                              Selecione uma cidade primeiro
                            </option>
                          ) : (
                            <>
                              {this.state.bairros.map(bairro => {
                                return (
                                  <option
                                    value={bairro}
                                  >
                                    {bairro}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </select>
                      )}
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
                          icone={profissional.foto}
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
                    <h4 className="text-content text-justify">
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
