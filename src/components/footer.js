import React, { Component } from "react";
import { Link } from "react-router-dom";
import isAuthenticated from "../services/userAuthentication";
import Logo from "../img/fixhub_oficial.png";
import facebookIcon from "../img/footerFacebookIcon.png";
import mailIcon from "../img/footerMailIcon.png";
import instagramIcon from "../img/footerInstagramIcon.png";
import githubIcon from "../img/footerGitHubIcon.png";

class Footer extends Component {
  renderOptionsSmallFooter() {
    if (isAuthenticated() === false) {
      return (
        <div className="row mx-2">
          <Link
            to="/entrar"
            className="col-6 mb-4 mt-2 text-white text-left nav-link"
          >
            Entrar
          </Link>
          <Link
            to="/cadastro"
            className="col-6 mb-4 mt-2 text-white text-right nav-link"
          >
            Cadastro
          </Link>
        </div>
      );
    } else if (isAuthenticated() === true) {
      return (
        <div className="row mx-2">
          <Link
            to="/perfil"
            className="col-6 mb-4 mt-2 text-white text-left nav-link"
          >
            Meu Perfil
          </Link>
          <Link
            to="/"
            className="col-6 mb-4 mt-2 text-white text-right nav-link"
          >
            Sair
          </Link>
        </div>
      );
    }
  }
  renderOptionsLargeFooter() {
    if (isAuthenticated() === false) {
      return (
        <div className="col-5 d-flex text-center">
          <Link
            to="/contato"
            className="col-5 mb-4 text-white text-center nav-link"
          >
            Contato
          </Link>
          <Link
            to="/entrar"
            className="col-3 mb-4 text-white text-center nav-link"
          >
            Entrar
          </Link>
          <Link
            to="/cadastro"
            className="col-4 mb-4 text-white text-center nav-link"
          >
            Cadastro
          </Link>
        </div>
      );
    } else if (isAuthenticated() === true) {
      return (
        <div className="col-5 d-flex text-center">
          <Link
            to="/contato"
            className="col-5 mb-4 text-white text-center nav-link"
          >
            Contato
          </Link>
          <Link
            to="/perfil"
            className="col-3 mb-4 text-white text-center nav-link"
          >
            Meu Perfil
          </Link>
          <Link to="/" className="col-4 mb-4 text-white text-center nav-link">
            Sair
          </Link>
        </div>
      );
    }
  }
  getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  render() {
    return (
      <div>
        <footer className="container-fluid d-md-none footer-dark">
          <div className="row mx-2 d-flex justify-content-around">
            <div className="px-4 pt-5 text-center">
              <Link to="/">
                <img src={Logo} height="100px" width="126px" alt="logo" />
              </Link>
              <p className="white-text">
                A solução profissional <br />
                mais próxima ao seu local.
              </p>
            </div>
            <div className="px-4 pt-5">
              <div className="text-center">
                <h6 className="white-text">Encontre-nos nas redes sociais</h6>
                <a
                  href="https://pt-br.facebook.com/fixhubservicos/"
                  className=""
                >
                  <img src={facebookIcon} height="50px" />
                </a>
                <a
                  href="https://www.instagram.com/fixhub_servicos/"
                  className="mx-4"
                >
                  <img src={instagramIcon} height="50px" />
                </a>
                <a
                  href="https://github.com/vsilvasoares1710/Projeto-Recode"
                  className=""
                >
                  <img src={githubIcon} height="50px" />
                </a>
                <h6 className="white-text text-left mt-4">
                  Sugestões, críticas ou observações?
                  <br />
                  contato@fixhub.tk
                </h6>
              </div>
            </div>
          </div>
          <h4 className="green-text text-center pb-2">Mapa do Site</h4>
          <div className="row mx-2">
            <Link to="/" className="col-4 mb-2 text-white text-left nav-link">
              Home
            </Link>
            <Link
              to="/quemSomos"
              className="col-4 mb-2 text-white text-center nav-link"
            >
              Quem Somos
            </Link>
            <Link
              to="/contato"
              className="col-4 mb-2 text-white text-right nav-link"
            >
              Contato
            </Link>
          </div>
          <div className="row mx-2">
            <Link
              to="encontreProfissionais"
              className="col-6 mb-2 mt-2 text-white text-left nav-link"
            >
              Encontre Profissionais
            </Link>
            {isAuthenticated() === false ? (
              <Link
                to="/divulgueSeuTrabalho"
                className="col-6 mb-2 mt-2 text-white text-right nav-link"
              >
                Divulgue seu Trabalho
              </Link>
            ) : (
              <> </>
            )}
          </div>
          {this.renderOptionsSmallFooter()}
          <div className="white-text text-center border-top border-info">
            {`© ${this.getCurrentYear()} - FixHub. Todos os direitos reservados.`}
          </div>
        </footer>

        <footer className="container-fluid d-none d-md-block footer-dark">
          <div className="row mx-2">
            <div className="col ml-2 mt-5 pb-0 mb-0">
              <Link to="/">
                <img src={Logo} height="100px" width="126px" alt="logo" />
              </Link>
              <p className="white-text pt-2">
                A solução profissional <br />
                mais próxima ao seu local.
              </p>
            </div>
            <div className="text-right mr-4 mt-5">
              <div className="text-center">
                <h6 className="white-text">Encontre-nos nas redes sociais</h6>
                <a
                  href="https://pt-br.facebook.com/fixhubservicos/"
                  className=""
                >
                  <img src={facebookIcon} height="50px" />
                </a>
                <a
                  href="https://www.instagram.com/fixhub_servicos/"
                  className="mx-4"
                >
                  <img src={instagramIcon} height="50px" />
                </a>
                <a
                  href="https://github.com/vsilvasoares1710/Projeto-Recode"
                  className=""
                >
                  <img src={githubIcon} height="50px" />
                </a>
                <h6 className="white-text text-left mt-4">
                  Sugestões, críticas ou observações?
                  <br />
                  contato@fixhub.tk
                </h6>
              </div>
            </div>
          </div>
          <h4 className="green-text text-center pb-2">Mapa do Site</h4>
          <div className="row d-flex">
            <div className="col-7 d-flex">
              <Link
                to="/"
                className="col-2 mb-4 text-white text-center nav-link"
              >
                Home
              </Link>
              <Link
                to="/encontreProfissionais"
                className="col-4 mb-4 text-white text-center nav-link"
              >
                Encontre Profissionais
              </Link>
              {isAuthenticated() === false ? (
                <Link
                  to="/divulgueSeuTrabalho"
                  className="col-4 mb-4 text-white text-center nav-link"
                >
                  Divulgue seu Trabalho
                </Link>
              ) : (
                <> </>
              )}
              <Link
                to="/quemSomos"
                className="col-3 mb-4 text-white text-center nav-link"
              >
                Quem Somos
              </Link>
            </div>
            {this.renderOptionsLargeFooter()}
          </div>
          <div className="white-text text-center border-top border-info">
            {`© ${this.getCurrentYear()} - FixHub. Todos os direitos reservados.`}
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
