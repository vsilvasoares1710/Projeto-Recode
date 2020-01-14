import React, { Component } from "react";
import axios from "axios";
// Images
import LogoFundoClaro from "../img/logFundoClaro.png";

class Profissional extends Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      dadosProfissional: "Loading"
    };
    // this.getDadosDoProfissional = this.getDadosDoProfissional.bind(this)
  }
  getDadosDoProfissional() {
    try {
      axios
        .post(`/profissional/${this.props.match.params.id}`, { token: false })
        .then(response => {
          console.log(response.data);
          this.setState({ dadosProfissional: response.data });
        });
    } catch (error) {
      console.error(error);
      this.setState({ dadosProfissional: null });
    }
  }

  componentDidMount() {
    this.getDadosDoProfissional();
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
  render() {
    if (this.state.dadosProfissional === "Loading") {
      return (
        <div className="container-fluid bg-white">
          <div className="container bg-white stretch">
            <div className="col">
              <h1 className="green-text text-enter mx-auto">Carregando...</h1>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid bg-white">
          {/* <!-- Conteúdo principal da página --> */}
          <div className="container bg-white">
            {/* <!-- Inicio da primeira row --> */}
            <div className="row">
              {/* <!-- Inicio do conteiner quem somos --> */}
              <div className="col-12 mt-4">
                {/* <!-- Inicio do jumbotron superior --> */}
                <div className="jumbotron-clear text-center my-4">
                  <img
                    src={this.state.dadosProfissional.icone}
                    className="rounded-circle col-8 col-sm-7 col-md-5 col-lg-4 col-xl-3 text-left ml-4"
                  />
                  <h3 className="text-content text-justify">
                    {this.state.dadosProfissional.nome}
                  </h3>
                  <div className="card-divider-long"></div>
                  <div className="d-flex flex-wrap">{this.renderTags()}</div>
                  <h4 className="text-content text-justify">
                    {JSON.stringify(this.state.dadosProfissional.anuncio.texto)}
                  </h4>
                  <h4 className="text-content text-justify">
                    {/* {JSON.stringify(this.state.dadosProfissional)} */}
                  </h4>
                  <div className="row">
                  {this.state.dadosProfissional.anuncio.imagens.map(value => {
                    
                    return (
                      <div className="col-6 col-md-3 col-xl-3">
                        <img src={value} width="100%" className="rounded m-1" />
                      </div>
                    )
                  })}
                  </div>

                </div>
                {/* <!-- Fim do jumbotron superior --> */}
              </div>
              {/* <!-- Fim do Container a página quem somos --> */}
            </div>
            {/* <!-- Fim da primeira row --> */}

            {/* <!-- Fim do box dos cards--> */}
          </div>
          {/* <!-- Fim do background verde água --> */}
        </div>
      );
    }
  }
}

export default Profissional;
