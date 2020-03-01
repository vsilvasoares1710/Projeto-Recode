import React, { Component } from "react";
import InputMask from "react-input-mask";
// Components
import Btn from "../components/button.js";
// Services
import getFiltros from "../services/filters.js";
import getLocais from "../services/locais.js";
import filterValidation from "../services/filterValidation.js";
import apiAtualizaçãoCadastro from "../services/apiAtualizaçãoCadastro.js";
import logout from "../services/logout";
import dadosCadastrais from "../services/dadosCadastrais";
// Images
import loadingScreen from "../img/green-white-loading.gif";
import defaultUser from "../img/defaultUser.png";

class AlterarCadastro extends Component {
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
      bairroSelecionado: "",
      idProfissional: "",
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.atualizarCadastro = this.atualizarCadastro.bind(this);
  }

  checarLogin() {
    const tokenLocalStorage = localStorage.getItem("token");
    const idLocalStorage = localStorage.getItem("id");
    const idProfisional = JSON.parse(idLocalStorage);
    const tokenLogin = JSON.parse(tokenLocalStorage);
    if (!idLocalStorage | !tokenLocalStorage) {
      logout();
      return;
    } else {
      console.log("estou logado");
      this.setarInputs();
    }
  }

  async setarInputs() {
    function atribuirValor(inputId, valor) {
      document.getElementById(inputId).value = valor;
    }

    const items = await this.buscarDadosProfissional();
  }

  async buscarDadosProfissional() {
    await this.carregarLocais();
    const dados = await dadosCadastrais();
    console.log("Dados da requisição: ", dados);
    const {
      id,
      nome,
      cpf_cnpj,
      icone,
      contato: { telefone, whatsapp, celular, email },
      tags,
      localização: { estado, cidade, bairro, endereco, numero, cep },
      redes_sociais: { linkedin, facebook, siteOficial },
      anuncio: { texto, imagens }
    } = dados;

    if (cpf_cnpj.length === 14) {
      this.setState({ cpf_cnpj: "CPF" });
    } else {
      this.setState({ cpf_cnpj: "CNPJ" });
    }
    console.log(endereco);
    this.setState({
      filtrosMarcados: tags,
      estadoSelecionado: estado,
      cidadeSelecionada: cidade,
      idProfissional: id,
      formulario: {
        nome,
        cep,
        cpf_cnpj,
        email,
        telefone,
        whatsapp,
        celular,
        estado,
        cidade,
        bairro,
        endereco,
        numero,
        cep,
        linkedin,
        facebook,
        site: siteOficial,
        texto_anuncio: texto,
        imagens,
        foto: icone
      }
    });
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
                <h3 className="green-text">Efetuando Alterações...</h3>
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
                    return <h5 className="green-text">{`${mensagem}\n`}</h5>;
                  })
                ) : (
                  <h5 className="green-text my-1">
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
                <h3 className="green-text">
                  Alterações Cadastrais Realizadas com Sucesso
                </h3>
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
    if ((valor === "") | (valor === null) | (valor === undefined)) {
      novoFormulario[alvoId] = undefined;
    } else {
      novoFormulario[alvoId] = valor;
    }
    this.setState({ formulario: novoFormulario });

    // console.log(this.state);
  }

  validarInputs() {
    const { mensagensDeErro } = this.state;
    if (mensagensDeErro !== undefined && typeof mensagensDeErro === "array") {
      mensagensDeErro.map(erro => {
        const parts = erro.split("'");
        const inputId = parts[1];
        const labelId = `${inputId}-label`;
        const label = document.getElementById(labelId);
        if (label) {
          if (!label.innerHTML.endsWith(erro)) {
            label.innerHTML = label.innerHTML + erro;
          }
        }
      });
    }
  }

  async atualizarCadastro() {
    this.setState({ cadastro: "Carregando" });
    const form = this.state.formulario;
    const arrayImagens = this.state.formulario.imagens;
    const stringImagens = JSON.stringify(this.state.formulario.imagens);
    form["imagens"] = stringImagens;
    form["tags"] = this.state.filtrosMarcados;
    const response = await apiAtualizaçãoCadastro(form);
    if (response.status === 200) {
      form["imagens"] = arrayImagens;
      this.setState({ cadastro: "Ok", formulario: form });
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
    this.setState({ formulario: novoFormulario, bairroSelecionado: bairro });

    // console.log(this.state)
  };

  renderCitiesRadialButtons = labelText => {
    const label = labelText;
    const inputId = label + "RadialButton";
    let isChecked;
    this.state.formulario.bairro === label
      ? (isChecked = true)
      : (isChecked = false);
    return (
      <div className="form-inline text-wrap">
        <input
          type="radio"
          className="radial-button"
          id={inputId}
          name="bairro"
          onChange={() => this.validateCitiesRadialButton(label)}
          checked={isChecked}
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
              <h4>Bairro</h4>
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

  async selecionarFoto(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ml_default");
    this.setState({ loading: true });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/fixhub/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    if (file) {
      const { formulario } = this.state;

      formulario.foto = file.secure_url;

      this.setState({ formulario });
    }
    this.setState({ loading: false });
  }

  async selecionarImagem(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ml_default");
    this.setState({ loading: true });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/fixhub/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    if (file) {
      const { formulario } = this.state;

      let { imagens } = formulario;

      const url = file.secure_url;

      console.log(imagens, url);
      if (imagens) {
        console.log(typeof imagens);
        if (typeof imagens === "object") {
          imagens.push(url);
        } else {
          imagens = [imagens, url];
        }
      } else {
        imagens = url;
      }

      formulario.imagens = imagens;
      console.log(formulario);
      this.setState({ formulario });
    }
    this.setState({ loading: false });
  }

  deletarImagem(imagemADeletar){

    const imagens = this.state.formulario.imagens

    const formulario = this.state.formulario


    if(typeof imagens === "string"){
      formulario.imagens = null
      this.setState({ formulario })
    } else {
      const novasImagens = imagens.filter(imagem => {
        return imagem !== imagemADeletar
      })
      formulario.imagens = novasImagens
      this.setState({ formulario })
    }

  }

  componentDidMount() {
    this.checarLogin();
    console.log(this.state);
    this.carregarFiltros();
    document.getElementById("top-of-root").scrollIntoView(true)
  }
  componentDidUpdate() {
    console.log("ESTADO:", this.state);
  }

  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="container bg-white">
          <div className="row">
            <div className="col-12 mt-4 mb-4 mx-auto">
              <div className="jumbotron-green my-auto">
                <div className="jumbotron-clear my-auto shadow">
                  <h1>Alterar Cadastro</h1>
                  <div className="card-divider-long"></div>
                  <p>Campos marcados com * são requeridos</p>
                  <form
                    className="mt-3 p-0"
                    onSubmit={event => {
                      event.preventDefault();
                      this.atualizarCadastro();
                    }}
                  >
                    {" "}
                    <div className="row">
                      <div className="form-group col-12 text-center">
                        <div className="d-flex flex-column text-center mx-auto">
                          <label
                            for="foto"
                            className="text-green"
                            id="foto-label"
                          >
                            <strong>
                              <h4>Foto de Perfil</h4>
                            </strong>
                          </label>
                          {this.state.formulario.foto ? (
                            <img
                              id="foto"
                              src={this.state.formulario.foto}
                              className="rounded-circle col-8 col-sm-7 col-md-5 col-lg-4 col-xl-3 text-center mx-auto"
                            />
                          ) : (
                            <img
                              id="foto"
                              src={defaultUser}
                              className="rounded-circle col-8 col-sm-7 col-md-5 col-lg-4 col-xl-3 text-center mx-auto"
                            />
                          )}
                          <label
                            for="file-foto"
                            className="btn btn-info btn-sm mt-2 text-center mx-auto"
                          >
                            Alterar foto
                          </label>
                          <input
                            name="file"
                            type="file"
                            id="file-foto"
                            className="input-file"
                            onChange={e => this.selecionarFoto(e)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12 col-md-4 col-lg-1">
                        <label
                          for="idProfissional"
                          className="text-green"
                          id="idProfissional-label"
                        >
                          <strong>
                            <h4>ID</h4>
                          </strong>
                        </label>
                        <input
                          type="idProfissional"
                          className="form-control type-field"
                          id="idProfissional"
                          value={this.state.idProfissional}
                          readOnly
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
                        <input
                          className="form-control type-field"
                          id="cpf_cnpj"
                          onChange={this.handleChange}
                          value={this.state.formulario.cpf_cnpj}
                          readOnly
                        />
                      </div>
                      <div className="form-group col-12 col-lg-6 col-xl-6">
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
                          value={this.state.formulario.email}
                          id="email"
                          readOnly
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
                        value={this.state.formulario.nome}
                        id="nome"
                        placeholder={
                          this.state.cpf_cnpj === "CPF"
                            ? "João da Silva"
                            : "Oficina do João"
                        }
                        maxLength="128"
                        value={this.state.formulario.nome}
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
                            <h4>Cidade</h4>
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
                          value={this.state.formulario.cep}
                          className="form-control type-field mt-2"
                          id="cep"
                          placeholder="78123-456"
                          pattern="[0-9]{5}-[0-9]{3}"
                          required
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
                          value={this.state.formulario.endereco}
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
                          value={this.state.formulario.numero}
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
                          value={this.state.formulario.telefone}
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
                          value={this.state.formulario.celular}
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
                          value={this.state.formulario.whatsapp}
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
                          value={this.state.formulario.facebook}
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
                          value={this.state.formulario.linkedin}
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
                          value={this.state.formulario.site}
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
                          value={this.state.formulario.texto_anuncio}
                          id="texto_anuncio"
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
                    <div className="row">
                      <div className="form-group col-12">
                        <label
                          for="texto_anuncio"
                          className="text-green"
                          id="texto_anuncio-label"
                        >
                          <strong>
                            <h4>Imagens do Anúncio</h4>
                          </strong>
                        </label>
                        <br />
                        <div className="d-flex flex-row flex-wrap">
                          {!this.state.formulario.imagens ? (
                            <> </>
                          ) : typeof this.state.formulario.imagens ===
                            "string" ? (
                            <>
                              <div className="jumbotron-clear p-0 m-2 text-center">
                                <a
                                  href={this.state.formulario.imagens}
                                  target="_blank"
                                >
                                  <img
                                    src={this.state.formulario.imagens}
                                    className="rounded-img"
                                    width="100%"
                                  />
                                </a>
                                <button className="btn btn-info my-1" onClick={() => this.deletarImagem(this.state.formulario.imagens)}>
                                  Deletar Imagem
                                </button>
                              </div>
                            </>
                          ) : (
                            this.state.formulario.imagens.map(imagem => {
                              return (
                                <>
                                  <div className="p-0 mt-5 text-center mx-auto">
                                    <a href={imagem} target="_blank">
                                      <img
                                        src={imagem}
                                        className="rounded-img"
                                        width="100%"
                                      />
                                    </a>
                                    <button className="btn btn-info my-1" onClick={() => this.deletarImagem(imagem)}>
                                      Deletar Imagem
                                    </button>
                                  </div>
                                </>
                              );
                            })
                          )}
                        </div>
                        <br />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap">
                      <div>
                        <label
                          for="file-imagens"
                          className="btn btn-info btn-sm text-center mx-auto"
                        >
                          Adicionar Nova Imagem
                        </label>
                        <input
                          name="file"
                          type="file"
                          id="file-imagens"
                          className="input-file"
                          onChange={e => this.selecionarImagem(e)}
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-info btn-sm shadow"
                          id="btn-cadastro"
                        >
                          Salvar Alterações
                        </button>
                      </div>
                    </div>
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

export default AlterarCadastro;
