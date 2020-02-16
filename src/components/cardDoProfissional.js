import React, { Component } from "react";
import { Link } from "react-router-dom";
import Btn from "./button.js";
import filterValidation from "../services/filterValidation.js";
import defaultUser from "../img/defaultUser.png"

class RenderProfissionais extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtrosMarcados: []
    };
  }

  validateCheckbox = inputId => {
    const filtrosMarcados = filterValidation(
      inputId,
      this.state.filtrosMarcados
    );

    localStorage.setItem(
      "filtrosMarcadosFixHub",
      JSON.stringify(filtrosMarcados)
    );

    this.setState({
      filtrosMarcados: JSON.parse(localStorage.getItem("filtrosMarcadosFixHub"))
    });
  };
  render() {
    const promovido = () => {
      let jsx = <></>
      if (this.props.anuncioPago === false) {
        jsx = <h3 className="text-right">Anúncio Promovido</h3>;
      }
      return jsx
    };
    return (
      <div className="jumbotron-clear">
        <div className="row">
          <div className="col-5 col-sm-5 col-md-3 col-lg-2 mx-auto mb-2 mt-0">
            <Link to={`/profissional/${this.props.idProfissional}`}>
              <img
                src={!this.props.icone ? defaultUser : this.props.icone}
                onError={(event) => {
                  event.target.src = defaultUser
                }}
                width="100%"
                alt={`Imagem de ${this.props.nome}`}
                className="rounded-circle"
              />
            </Link>

            <Btn
              text="Ver Perfil"
              className="btn btn-info shadow py-1 px-2 m-1 mt-2 mx-auto"
              lead={`/profissional/${this.props.idProfissional}`}
            />
          </div>
          <div className="col-12 col-md-9 col-lg-10">
            <div className="vertical-divider" />
            <Link
              to={`/profissional/${this.props.idProfissional}`}
              className="text-link"
            >
              <h4 className="text-left">{this.props.nome}</h4>
            </Link>
            <div className="card-divider-long"></div>
            <p className="text-left five-line-truncate">{this.props.texto}</p>
            <div className="d-flex flex-wrap">
              {!this.props.tags ? <> </> : this.props.tags.map(tag => {
                const tagName = tag.charAt(0).toUpperCase() + tag.slice(1);
                return (
                  <div
                    className="b-info rounded green-text py-1 px-2 m-1 unselectable clickable"
                    tabIndex="-1"
                    onClick={() => {
                      this.validateCheckbox(tagName);
                      this.props.tagOnClick();
                    }}
                  >
                    <strong>{tagName}</strong>
                  </div>
                );
              })}
            </div>
            {/* {this.props.anuncioPago === true ? <h6 className="text-right green-text m-0 p-0">Anúncio Promovido</h6> : <> </>} */}
          </div>
        </div>
      </div>
    );
  }
}

export default RenderProfissionais;

/* Essa classe subistitui um método antigo usado dentro da classe da página EncontreProfissionais
  caso haja algum problema com a classe acima, deixar de importa-la na pagina encontreProfissionais, e subititui-la na pagina pelo codigo abaixo

  renderProfissionais() {
    return this.state.profissionaisEncontrados.map(value => {
      return (
        <div className="jumbotron-clear">
          <div className="row">
            <div className="col-5 col-sm-5 col-md-3 col-lg-2 mx-auto mb-2 mt-0">
              <Link to={`/profissional/${value.id}`}>
                <img
                  src={value.icone}
                  width="100%"
                  alt={`Imagem de ${value.nome}`}
                  className="rounded-circle"
                />
              </Link>

              <Btn
                text="Perfil Completo"
                className="btn btn-info shadow py-1 px-2 m-1 mt-2 mx-auto"
                lead={`/profissional/${value.id}`}
              />
            </div>
            <div className="col-12 col-md-9 col-lg-10">
              <div className="vertical-divider" />
              <Link to={`/profissional/${value.id}`} className="text-link">
                <h4 className="text-left">{value.nome}</h4>
              </Link>

              <div className="card-divider-long"></div>
              <p className="text-left five-line-truncate">
                {value.anuncio.texto}
              </p>
              <div className="d-flex flex-wrap">
                {value.tags.map(tag => {
                  const tagName = tag.charAt(0).toUpperCase() + tag.slice(1);
                  return (
                    <Btn
                      text={tagName}
                      className="btn btn-info shadow py-1 px-2 m-1"
                      onClick={() => this.validateCheckbox(tag)}
                      tabIndex="-1"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
*/
