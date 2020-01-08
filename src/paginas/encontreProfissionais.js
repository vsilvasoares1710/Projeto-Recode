import React, { Component } from "react";
import axios from "axios";
// Components
import Btn from "../components/button.js";
// Images
import workers from "../img/workers.jpg";

class EncontreProfissionais extends Component {
  constructor() {
    super();
    this.state = {
      profissionaisEncontrados: [],
      filtrosMarcados: []
    };
    this.getProfissionais = this.getProfissionais.bind(this);
    this.limparFiltros = this.limparFiltros.bind(this);
  }

  getProfissionais() {
    // console.log(this.state);
    try {
      axios.get("/pesquisaPrestadores").then(response => {
        this.setState({ profissionaisEncontrados: [] });
        this.setState({ profissionaisEncontrados: response.data });
        localStorage.setItem(
          "profissionaisEncontradosFixHub",
          JSON.stringify(this.state.profissionaisEncontrados)
        );
        // console.log(response.data);
        // console.log(
        //   "ProfissionaisEncontrados: ",
        //   this.state.profissionaisEncontrados
        // );
      });
    } catch (error) {
      // console.error(error);
      alert("Falha na busca por profissionais");
    }
  }

  validateCheckbox = inputId => {
    const input = inputId;
    const excludedText = input.indexOf("Checkbox");
    let tagNonFormatted = input.slice(0, excludedText);
    if (excludedText === -1) {
      tagNonFormatted = inputId;
    }
    const tag = tagNonFormatted.toLowerCase();

    let filtrosMarcados = this.state.filtrosMarcados;
    if (this.state.filtrosMarcados.indexOf(tag) === -1) {
      filtrosMarcados.push(tag);
    } else {
      filtrosMarcados = filtrosMarcados.filter(value => value !== tag);
    }

    localStorage.setItem(
      "filtrosMarcadosFixHub",
      JSON.stringify(filtrosMarcados)
    );

    this.setState({
      filtrosMarcados: JSON.parse(localStorage.getItem("filtrosMarcadosFixHub"))
    });
  };

  renderCheckbox = labelText => {
    const label = labelText.charAt(0).toUpperCase() + labelText.slice(1);
    const inputId = label + "Checkbox";
    let isChecked;
    this.state.filtrosMarcados.indexOf(label.toLowerCase()) === -1
      ? (isChecked = false)
      : (isChecked = true);
    return (
      <div className="form-inline text-wrap">
        <input
          type="checkbox"
          className="checkbox"
          id={inputId}
          onChange={() => this.validateCheckbox(inputId)}
          checked={isChecked}
        />
        <label
          className="form-check-label checkbox-label unselectable"
          onClick={() => this.validateCheckbox(inputId)}
        >
          {label}
        </label>
      </div>
    );
  };

  renderAccordion() {
    const filtros = [
      {
        categoria: "Aulas",
        tags: [
          "Reforço Escolar",
          "Dança",
          "Espanhol",
          "Francês",
          "Inglês",
          "Música",
          "Pré-Vestibular"
        ]
      },
      {
        categoria: "Estética",
        tags: [
          "Barbeiro",
          "Cabelereiro",
          "Depilação",
          "Manicure",
          "Maquiagem",
          "Pedicure",
          "Sobrancelha"
        ]
      },
      {
        categoria: "Eventos",
        tags: ["Animação", "Bandas", "Decoração", "DJ's", "Fotografia"]
      },
      {
        categoria: "Informática e Telefonia",
        tags: [
          "Cabos/Redes ",
          "Celular",
          "Computador",
          "Impressora",
          "Notebook",
          "Tablet",
          "Telefone Fixo",
          "Telefone Pabx"
        ]
      },
      {
        categoria: "Reparo de Eletrodomésticos",
        tags: [
          "Fogão/Cooktop",
          "Geladeira/Freezer",
          "Lava Louças",
          "Máquina de Lavar ",
          "Microondas"
        ]
      },
      {
        categoria: "Reparo de Eletrônicos",
        tags: [
          "Aparelho de Som",
          "Ar condicionado",
          "Câmera",
          "DVD",
          "BLU-RAY",
          "Home Theater",
          "Televisão",
          "Video Game"
        ]
      },
      {
        categoria: "Reparos em Geral",
        tags: [
          "Eletricista",
          "Encanador",
          "Gesseiro",
          "Marceneiro",
          "Mecânico",
          "Pintor",
          "Vidraceiro"
        ]
      },
      {
        categoria: "Serviços Gráficos",
        tags: [
          "Banners",
          "Convites",
          "Cartões de Visita",
          "Encadernação",
          "Flyers e Panfletos",
          "Plotagem",
          "TCC's"
        ]
      },
      {
        categoria: "Tecnologia e Design",
        tags: [
          "Criação de Sites",
          "Criação de Apps",
          "Logomarcas",
          "Marketing Digital"
        ]
      }
    ];

    return filtros.map(objeto => {
      const categoriaFormatted = objeto.categoria.replace(/ /g, "-");
      return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-0 p-0">
          <div className="accordion-group accordion-card shadow mr-2">
            <div className="accordion-heading">
              <button
                type="button"
                className="accordion-toggle"
                data-toggle="collapse"
                data-parent="#accordionFiltros"
                data-target={"#collapse" + categoriaFormatted}
              >
                <div className="card-heading">
                  <h5 className="green-text">{objeto.categoria}</h5>
                </div>
              </button>
            </div>
            <div
              id={"collapse" + categoriaFormatted}
              className="accordion-body collapse in"
            >
              <div className="card-divider"></div>
            </div>
            <div className="inner-card-accordion">
              {objeto.tags.map((tag, index) => {
                let inferiorPadding;
                index < objeto.tags.length - 1
                  ? (inferiorPadding = "")
                  : (inferiorPadding = "pb-1");
                return (
                  <div
                    id={"collapse" + categoriaFormatted}
                    className="accordion-body collapse out"
                  >
                    <div
                      className={`accordion-inner card-item ${inferiorPadding}`}
                    >
                      {this.renderCheckbox(tag)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  }

  renderProfissionais() {
    const profisisonais = [
      {
        nome: "Piruleison da Silva Sauro",
        icone: "https://image.flaticon.com/icons/png/512/57/57134.png",
        tags: [
          "eletricista",
          "pintor",
          "encanador",
          "pedreiro",
          "gesseiro",
          "marceneiro",
          "vidraceiro"
        ],
        anuncio: {
          texto:
            "Tempor pariatur anim esse culpa ullamco dolor ea ea eiusmod. Cupidatat exercitation ipsum ullamco ipsum aute. Culpa ex voluptate laborum deserunt commodo est ullamco labore in ullamco.\nDo velit ad duis dolor magna ullamco id esse dolor incididunt ad dolor ipsum. Laborum aliquip consectetur exercitation id sunt qui. Ullamco ad aliqua quis incididunt occaecat. Pariatur est voluptate do Lorem est aliquip officia sunt enim et sint sit. Consectetur ullamco minim tempor quis labore nulla esse laboris ex labore. Aliqua est id Lorem officia eiusmod aute irure aliquip tempor ex ex occaecat officia officia. Sint eu mollit reprehenderit adipisicing dolor exercitation labore esse nulla dolor veniam cillum aliquip."
        }
      },
      {
        nome: "Jubileu Astrogildo de Magalhães",
        icone: "https://image.flaticon.com/icons/png/512/56/56990.png",
        tags: ["professor", "música", "dança", "canto"],
        anuncio: {
          texto:
            "Tempor pariatur anim esse culpa ullamco dolor ea ea eiusmod. Cupidatat exercitation ipsum ullamco ipsum aute. Culpa ex voluptate laborum deserunt commodo est ullamco labore in ullamco.\nDo velit ad duis dolor magna ullamco id esse dolor incididunt ad dolor ipsum. Laborum aliquip consectetur exercitation id sunt qui. Ullamco ad aliqua quis incididunt occaecat. Pariatur est voluptate do Lorem est aliquip officia sunt enim et sint sit. Consectetur ullamco minim tempor quis labore nulla esse laboris ex labore. Aliqua est id Lorem officia eiusmod aute irure aliquip tempor ex ex occaecat officia officia. Sint eu mollit reprehenderit adipisicing dolor exercitation labore esse nulla dolor veniam cillum aliquip."
        }
      }
    ];

    return profisisonais.map(value => {
      return (
        <div className="jumbotron-clear">
          <div className="row">
            <div className="col-5 col-sm-5 col-md-3 col-lg-2 mx-auto mb-2 ">
              <img
                src={value.icone}
                width="100%"
                alt={`Imagem de ${value.nome}`}
              />
            </div>
            <div className=" col-12 col-md-9 col-lg-10">
              <div className="vertical-divider" />
              <h4 className="text-left">{value.nome}</h4>
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
                    />
                    // <div className="tag white-text shadow-text bg-info p-1 m-1 clickable" onClick={() => this.validateCheckbox(tag)}>
                    //   <strong>{tagName}</strong>
                    // </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  limparFiltros() {
    localStorage.setItem("filtrosMarcadosFixHub", "[]");
    this.setState({
      filtrosMarcados: JSON.parse(localStorage.getItem("filtrosMarcadosFixHub"))
    });
  }
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("filtrosMarcadosFixHub")) === null) {
      localStorage.setItem("filtrosMarcadosFixHub", "[]");
    }
    if (
      JSON.parse(localStorage.getItem("profissionaisEncontradosFixHub")) ===
      null
    ) {
      localStorage.setItem("profissionaisEncontradosFixHub", "[]");
    }
    this.setState({
      filtrosMarcados: JSON.parse(
        localStorage.getItem("filtrosMarcadosFixHub")
      ),
      profissionaisEncontrados: JSON.parse(
        localStorage.getItem("profissionaisEncontradosFixHub")
      )
    });
  }
  render() {
    return (
      <div>
        {/* <!-- Background verde água --> */}
        <div className="container-fluid bg-info">
          {/* <!-- Conteúdo principal da página --> */}
          <div className="container bg-white">
            {/* <!-- Primeira row --> */}
            <div className="row">
              <form className="col-12 mt-4 ">
                {/* Início do Jumbotron de borda verde que engloba toda a seção de pesquisa */}
                <div className="text-center mx-auto">
                  {/* Inicio do Jumbotron verde com filtros de pesquisa */}
                  <div className="jumbotron-green col-12 text-left">
                    <h1 className="white-text">Encontre Profissionais</h1>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control type-field col"
                          placeholder="Busque por termos chave como eletricista, manicure, DJ e etc..."
                        />
                        <div class="input-group-append">
                          <Btn
                            text="Pesquisar"
                            className="btn btn-outline-white shadow"
                            onClick={this.getProfissionais}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionFiltros">
                      <div className="accordion-groupmr-2">
                        <div className="accordion-heading">
                          <button
                            type="button"
                            className="accordion-toggle col-1"
                            data-toggle="collapse"
                            data-parent="#accordionFiltros"
                            data-target={"#collapseConjuntoFiltros"}
                          >
                            <div className="btn btn-white shadow mt-1">
                              Filtros
                            </div>
                          </button>
                        </div>
                        <div
                          id={"collapseConjuntoFiltros"}
                          className="accordion-body collapse in"
                        ></div>
                        <div className="inner-card-accordion bg-info">
                          <div
                            id={"collapseConjuntoFiltros"}
                            className="accordion-body collapse out"
                          >
                            <div className={`accordion-inner card-item`}>
                              <div className="d-flex flex-wrap">
                                {this.renderAccordion()}
                              </div>
                              <Btn
                                text="Limpar Filtros"
                                className="btn btn-white shadow mt-2"
                                onClick={this.limparFiltros}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Fim do Jumbotron verde com filtros de pesquisa */}

                  {/* Inicio dos resultados de pesquisa */}
                  {this.renderProfissionais()}
                  {/* Fim dos resultados de pesquisa */}
                </div>

                {/* Fim do Jumbotron de borda verde que engloba toda a seção de pesquisa */}
              </form>
            </div>
            {/* <!-- Fim da primeira row --> */}

            {/* <!-- Inicio da segunda row --> */}
            <div className="row mx-3">
              <div className="row jumbotron-clear ">
                {/* <!-- Imagem à esquerda/baixo --> */}
                <div className="col-sm-12 col-lg-6 ">
                  <img
                    src={workers}
                    width="100%"
                    alt="Pessoas apertano as mãos"
                  />
                </div>
                {/* <!-- Fim da Imagem à esquerda/baixo --> */}

                {/* <!-- Text-box com conteúdo à direita/abaixo da primeira imagem --> */}
                <div className="col-sm-12 col-lg-6 rounded my-auto text-center">
                  <h1 className="green-text">
                    A qualquer hora em qualquer lugar
                  </h1>
                  <br />
                  <h4 className="text-content text-justify">
                    Encontre o profissional adequado para as suas necessidades,
                    realize um busca mais profunda, contate e negocie com
                    diversos profissionais, cadastre-se para ter acesso a mais
                    informações.
                  </h4>
                  <br />
                  <Btn text="Cadastre-se" lead="/cadastro" />
                </div>
                {/* <!-- Fim da text-box com conteúdo à direita/abaixo da primeira imagem --> */}
              </div>
            </div>

            {/* Fim da segunda row */}
          </div>
          {/* <!-- Conteúdo principal da página --> */}
        </div>
        {/* <!-- Fim do background verde água --> */}
      </div>
    );
  }
}

export default EncontreProfissionais;
