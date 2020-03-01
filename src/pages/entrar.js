import React, { Component } from "react";
import login from "../services/login";
// Images
import loginImg from "../img/login.svg";

class Entrar extends Component {
  constructor() {
    super();
    this.state = {
      errosDeLogin: undefined,
      formulario: {}
    };
    this.handleChange = this.handleChange.bind(this);
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
  }

  async entrar() {
    const response = await login(this.state.formulario);
    if (response.status === 200) {
      if(response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      if(response.data.id) {
        localStorage.setItem("id", JSON.stringify(response.data.id));
      }
      window.location.reload();
    } else if (response.status === 400) {
      this.setState({
        errosDeLogin:
          "Por favor informe um email e uma senha para realizar o login"
      });
    } else if (response.status === 404) {
      this.setState({ errosDeLogin: "Email e/ou senha estão incorretos" });
    } else {
      this.setState({ errosDeLogin: "Falha no login" });
    }
    console.log(response);
  }
  renderErrosDeLogin() {
    if (this.state.errosDeLogin === undefined) {
      return <></>;
    } else {
      return (
        <div className="jumbotron-clear m-2 p-0">
          <div className="red-text"><b>{this.state.errosDeLogin}</b></div>
        </div>
      );
    }
  }
  componentDidMount(){
    document.getElementById("top-of-root").scrollIntoView(true)
  }

  render() {
    return (
      <div className="container-fluid bg-white extend">
        {/* <!-- Conteúdo principal da página --> */}
        <div className="container bg-white my-auto">
          <h1 className="green-text text-center pt-4">Entrar</h1>
          <div className="row mx-1">
            <div className="d-none d-lg-block col-lg-6">
              <img
                src={loginImg}
                width="90%"
                alt="Fechadura simbolizando a autenticação de login"
              />
            </div>
            <div className="jumbotron-green text-center col-12 col-md-11 col-lg-6 mb-2 mt-2">
              <form
                onSubmit={event => {
                  event.preventDefault();
                  this.entrar();
                }}
              >
                {this.renderErrosDeLogin()}
                <div className="form-group pb-3">
                  <label className="d-flex justify-content-start text-white">
                    <h5>Email</h5>
                  </label>
                  <input
                    type="email"
                    className="form-control type-field col mr-0"
                    onChange={this.handleChange}
                    id="email"
                    placeholder="email@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="d-flex justify-content-start text-white">
                    <h5>Senha</h5>
                  </label>
                  <input
                    type="password"
                    className="form-control type-field col mr-0"
                    onChange={this.handleChange}
                    id="senha"
                    placeholder="Senha"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-white shadow"
                  id="btn-login"
                >
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- Conteúdo principal da página --> */}
      </div>
    );
  }
}

export default Entrar;
