import React, { Component } from "react";
import { Link } from "react-router-dom";
// Components
import Btn from "../components/button.js";
// Images
import carRepair from "../img/carRepair.jpg";
import peopleShakingHands from "../img/peopleShakingHads.jpg";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid bg-info">
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
                <h4 className="text-content text-justify">
                  Pintou aquele problema? Fica tranquilo, o FixHub te ajuda a
                  encontrar a solução profissional mais próxima de você.
                </h4>
                <br />
                <h4 className="text-content text-justify">
                  De mecânicos a manicures ou de pintores a DJ's, cobrimos os
                  mais diversos ramos, clique abaixo e descubra.
                </h4>
                <br />
                <Btn
                  text="Encontre Profissionais"
                  lead="/encontreProfissionais"
                />
                <Btn text="Cadastre-se" lead="/cadastro" />
              </div>
            </div>
            {/* <!-- Fim da text-box com conteúdo à direita/topo da primeira imagem --> */}
          </div>
          {/* <!-- Fim da primeira row --> */}
          <br />
          {/* <!-- Segunda Row --> */}
          <div className="rol bg-info card-box">
            {/* <!-- Box dos cards--> */}
            <div className="row d-flex justify-content-center mx-3">
              {/* <!-- Card de Reparos --> */}
              <div className="col-md-6 col-lg-4 col-xl-3 my-4 d-none d-md-block">
                <div className="card h-100 w-100">
                  <div className="card-body shadow d-flex flex-column">
                    <h4 className="card-title pb-1">Reparos</h4>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Eletricistas
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Encanadores
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Gesseiros
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Marceneiros
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Mecânicos
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Pedreiros
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Pintores
                    </Link>
                    <Btn
                      text="Mais Categorias..."
                      lead="/encontreProfissionais"
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
                    <h4 className="card-title pb-1">Estética</h4>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Barbeiros
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Cabelereiros
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Depilação
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Manicures
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Maquiadoras
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Pedicures
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Sobrancelhas
                    </Link>
                    <Btn
                      text="Mais Categorias..."
                      lead="/encontreProfissionais"
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
                    <h4 className="card-title pb-1">Professores</h4>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Aulas de Reforço
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Dança
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Espanhol
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Francês
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Inglês
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Música
                    </Link>
                    <Link
                      to="/encontreProfissionais"
                      className="card-text card-content"
                    >
                      Pré-Vestibular
                    </Link>
                    <Btn
                      text="Mais Categorias..."
                      lead="/encontreProfissionais"
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
                    <div className="card-text last-card-content text-justify pb-3">
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
                <h4 className="text-content text-justify">
                  Prestador de serviços, profissional liberal, trabalhador
                  autônomo, micro-empreendedor, free-lancer...
                </h4>
                <br />
                <h4 className="text-content text-justify">
                  São tantos os nomes, mas seja como for, aqui no FixHub, você
                  encontra um espaço para divulgação do seu trabalho,
                  cadastre-se gratuitamente e comece a angariar mais clientes.
                </h4>
                <br />
                <Btn text="Divulgue Seu Trabalho" lead="/divulgueSeuTrabalho" />
                <Btn text="Cadastre-se" lead="/cadastro" />
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
        </div>
        {/* <!-- Conteúdo principal da página --> */}
      </div>
    );
  }
}

export default Home;
