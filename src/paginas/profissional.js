import React, { Component } from "react";
import axios from "axios";
// Images
import LogoFundoClaro from "../img/logFundoClaro.png";

class Profissional extends Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      idProfissional: this.props.idProfissional
    };
  }

  getDadosDoProfissional() {
    try {
      axios.get(`/profissional/${this.props.match.params.id}`).then(response => {
        // this.setState({ profissionaisEncontrados: [] });
        // this.setState({
        //   profissionaisEncontrados: response.data.profissionais
        // });
        // localStorage.setItem(
        //   "profissionaisEncontradosFixHub",
        //   JSON.stringify(this.state.profissionaisEncontrados)
        // );
        console.log(response.data);
      });
    } catch (error) {
      console.error(error);
      alert("Falha na busca por profissionais");
    }
  }

  render() {
    return (
      <div className="container-fluid bg-info">
        {/* <!-- Conteúdo principal da página --> */}
        <div className="container bg-white stretch">
          {/* <!-- Inicio da primeira row --> */}
          <div className="row">
            {/* <!-- Inicio do conteiner quem somos --> */}
            <div className="col-12 mt-4">
              <div className="row text-center mx-auto mb-2">
                <img
                  className="mx-auto my-1 align-items-center"
                  src={LogoFundoClaro}
                  height="90px"
                  width="335px"
                  alt="logo"
                />
              </div>
              {/* <!-- Inicio do jumbotron superior --> */}
              <div className="jumbotron-clear my-auto text-center">
                <h1 className="green-text text-center">
                  {JSON.stringify(this.props.match.params.id)}
                  <br/>
                  {this.getDadosDoProfissional()}
                </h1>
                <br />
                <h4 className="text-content text-justify">
                  Texto
                </h4>
                <br />
                <h4 className="text-content text-justify">
                  Texto
                </h4>
                <br />
                <h4 className="text-content text-justify">
                  Texto
                </h4>
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

export default Profissional;
