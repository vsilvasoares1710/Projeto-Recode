import React, { Component } from 'react';
// Components
import Btn from "../components/button.js"
// Images
import constructionPeople from "../img/constructionPeople.png"

class Contato extends Component {
	render() {
		return (
			<div className="container-fluid bg-info">
				<div className="container bg-white">
					<div className="text-center">
						<br/>
						<h1> Página Atual: Contato</h1>
						<br/>
						<Btn text="Home" lead="/"/>
						<Btn text="Encontre Profissionais" lead="/encontreProfissionais"/>
						<Btn text="Divulgue Seu Trabalho" lead="/divulgueSeuTrabalho"/>
						<Btn text="Contato" lead="/contato"/>
						<Btn text="Quem Somos" lead="/quemSomos"/>
						<Btn text="Entrar" lead="/entrar"/>
						<Btn text="Cadastre-se" lead="/cadastro"/>
					</div>
					<br/>
					<h1 className="green-text text-center">Página em Construção</h1>
					<br/>
					<img className="d-block w-50 mt-4 mx-auto" src={constructionPeople} alt=""/>
				</div>
			</div>
		);
	}

}

export default Contato;
