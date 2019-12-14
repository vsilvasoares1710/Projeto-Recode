import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
//images
import carRepair from '../img/carRepair.jpg'
import programmerCrossedLegs from '../img/programmerCrossedLegs.jpg'
import hairSalon from "../img/hairSalon.jpg"
import peopleShakingHands from "../img/peopleShakingHads.jpg"
import Btn from "../components/button.js"

class Home extends Component {


	render() {
		return (
			<div className="App">
				<div className="container-fluid bg-info">
					{/* <!-- Conteúdo principal da página --> */}
					<div className="container bg-white">
						{/* <!-- Primeira row --> */}
						<div className="row">
							{/* <!-- Imagem à esquerda/topo --> */}
							<div id="carouselExampleSlidesOnly" className="carousel slide col-sm-12 col-md-10 col-lg-6 my-auto mx-auto"
								data-ride="carousel" data-interval="2000">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img className="d-block w-100 mt-4" src={carRepair} alt="First slide" />
									</div>
									<div className="carousel-item">
										<img className="d-block w-100 mt-4" src={programmerCrossedLegs} alt="Second slide" />
									</div>
									<div className="carousel-item">
										<img className="d-block w-100 mt-4" src={hairSalon} alt="Third slide" />
									</div>
								</div>
							</div>
							{/* <!-- Fim da Imagem à esquerda/topo --> */}

							{/* <!-- Text-box com conteúdo à direita/topo da primeira imagem --> */}
							<div className="col-sm-12 col-lg-6 mt-4">
								<div className="jumbotron my-auto rounded">

									<h1 className="green-text">Profissionais diversos;</h1>
									<h1 className="green-text">Soluções simples...</h1>
									<br />
									<h4 className="text-content text-justify">Pintou aquele problema? Fica tranquilo, o FixHub te
										ajuda a encontrar a
									solução profissional mais próxima de você.</h4>
									<br />
									<h4 className="text-content text-justify">De mecânicos a manicures ou de pintores a DJ's,
									cobrimos os mais diversos ramos, clique abaixo e descubra.</h4>
									<br />
									<Link to='/encontreProfissionais' className="btn btn-info shadow mt-3 mr-2 my-sm-0">Encontre Profissionais</Link>
									<Btn text="Cadastre-se" lead="/cadastro"/>
								</div>
							</div>
							{/* <!-- Fim da text-box com conteúdo à direita/topo da primeira imagem --> */}
						</div>
						{/* <!-- Fim da primeira row --> */}
						<br />
						{/* <!-- Segunda Row --> */}
						<div className="rol bg-info">
							{/* <!-- Box dos cards--> */}
							<div className="row d-flex justify-content-center mx-3">
								{/* <!-- Card de Reparos --> */}
								<div className=" col-sm-10 col-md-6 col-lg-3 my-4 ix">
									<div className="card h-100 w-100">
										<div className="card-body shadow d-flex flex-column">
											<h5 className="card-title pb-1">Reparos</h5>
											<Link to='/encontreProfissionais' className="card-text card-content">Eletricistas</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Encanadores</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Gesseiros</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Marceneiros</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Mecânicos</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Pedreiros</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Pintores</Link>
											<Link to='/encontreProfissionais' className="btn btn-info shadow mt-3 mx-0">Mais
											Categorias...</Link>
										</div>
									</div>
								</div>
								{/* <!-- Fim o Card de Reparos --> */}

								{/* <!-- Card de Estética --> */}
								<div className=" col-sm-10 col-md-6 col-lg-3 my-4 d-none d-lg-block ix">
									<div className="card h-100 w-100">
										<div className="card-body shadow d-flex flex-column">
											<h5 className="card-title pb-1">Estética</h5>
											<Link to='/encontreProfissionais' className="card-text card-content">Barbeiros</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Cabelereiros</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Depilação</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Manicures</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Maquiadoras</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Pedicures</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Sobrancelhas</Link>
											<Link to='/encontreProfissionais' className="btn btn-info shadow mt-3 mx-0">Mais
											Categorias...</Link>
										</div>
									</div>
								</div>
								{/* <!-- Fim do Card de Estética --> */}

								{/* <!-- Card de Professores --> */}
								<div className=" col-sm-10 col-md-6 col-lg-3 my-4 d-none d-lg-block ix">
									<div className="card h-100 w-100">
										<div className="card-body shadow d-flex flex-column">
											<h5 className="card-title pb-1">Professores</h5>
											<Link to='/encontreProfissionais' className="card-text card-content">Aulas de Reforço</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Dança</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Espanhol</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Francês</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Inglês</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Música</Link>
											<Link to='/encontreProfissionais' className="card-text card-content">Pré-Vestibular</Link>
											<Link to='/encontreProfissionais' className="btn btn-info shadow mt-3 mx-0">Mais Categorias...</Link>
										</div>
									</div>
								</div>
								{/* <!-- Fim do Card de Professores --> */}

								{/* <!-- Card de Outros Serviços --> */}
								<div className=" col-sm-10 col-md-6 col-lg-3 my-4 ix">
									<div className="card h-100 w-100">
										<div className="card-body shadow d-flex flex-column">
											<h5 className="card-title pb-1">Diversos</h5>
											<div className="card-text last-card-content text-justify pb-3">Encontre os mais diversos
												serviços e soluções profissionais da sua região, buscando
											por mais categorias, no botão abaixo.</div>
											<Link to='/encontreProfissionais' className="btn btn-info shadow mt-auto mx-0" >Mais
											Categorias...</Link>
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
							<div className="col-sm-12 col-lg-6 mt-0">
								<div className="jumbotron my-auto rounded">
									<h1 className="green-text">Clientes à vista</h1>
									<br />
									<h4 className="text-content text-justify">Prestador de serviços, profissional liberal,
										trabalhador
										autônomo,
									micro-empreendedor, free-lancer...</h4>
									<br />
									<h4 className="text-content text-justify">São tantos os nomes, mas seja como for, aqui no
										FixHub,
										você encontra
										um espaço para divulgação do seu trabalho, cadastre-se gratuitamente e comece a angariar
									mais clientes.</h4>
									<br />
									<Link to='/divulgueSeuTrabalho' className="btn btn-info shadow mt-3 mr-2 my-sm-0 " >Divulgue seu Trabalho</Link>
									<Link to='/cadastro' className="btn btn-info shadow mt-3 my-sm-0 ">Cadastre-se</Link>
								</div>
							</div>
							{/* <!-- Fim da text-box com conteúdo à esquerda/abaixo da primeira imagem --> */}

							{/* <!-- Imagem à direita/baixo --> */}
							<div className="col-sm-12 col-md-10 col-lg-6 my-auto mx-auto">
								<img src={peopleShakingHands} width="100%" alt="Pessoas apertando as mãos" />
							</div>
							{/* <!-- Fim da Imagem à direita/baixo --> */}
						</div>
						<br />
						{/* <!-- Fim da terceira row --> */}
					</div>
					{/* <!-- Conteúdo principal da página --> */}
				</div>
			</div>
		);
	}

}

export default Home;
