import React, { Component } from "react";
// Images
import Missao from "../img/missao.png";
import Visao from "../img/visao.png";
import Valores from "../img/valores.png";
import Logo from "../img/fixhub_oficial.png";

class QuemSomos extends Component {
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
                <h4 className="text-content text-justify">
                  O FixHub é uma plataforma criada no ano de 2019 na cidade de
                  Osasco - SP por Andresa Lima, Elizabete Silva, Giulianna Oliveira,
                  Gustavo Baruc, Renata Cruz e Victor Soares,
                  operando inicialmente na cidade em que foi fundada. No período
                  em questão, os membros fundadores participavam do RecodePro,
                  um projeto social realizada pela ONG Recode, que tem como
                  objetivo a promoção do empoderamento digital.
                </h4>
                <br />
                <h4 className="text-content text-justify">
                  Durante a realização do projeto, os três membros, que até
                  então eram apenas alunos, foram incumbidos da missão de
                  desenvolver um projeto de impacto social buscando o
                  crescimento da economia de comunidades locais.
                </h4>
                <br />
                <h4 className="text-content text-justify">
                  A partir desta missão, surgiu a ideia por trás da plataforma,
                  a criação de um espaço gratuito para a disseminação de
                  informações e divulgação de profissionais, free-lancers e
                  pequenas empresas.
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
                    height="40px"
                    width="40px"
                    alt="icone-missao"
                  />
                  <h3>
                    <b className="text-content white-text">Missão</b>
                  </h3>
                  <br />
                  <h5 className="text-content text-justify white-text">
                    Dar o poder da tecnologia à trabalhadores autônomos,
                    pequenas empresas, prestadores de serviços e o poder da
                    informação à clientes e consumidores.
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
                    height="40px"
                    width="40px"
                    alt="icone-visao"
                  />
                  <h3>
                    <b className="text-content white-text">Visão</b>
                  </h3>
                  <br />
                  <h5 className="text-content text-justify white-text">
                    Estabecer o FixHub, como a maior, mais acessível e
                    tranparente plataforma para divulgação de profissionais e
                    serviços do Brasil.
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
                    height="40px"
                    width="40px"
                    alt="icone-valores"
                  />
                  <h3>
                    <b className="text-content white-text">Valores</b>
                  </h3>
                  <br />
                  <h5 className="text-content text-justify white-text">
                    Segurança, eficiência e transparência total entre clientes e
                    profissionais.
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
