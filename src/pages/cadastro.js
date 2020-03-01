import React, { Component } from "react";
import InputMask from "react-input-mask";
// Components
import Btn from "../components/button.js";
// Services
import getFiltros from "../services/filters.js";
import getLocais from "../services/locais.js";
import filterValidation from "../services/filterValidation.js";
import apiCadastro from "../services/apiCadastro.js";
// Images
import loadingScreen from "../img/green-white-loading.gif";

class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      cpf_cnpj: "CPF",
      tagsDoAnuncio: [],
      filtros: [],
      filtrosMarcados: [],
      formulario: {},
      cadastro: "Não Feito",
      mensagensDeErro: undefined,
      locais: "",
      estadoSelecionado: "",
      cidades: "",
      cidadeSelecionada: "",
      bairros: [],
      bairroSelecionado: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
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
    // console.log(this.state);
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
          <label for={inputId} className="d-none">
            {label}
          </label>
        </label>
      </div>
    );
  };
  renderResult() {
    if (this.state.cadastro === "Carregando") {
      return (
        <>
          <div className="container-fluid bg-white">
            <div className="row pb-5">
              <div className="d-flex flex-column mx-auto">
                <h3 className="green-text">Efetuando Cadastro...</h3>
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
      );
    } else if (this.state.cadastro === "Falhou") {
      return (
        <>
          <div className="container-fluid bg-white">
            <div className="row mb-0 pb-0 mt-3 mx-1">
              <div className="d-flex flex-column mx-auto">
                {this.state.mensagensDeErro !== undefined ? (
                  this.state.mensagensDeErro.map(mensagem => {
                    return <h5 className="red-text">{`${mensagem}\n`}</h5>;
                  })
                ) : (
                  <h5 className="red-text my-1">
                    {this.state.mensagensDeErro}
                  </h5>
                )}
              </div>
            </div>
          </div>
        </>
      );
    } else if (this.state.cadastro === "Ok") {
      return (
        <>
          <div className="container-fluid bg-white">
            <div className="row mb-0 pb-0 mt-3 mx-1">
              <div className="d-flex flex-column mx-auto">
                <h3 className="green-text">Usuário Cadastrado com Sucesso</h3>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <> </>;
    }
  }
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

  handleChange(event) {
    const alvoId = event.target.id;
    const valor = event.target.value;
    const novoFormulario = this.state.formulario;
    if(valor === "" | valor === null | valor === undefined) {
      novoFormulario[alvoId] = undefined;
    } else {
      novoFormulario[alvoId] = valor;
    }
    this.setState({ formulario: novoFormulario });

    // console.log(this.state);
  }

  validarInputs() {
    const { mensagensDeErro } = this.state;
    if (mensagensDeErro !== undefined) {
      mensagensDeErro.map(erro => {
        const parts = erro.split("'");
        const inputId = parts[1];
        const labelId = `${inputId}-label`;
        const label = document.getElementById(labelId);
        if (label) {
          if(!label.innerHTML.endsWith(erro)){
            label.innerHTML = label.innerHTML + erro;
          }
        }
      });
    }
  }

  async cadastrar() {
    this.setState({ cadastro: "Carregando" });
    const formulario = this.state.formulario;
    formulario["tags"] = this.state.filtrosMarcados;
    const response = await apiCadastro(formulario);
    if (response.status === 200) {
      this.setState({ cadastro: "Ok" });
    } else {
      this.setState({ cadastro: "Falhou" });
      if (typeof response.data.erro === "array") {
        const mensagens = [];
        response.data.erro.map(mensagem => {
          mensagens.push(mensagem);
        });
        this.setState({ mensagensDeErro: mensagens });
      } else if (typeof response.data.erro === "object") {
        const mensagens = [];
        for (const key in response.data.erro) {
          if (response.data.erro.hasOwnProperty(key)) {
            mensagens.push(response.data.erro[key]);
          }
        }
        this.setState({ mensagensDeErro: mensagens });
      } else {
        this.setState({ mensagensDeErro: [response.data.erro] });
      }
    }
    this.validarInputs();
  }

  validateCitiesRadialButton = bairro => {
    const novoFormulario = this.state.formulario;
    novoFormulario["bairro"] = bairro;
    this.setState({ formulario: novoFormulario });

    // console.log(this.state)
  };

  renderCitiesRadialButtons = labelText => {
    const label = labelText;
    const inputId = label + "RadialButton";

    return (
      <div className="form-inline text-wrap">
        <input
          type="radio"
          className="radial-button"
          id={inputId}
          name="bairro"
          onChange={() => this.validateCitiesRadialButton(label)}
        />
        <label
          className="form-check-label checkbox-label unselectable"
          onClick={() => this.validateCitiesRadialButton(label)}
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
        <div className="form-group col-12 col-md-6 col-lg-4">
          <label for="bairro" className="text-green" id="bairro-label">
            <strong>
              <h4>Bairro *</h4>
            </strong>
          </label>
          <div className="col-12 m-0 p-0">
            <div className="accordion-group accordion-card shadow mr-2 b-info">
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
                      Selecione um bairro
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
                          {this.renderCitiesRadialButtons(bairro)}
                        </div>
                      </div>
                    );
                  })}
                </div>
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
    const novoFormulario = this.state.formulario;
    novoFormulario["estado"] = estadoCidade.estado;
    novoFormulario["cidade"] = estadoCidade.cidade;

    this.setState({ formulario: novoFormulario });
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
          <div className="col-12 m-0 p-0">
            <div className="accordion-group accordion-card shadow mr-2 b-info">
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

  componentDidMount() {
    console.log(this.state);
    this.carregarFiltros();
    this.carregarLocais();
    document.getElementById("top-of-root").scrollIntoView(true)
  }
  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="container bg-white">
          <div className="row">
            <div className="col-12 mt-4 mb-4 mx-auto">
              <div className="jumbotron-green my-auto">
                <div className="jumbotron-clear my-auto shadow">
                  <h1>Cadastro</h1>
                  <div className="card-divider-long"></div>
                  <p>Campos marcados com * são requeridos</p>
                  <form
                    className="mt-3 p-0"
                    onSubmit={event => {
                      event.preventDefault();
                      this.cadastrar();
                    }}
                  >
                    <div className="row">
                      <div className="form-group col-6 col-md-2 col-lg-1">
                        <label for="documento-cpf" className="text-green">
                          {/* inicio bloco de informações de dados prestador/empresa */}
                          <strong>
                            <h4>CPF</h4>
                          </strong>
                        </label>
                        <input
                          type="radio"
                          className="form-control"
                          id="documento-cpf"
                          name="documento"
                          onClick={() =>
                            this.setState({
                              cpf_cnpj: "CPF"
                            })
                          }
                          checked={this.state.cpf_cnpj === "CPF" ? true : false}
                        />
                      </div>
                      <div className="form-group col-6 col-md-2 col-lg-1">
                        <label for="documento-cnpj" className="text-green">
                          {/* inicio bloco de informações de dados prestador/empresa */}
                          <strong>
                            <h4>CNPJ</h4>
                          </strong>
                        </label>
                        <input
                          type="radio"
                          className="form-control"
                          id="documento-cnpj"
                          name="documento"
                          onClick={() =>
                            this.setState({
                              cpf_cnpj: "CNPJ"
                            })
                          }
                          checked={
                            this.state.cpf_cnpj === "CNPJ" ? true : false
                          }
                        />
                      </div>
                      <div className="form-group col-12 col-md-8 col-lg-4 col-xl-5">
                        <label
                          for="cpf_cnpj"
                          className="text-green"
                          id="cpf_cnpj-label"
                        >
                          <strong>
                            <h4>Número do Documento *</h4>
                          </strong>
                        </label>
                        <InputMask
                          mask={
                            this.state.cpf_cnpj === "CPF"
                              ? "999.999.999-99"
                              : "99.999.999/9999-99"
                          }
                          className="form-control type-field"
                          id="cpf_cnpj"
                          onChange={this.handleChange}
                          placeholder={
                            this.state.cpf_cnpj === "CPF"
                              ? "456.789.012-34"
                              : "12.345.678/0001-01"
                          }
                          pattern={
                            this.state.cpf_cnpj === "CPF"
                              ? "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
                              : "[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}"
                          }
                          required
                        />
                      </div>
                      <div className="form-group col-12 col-lg-6 col-xl-5">
                        <label
                          for="email"
                          className="text-green"
                          id="email-label"
                        >
                          <strong>
                            <h4>E-mail *</h4>
                          </strong>
                        </label>
                        <input
                          type="email"
                          className="form-control type-field"
                          onChange={this.handleChange}
                          id="email"
                          placeholder={
                            this.state.cpf_cnpj === "CPF"
                              ? "joãodasilva@email.com"
                              : "email@empresa.com"
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="nome" className="text-green" id="nome-label">
                        <strong>
                          <h4>
                            {this.state.cpf_cnpj === "CPF"
                              ? "Nome Completo *"
                              : "Nome da Empresa *"}
                          </h4>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control type-field"
                        onChange={this.handleChange}
                        onBlur={this.checkRequiredInput}
                        id="nome"
                        placeholder={
                          this.state.cpf_cnpj === "CPF"
                            ? "João da Silva"
                            : "Oficina do João"
                        }
                        maxLength="128"
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="form-group col-12 col-md-6">
                        <label
                          for="senha"
                          className="text-green"
                          id="senha-label"
                        >
                          <strong>
                            <h4>Senha *</h4>
                          </strong>
                        </label>
                        <input
                          type="password"
                          className="form-control type-field"
                          onChange={this.handleChange}
                          id="senha"
                          minLength="6"
                          maxLength="32"
                          required
                        />
                      </div>
                    </div>
                    {/* fim bloco de informações de dados prestador/empresa */}

                    {/* inicio bloco de informações de endereço*/}
                    <h3 className="mt-3">Informações de Endereço:</h3>

                    <div className="card-divider-long mb-3"></div>
                    <div className="row">
                      <div className="form-group col-12 col-md-6 col-lg-4">
                        <label
                          for="cidade"
                          className="text-green"
                          id="cidade-label"
                        >
                          <strong>
                            <h4>Cidade *</h4>
                          </strong>
                        </label>
                        {this.renderScrollBoxes()}
                      </div>
                      {this.renderCitiesAccordion()}
                      <div className="form-group col-12 col-md-6 col-lg-4">
                        <label for="cep" className="text-green" id="cep-label">
                          <strong>
                            <h4>CEP</h4>
                          </strong>
                        </label>
                        <InputMask
                          mask={"99999-999"}
                          onChange={this.handleChange}
                          className="form-control type-field mt-2"
                          id="cep"
                          placeholder="78123-456"
                          pattern="[0-9]{5}-[0-9]{3}"
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="form-group col-12 col-md-10">
                        <label
                          for="endereco"
                          className="text-green"
                          id="endereco-label"
                        >
                          <strong>
                            <h4>Logradouro</h4>
                          </strong>
                        </label>
                        <input
                          type="text"
                          className="form-control type-field"
                          id="endereco"
                          onChange={this.handleChange}
                          placeholder="Rua João dos Reis"
                          maxLength="70"
                        />
                      </div>
                      <div className="form-group col-12 col-md-2">
                        <label
                          for="numero"
                          className="text-green"
                          id="numero-label"
                        >
                          <strong>
                            <h4>Número</h4>
                          </strong>
                        </label>
                        <input
                          type="text"
                          className="form-control type-field"
                          id="numero"
                          onChange={this.handleChange}
                          placeholder="000"
                          pattern="[a-zA-Z0-9]{0,5}"
                          maxLength="5"
                        />
                      </div>
                    </div>
                    {/* fim bloco de informações de endereço*/}

                    {/* inicio bloco de informações de contato*/}
                    <h3 className="mt-3">Informações de Contato:</h3>
                    <div className="card-divider-long mb-3"></div>
                    <div className="row">
                      <div className="form-group col-12 col-md-6 col-lg-4">
                        <label
                          for="telefone"
                          className="text-green"
                          id="telefone-label"
                        >
                          <strong>
                            <h4>Telefone</h4>
                          </strong>
                        </label>
                        <InputMask
                          mask={"(99) 9999-9999"}
                          className="form-control type-field"
                          id="telefone"
                          onChange={this.handleChange}
                          placeholder="(11) 3456-7891"
                          pattern="^\([0-9]{2,3}\) [0-9]{4}-[0-9]{4}?"
                        />
                      </div>
                      <div className="form-group col-12 col-md-6 col-lg-4">
                        <label
                          for="celular"
                          className="text-green"
                          id="celular-label"
                        >
                          <strong>
                            <h4>Celular *</h4>
                          </strong>
                        </label>
                        <InputMask
                          mask={"(99) 99999-9999"}
                          className="form-control type-field"
                          id="celular"
                          onChange={this.handleChange}
                          pattern="^\([0-9]{2,3}\) [0-9]{5}-[0-9]{4}?"
                          placeholder="(11) 93456-7891"
                          required
                        />
                      </div>
                      <div className="form-group col-12 col-md-6 col-lg-4">
                        <label
                          for="whatsapp"
                          className="text-green"
                          id="whatsapp-label"
                        >
                          <strong>
                            <h4>WhatsApp</h4>
                          </strong>
                        </label>
                        <InputMask
                          mask={"(99) 99999-9999"}
                          className="form-control type-field"
                          id="whatsapp"
                          pattern="^\([0-9]{2,3}\) [0-9]{5}-[0-9]{4}?"
                          onChange={this.handleChange}
                          placeholder="(11) 93456-7891"
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="form-group col-12 col-md-6">
                        <label
                          for="facebook"
                          className="text-green"
                          id="facebook-label"
                        >
                          <strong>
                            <h4>Facebook</h4>
                          </strong>
                        </label>
                        <InputMask
                          mask={
                            "f\\acebook.com/****************************************"
                          }
                          className="form-control type-field"
                          id="facebook"
                          onChange={this.handleChange}
                          placeholder="facebook.com/oficinaDoJoão"
                          pattern="facebook\.com\/.{0,}"
                          maskChar={null}
                        />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <label
                          for="linkedin"
                          className="text-green"
                          id="linkedin-label"
                        >
                          <strong>
                            <h4>LinkedIn</h4>
                          </strong>
                        </label>
                        <InputMask
                          mask={
                            "linkedin.com/in/****************************************"
                          }
                          className="form-control type-field"
                          id="linkedin"
                          onChange={this.handleChange}
                          placeholder="linkedin.com/in/oficinaDoJoão"
                          pattern="linkedin\.com\/in\/.{0,}"
                          maskChar={null}
                        />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <label
                          for="site"
                          className="text-green"
                          id="site-label"
                        >
                          <strong>
                            <h4>
                              {this.state.cpf_cnpj === "CPF"
                                ? "Site Pessoal"
                                : "Site Oficial"}
                            </h4>
                          </strong>
                        </label>
                        <input
                          type="text"
                          className="form-control type-field"
                          id="site"
                          onChange={this.handleChange}
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
                        <label
                          for="texto_anuncio"
                          className="text-green"
                          id="texto_anuncio-label"
                        >
                          <strong>
                            <h4>Texto do Anúncio</h4>
                          </strong>
                        </label>
                        <textarea
                          className="form-control type-field"
                          onChange={this.handleChange}
                          id="texto_anuncio"
                          rows="8"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row pb-0 mb-0">
                      <div className="form-group col-12 pb-0 mb-0">
                        <label className="text-green">
                          <strong>
                            <h4>Tags do Anúncio *</h4>
                          </strong>
                        </label>
                      </div>
                    </div>
                    <h5>
                      Selecione abaixo as tags que serão utilizadas para
                      encontrarem seu anúncio
                    </h5>
                    <div
                      className="form-group d-flex flex-wrap mr-0"
                      id="accordionFiltros"
                    >
                      {this.state.filtros.length === 0 ? (
                        <>
                          <div className="container-fluid bg-white">
                            <div className="row">
                              <div className="d-flex flex-column mx-auto">
                                <h3 className="green-text">
                                  Carregando tags...
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
                        </>
                      ) : (
                        this.renderAccordion()
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info shadow"
                      id="btn-cadastro"
                    >
                      Cadastrar
                    </button>
                    {/* fim bloco de informações do anuncio */}
                    {this.renderResult()}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cadastro;
