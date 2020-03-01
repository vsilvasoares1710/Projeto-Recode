import React, { Component } from "react";
import { Link } from "react-router-dom";
import isAuthenticated from "../services/userAuthentication";
// Components
import Btn from "../components/button.js";
// Images
import carRepair from "../img/carRepair.jpg";
import peopleShakingHands from "../img/acordo.PNG";
import curriculoIcon from "../img/curriculo.svg";
import divulgaIcon from "../img/influenciador.svg";
import redeIcon from "../img/networking.svg";
import comunidadeLocal from "../img/trabalho-em-equipe.svg";

class Home extends Component {
  componentDidMount() {
    document.getElementById("top-of-root").scrollIntoView(true);
  }
  render() {
    return (
      <div className="container-fluid bg-white">
        {/* <!-- Conteúdo principal da página --> */}
        <div className="container bg-white">
          {/* <!-- Primeira row --> */}
          <div className="row">
            {/* <!-- Imagem à esquerda/topo --> */}
            <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5 mt-3 mx-auto">
              <img
                src={carRepair}
                width="98%"
                className="my-auto"
                alt="Mecânico consertando veículo"
              />
            </div>
            {/* <!-- Fim da Imagem à esquerda/topo --> */}

            {/* <!-- Text-box com conteúdo à direita/topo da primeira imagem --> */}
            <div className="col-sm-12 col-lg-6 col-xl-7 mt-4">
              <div className="jumbotron-clear my-auto text-center">
                <h1 className="green-text">Profissionais diversos;</h1>
                <h1 className="green-text">Soluções simples...</h1>
                <br />
                <h4 className="text-content text-left">
                  Pintou aquele problema? Fica tranquilo, o FixHub te ajuda a
                  encontrar a solução profissional mais próxima de você.
                </h4>
                <br />
                <h4 className="text-content text-left">
                  De mecânicos a manicures, de pintores a DJ's, cobrimos os mais
                  diversos ramos, clique aqui e descubra.
                </h4>
                <br />
                <Btn
                  text="Encontre Profissionais"
                  lead="/encontreProfissionais"
                />
              </div>
            </div>
            {/* <!-- Fim da text-box com conteúdo à direita/topo da primeira imagem --> */}
          </div>
          {/* <!-- Fim da primeira row --> */}

          {/*Inicio jornada de usuario*/}
          <div className="row text-center my-3">
            <div className="col-md-4 my-4">
              <img
                src={curriculoIcon}
                width="90px"
                alt="currículo do profissional"
              />
              <h3>
                <b>1º passo</b>
              </h3>
              <h4>Cadastre-se gratuitamente em nossa plataforma.</h4>
            </div>

            <div className="col-md-4 my-4">
              <img
                src={divulgaIcon}
                width="90px"
                alt="pessoa que comunica e divulga"
              />
              <h3>
                <b>2º passo</b>
              </h3>
              <h4>Divulgue o seu trabalho por meio de um anúncio.</h4>
            </div>

            <div className="col-md-4 my-4">
              <img
                src={redeIcon}
                width="90px"
                alt="pessoas que se encontram numa rede"
              />
              <h3>
                <b>3º passo</b>
              </h3>
              <h4>Seja encontrado por clientes próximos a você.</h4>
            </div>
          </div>

          {/* <!-- Segunda Row --> */}
          <div className="rol bg-info card-box">
            {/* <!-- Box dos cards--> */}
            <div className="row d-flex justify-content-center mx-3">
              {/* <!-- Card de Reparos --> */}
              <div className="col-md-6 col-lg-4 col-xl-3 my-4 d-none d-md-block">
                <div className="card h-100 w-100">
                  <div
                    className="card-body shadow d-flex flex-column"
                    tabIndex="0"
                  >
                    <h4 className="card-title pb-1" tabIndex="-1">
                      Reparos em Geral
                    </h4>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="eletricista"
                      tabIndex="-1"
                    >
                      Eletricistas
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="encanador"
                      tabIndex="-1"
                    >
                      Encanadores
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="gesseiro"
                      tabIndex="-1"
                    >
                      Gesseiros
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="marceneiro"
                      tabIndex="-1"
                    >
                      Marceneiros
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="mecânico"
                      tabIndex="-1"
                    >
                      Mecânicos
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="pedreiro"
                      tabIndex="-1"
                    >
                      Pedreiros
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="pintor"
                      tabIndex="-1"
                    >
                      Pintores
                    </Link>
                    <Btn
                      text="Mais Categorias..."
                      lead="/encontreProfissionais"
                      tabIndex="-1"
                      className="btn btn-info shadow mt-3 mx-0"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Fim o Card de Reparos --> */}

              {/* <!-- Card de Estética --> */}
              <div className="col-lg-4 my-4 col-xl-3 d-none d-lg-block">
                <div className="card h-100 w-100">
                  <div className="card-body shadow d-flex flex-column">
                    <h4 className="card-title pb-1" tabIndex="-1">
                      Estética
                    </h4>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="barbeiro"
                      tabIndex="-1"
                    >
                      Barbeiros
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="cabelereiro"
                      tabIndex="-1"
                    >
                      Cabelereiros
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="depilação"
                      tabIndex="-1"
                    >
                      Depilação
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="manicure"
                      tabIndex="-1"
                    >
                      Manicures
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="maquiagem"
                      tabIndex="-1"
                    >
                      Maquiadoras
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="pedicure"
                      tabIndex="-1"
                    >
                      Pedicures
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="sobrancelha"
                      tabIndex="-1"
                    >
                      Sobrancelhas
                    </Link>
                    <Btn
                      text="Mais Categorias..."
                      lead="/encontreProfissionais"
                      tabIndex="-1"
                      className="btn btn-info shadow mt-3 mx-0"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Fim do Card de Estética --> */}

              {/* <!-- Card de Professores --> */}
              <div className="col-xl-3 my-4 d-none d-xl-block">
                <div className="card h-100 w-100">
                  <div className="card-body shadow d-flex flex-column">
                    <h4 className="card-title pb-1" tabIndex="-1">
                      Aulas
                    </h4>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="reforço escolar"
                      tabIndex="-1"
                    >
                      Reforço Escolar
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="dança"
                      tabIndex="-1"
                    >
                      Dança
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="espanhol"
                      tabIndex="-1"
                    >
                      Espanhol
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="francês"
                      tabIndex="-1"
                    >
                      Francês
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="inglês"
                      tabIndex="-1"
                    >
                      Inglês
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="música"
                      tabIndex="-1"
                    >
                      Música
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                      id="pré-vestibular"
                      tabIndex="-1"
                    >
                      Pré-Vestibular
                    </Link>
                    <Btn
                      text="Mais Categorias..."
                      lead="/encontreProfissionais"
                      tabIndex="-1"
                      className="btn btn-info shadow mt-3 mx-0"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Fim do Card de Professores --> */}

              {/* <!-- Card de Outros Serviços --> */}
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-4 ix">
                <div className="card h-100 w-100">
                  <div className="card-body shadow d-flex flex-column">
                    <h4 className="card-title pb-1">Várias Categorias</h4>
                    <div className="card-text last-card-content text-left pb-3">
                      Encontre os mais diversos serviços e soluções
                      profissionais da sua região, buscando por todas as
                      categorias, no botão abaixo.
                    </div>
                    <Btn
                      text="Mais Categorias..."
                      lead="/encontreProfissionais"
                      className="btn btn-info shadow mt-auto mx-0"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Fim do Card de Outros Serviços --> */}
            </div>
            {/* <!-- Fim do box dos cards--> */}
          </div>
          {/* <!-- Fim da segunda row --> */}
          <br />
          {/* <!-- Terceira row --> */}
          <div className="row">
            {/* <!-- Text-box com conteúdo à esquerda/abaixo da primeira imagem --> */}
            <div className="col-sm-12 col-lg-6 col-xl-7 mt-0">
              <div className="jumbotron-clear my-auto text-center">
                <h1 className="green-text">Clientes à vista</h1>
                <br />
                <h4 className="text-content text-left">
                  Prestador de serviços, profissional liberal, trabalhador
                  autônomo, micro-empreendedor, free-lancer...
                </h4>
                <br />
                <h4 className="text-content text-left">
                  São tantos os nomes, mas seja como for, aqui no FixHub, você
                  encontra um espaço para divulgação do seu trabalho,
                  cadastre-se gratuitamente e comece a angariar mais clientes.
                </h4>
                <br />
                {isAuthenticated() ? (
                  <> </>
                ) : (
                  <>
                    <Btn
                      text="Divulgue Seu Trabalho"
                      lead="/divulgueSeuTrabalho"
                    />
                    <Btn text="Cadastre-se" lead="/cadastro" />
                  </>
                )}
              </div>
            </div>
            {/* <!-- Fim da text-box com conteúdo à esquerda/abaixo da primeira imagem --> */}

            {/* <!-- Imagem à direita/baixo --> */}
            <div className="col-sm-12 col-md-10 col-lg-6 col-xl-5 my-auto mx-auto d-none d-lg-block">
              <img
                src={peopleShakingHands}
                width="100%"
                alt="Pessoas apertando as mãos"
              />
            </div>
            {/* <!-- Fim da Imagem à direita/baixo --> */}
          </div>
          <br />
          {/* <!-- Fim da terceira row --> */}

          {/*
         <div className="row">
            <2>Titulo reportagem</2>/h
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Titulo reportagem</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="card-footer-gray">
                <small className="green-text text-center"><h5>Abrir Reportagem</h5></small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Titulo reportagem</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="card-footer-gray">
                <small className="green-text text-center"><h5>Abrir Reportagem</h5></small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Titulo reportagem</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="card-footer-gray">
                <small className="green-text text-center"><h5>Abrir Reportagem</h5></small>
              </div>
            </div>
          </div>

          </div>
          */}
        </div>
        {/* <!-- Conteúdo principal da página --> */}
      </div>
    );
  }
}

export default Home;
