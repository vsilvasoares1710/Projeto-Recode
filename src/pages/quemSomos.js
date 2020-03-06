import React, { Component } from "react";
// Images
import Missao from "../img/idea.svg";
import Visao from "../img/goal.svg";
import Valores from "../img/heart.svg";
import Logo from "../img/fixhub_oficial.png";

class QuemSomos extends Component {
  componentDidMount() {
    document.getElementById("top-of-root").scrollIntoView(true);
  }
  render() {
    return (
      <div className="container-fluid bg-white">
        {/* <!-- Conteúdo principal da página --> */}
        <div className="container bg-white">
          {/* <!-- Inicio da primeira row --> */}
          <div className="row">
            {/* <!-- Inicio do conteiner quem somos --> */}
            <div className="col-12 mt-4">
              <div className="row text-center mx-auto mb-2">
                <img
                  className="mx-auto my-1 align-items-center"
                  src={Logo}
                  height="300px"
                  width="325px"
                  alt="logo"
                />
              </div>
              {/* <!-- Inicio do jumbotron superior --> */}
              <div className="jumbotron-clear my-auto text-center">
                <h1 className="green-text text-center">Quem Somos</h1>
                <br />
                <h4 className="text-content text-left">
                  O FixHub é uma plataforma fundada no ano de 2020 na cidade de
                  Osasco/SP por estudantes de tecnologia. No período em questão,
                  nossa equipe encontrou um problema muito presente em
                  comunidades locais: A falta de desenvolvimento econômico
                  interno.
                </h4>
                <br />
                <h4 className="text-content text-left">
                  Tendo em vista este problema, foi desenvolvido o conceito pro
                  trás da plataforma: Um espaço gratuito, simples e objetivo que
                  tem como propósito concectar profissionais a possíveis
                  clientes dentro de suas comunidades locais.
                </h4>
              </div>
              {/* <!-- Fim do jumbotron superior --> */}
            </div>
            {/* <!-- Fim do Container a página quem somos --> */}
          </div>
          {/* <!-- Fim da primeira row --> */}

          {/* <!-- Box dos cards--> */}
          <div className="row mt-2">
            {/* <!-- Card de Missão --> */}
            <div className="col-md-4 mt-2 mb-3 ix">
              <div className="card h-100 w-100 text-center bg-info">
                <div className="card-body shadow d-flex flex-column">
                  <img
                    className="mx-auto my-1"
                    src={Missao}
                    height="60px"
                    width="60px"
                    alt="icone-missao"
                  />
                  <h3>
                    <b className="text-content white-text">O que fazemos</b>
                  </h3>
                  <br />
                  <h5 className="text-content text-left white-text">
                    Proporcionamos o poder da tecnologia à trabalhadores
                    autônomos, pequenas empresas, prestadores de serviços e o
                    poder da informação à clientes e consumidores.
                  </h5>
                </div>
              </div>
            </div>
            {/* <!-- Fim o Card de Missão --> */}

            {/* <!-- Card de Visão --> */}
            <div className=" col-md-4 mt-2 mb-3 ix">
              <div className="card h-100 w-100 text-center bg-info">
                <div className="card-body shadow d-flex flex-column">
                  <img
                    className="mx-auto my-1"
                    src={Visao}
                    height="60px"
                    width="60px"
                    alt="icone-visao"
                  />
                  <h3>
                    <b className="text-content white-text">O que queremos</b>
                  </h3>
                  <br />
                  <h5 className="text-content text-left white-text">
                    Estabecer o FixHub, como a maior, mais acessível e
                    transparente plataforma para divulgação de profissionais e
                    serviços em comunidades locais.
                  </h5>
                </div>
              </div>
            </div>
            {/* <!-- Fim o Card de visão --> */}

            {/* <!-- Card de valores --> */}
            <div className=" col-md-4 mt-2 mb-3 ix">
              <div className="card h-100 w-100 text-center bg-info">
                <div className="card-body shadow d-flex flex-column">
                  <img
                    className="mx-auto my-1"
                    src={Valores}
                    height="60px"
                    width="60px"
                    alt="icone-valores"
                  />
                  <h3>
                    <b className="text-content white-text">
                      No que acreditamos
                    </b>
                  </h3>
                  <br />
                  <h5 className="text-content text-left white-text">
                    Simplicidade, segurança, eficiência e transparência total
                    entre clientes e profissionais.
                  </h5>
                </div>
              </div>
            </div>
            {/* <!-- Fim o Card de valores --> */}
          </div>
          {/* <!-- Fim do box dos cards--> */}
        </div>
        {/* <!-- Fim do background verde água --> */}
      </div>
    );
  }
}

export default QuemSomos;
