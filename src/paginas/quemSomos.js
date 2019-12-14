import React, { Component } from "react";
import "./App.css";
import Missao from "../img/missao.png";
import Visao from "../img/visao.png";
import Valores from "../img/valores.png";

class QuemSomos extends Component {
  render() {
    return (
      <div className="container-fluid bg-info">
        {/* <!-- Conteúdo principal da página --> */}
        <div className="container bg-white">
          {/* <!-- Inicio da primeira row --> */}
          <div className="row">
            {/* <!-- Inicio do conteiner quem somos --> */}
            <div className="col-12 mt-4">
              {/* <!-- Inicio do jumbotron superior --> */}
              <div className="jumbotron my-auto rounded">
                <h1 className="green-text text-center">Quem Somos</h1>
                <h2></h2><br />
                <h4 className="text-content text-justify">
                  A plataforma FixHub foi criado no ano de 2019 na cidade de
                  Osasco por Andresa Lima, Renata Cruz e Victor Soares, alunos
                  que orientados pela ONG Recode, foram incumbidos da missão de
                    desenvolver um projeto que gere impacto em sua comunidade.{" "}
                </h4>
                <h4 className="text-content text-justify">Visando o desenvolvimento e economia local, criamos a nossa
                  plataforma de comunicação e serviços, que atualmente conta com
                  mais de X clientes e X empresas parceiras.</h4>
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
                    src={Missao}
                    height="40px"
                    width="40px"
                    alt="icone-missao"
                  />
                  <h4 background-color="bg-white">
                    {" "}
                    <h3><b className="white-text">Missão</b></h3>
                  </h4>
                  <p className="white-text">
                    Dar o poder da tecnologia à trabalhadores autônomos,
                    pequenas empresas, prestadores de serviços e o poder da
                    informação à clientes e consumidores.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Fim o Card de Missão --> */}

            {/* <!-- Card de Visão --> */}
            <div className=" col-md-4 mt-2 mb-3 ix">
              <div className="card h-100 w-100 text-center bg-info">
                <div className="card-body shadow d-flex flex-column">
                  <img
                    src={Visao}
                    height="40px"
                    width="40px"
                    alt="icone-visao"
                  />
                  <h4>
                    {" "}
                    <h3><b className="white-text">Visão</b></h3>
                  </h4>
                  <p className="white-text">
                    {" "}
                    Nos tornar a plataforma número 1 para serviços
                    profissionais.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Fim o Card de visão --> */}

            {/* <!-- Card de valores --> */}
            <div className=" col-md-4 mt-2 mb-3 ix">
              <div className="card h-100 w-100 text-center bg-info">
                <div className="card-body shadow d-flex flex-column">
                  <img
                    src={Valores}
                    height="40px"
                    width="40px"
                    alt="icone-valores"
                  />
                  <h4>
                    {" "}
                    <h3><b className="white-text">Valores</b></h3>
                  </h4>
                  <p className="white-text">
                    Segurança, eficiência e transparência total entre clientes
                    e prestadores.
                  </p>
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
