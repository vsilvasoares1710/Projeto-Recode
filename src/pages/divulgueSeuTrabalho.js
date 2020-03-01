import React, { Component } from "react";
// Components
import Btn from "../components/button.js";
// Images
import clientes from "../img/clientes.jpg";
import clientes2 from "../img/clientes2.png";
import womanJumping from "../img/womanJumping.jpg";
import Divulgue from "../img/divulgar.jpg";

class DivulgueSeuTrabalho extends Component {
  componentDidMount() {
    document.getElementById("top-of-root").scrollIntoView(true);
  }
  render() {
    return (
      <div className="container-fluid bg-white">
        {/* <!-- Conteúdo principal da página --> */}
        <div className="container bg-white">
          {/* <!-- Primeira row --> */}
          <div className="row mb-4">
            {/* <!-- Text-box com conteúdo à direita/topo da primeira imagem --> */}
            <div className="col-sm-12 mt-4">
              <div className="jumbotron-clear my-auto text-center ">
                <h1 className="green-text">Divulgue seu Trabalho</h1>
                <br />
                <h4 className="text-content text-justify">
                  O FixHub é a plataforma perfeita para a divulgação do seu
                  trabalho, cadastre-se agora mesmo gratuitamente e comece a
                  vender cada vez mais.
                </h4>
                <br />
                <Btn text="Cadastre-se" lead="/cadastro" />
              </div>
            </div>
            {/* <!-- Fim da text-box com conteúdo à direita/topo da primeira imagem -*/}
          </div>
          {/* <!-- Fim da primeira row -->

                <!-- Segunda row --> */}
          <div className="row">
            {/* <!-- Text-box com conteúdo à esquerda/abaixo da primeira imagem --> */}
            <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5 my-auto mx-auto">
              <img
                src={Divulgue}
                width="111%"
                alt="pessoas que conversam e se encontram com engrenagens e ferramentas"
              />
            </div>
            {/* <!-- Fim da text-box com conteúdo à esquerda/abaixo da primeira imagem --> */}

            <div className="col-sm-12 col-lg-6 col-xl-7 mt-2 text-center">
              <div className="jumbotron-green my-auto">
                <h1 className="white-text">
                  Encontrar, ser encontrado, negociar e vender...
                </h1>
                <br />
                <h4 className="text-content text-justify white-text">
                  Serviço bem feito merece visibilidade, faça seu negócio
                  decolar conosco.
                </h4>
                <br />
                <h4 className="text-content text-justify white-text">
                  Seja visualizado e encontrado por milhares de clientes,
                  cadastre-se e tenha acesso a esses e outros benefícios agora
                  mesmo..
                </h4>
                <br />
              </div>
            </div>
            {/* <!-- Imagem à direita/baixo -->
                    <!-- Fim da Imagem à direita/baixo --> */}
          </div>
          <br />
          {/* <!-- Fim da segunda row --> */}
        </div>
        {/* <!-- Conteúdo principal da página --> */}
      </div>
    );
  }
}

export default DivulgueSeuTrabalho;
