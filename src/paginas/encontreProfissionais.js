import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import workers from '../img/workers.jpg';

class EncontreProfissionais extends Component {
	render() {
		return (
			<div>
				{/* <!-- Background verde água --> */}
				<div className="container-fluid bg-info">
					{/* <!-- Conteúdo principal da página --> */}
					<div className="container bg-white">

						{/* <!-- Primeira row --> */}
						<div className="row">
							{/* <!-- Imagem à esquerda/topo --> */}
							<form className="col-12 mt-4">
								<div className="jumbotron">
									<div className="form-group text-center">
										<label className="green-text"><h1>Campo de Pesquisa</h1></label>
										<input type="text" className="form-control" placeholder="Busque por termos chave como eletricista, manicure, DJ e etc..." />
									</div>
									<button type="submit" className="btn btn-info mx-auto">Pesquisar</button>
								</div>
							</form>
							{/* <!-- Fim da Imagem à esquerda/topo --> */}

							{/* <!-- Text-box com conteúdo à direita/topo da primeira imagem --> */}

							{/* <!-- Fim da text-box com conteúdo à direita/topo da primeira imagem --> */}
						</div>
						{/* <!-- Primeira da primeira row --> */}


						{/* <!-- Terceira row --> */}

						<div className="row">
							{/* <!-- Text-box com conteúdo à esquerda/abaixo da primeira imagem --> */}
							<div className="col-sm-12 col-lg-6">
								<img src={workers} width="100%" alt="Pessoas apertano as mãos" />
							</div>
							{/* <!-- Fim da text-box com conteúdo à esquerda/abaixo da primeira imagem --> */}

							{/* <!-- Imagem à direita/baixo --> */}
							<div className="col-sm-12 p-3 col-lg-6 rounded my-auto text-center">
								<h1 className="green-text">A qualquer hora em qualquer lugar</h1>
								<br />
								<h4 className="text-content">Encontre o profissional adequado para as suas necessidades, realize um
									busca mais profunda, contate e negocie com diversos profissionais, cadastre-se para ter
									acesso a mais informações.</h4>
								<br />
								<Link to="/cadastro" className="btn btn-info my-3 my-sm-0" href="#">Cadastre-se</Link>
							</div>
							{/* <!-- Fim da Imagem à direita/baixo --> */}
						</div>
						<br />
						{/* <!-- Fim da terceira row --> */}
					</div>
					{/* <!-- Conteúdo principal da página --> */}
				</div>
				{/* <!-- Fim do background verde água --> */}
			</div>
		)
	}
}

export default EncontreProfissionais;
