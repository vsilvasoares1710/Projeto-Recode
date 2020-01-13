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

  render() {
    if (this.state.dadosProfissional === "Loading") {
      return (
        <div className="container-fluid bg-info">
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
                <div className="jumbotron-clear my-auto text-center">
                  <h1 className="green-text text-center">
                    {JSON.stringify(this.props.match.params.id)}
                  </h1>
                  <img
                    src={this.state.dadosProfissional.icone}
                    className="rounded-circle col-3 align-self-start"
                  />
                  <br />
                  <h4 className="text-content text-justify">Texto</h4>
                  <br />
                  <h4 className="text-content text-justify">Texto</h4>
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
