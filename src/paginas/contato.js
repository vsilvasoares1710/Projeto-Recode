import React, { Component } from 'react';
// Components
import Btn from "../components/button.js"
// Images
import contato from "../img/contato.png"
class Contato extends Component {

	enviarMensagem() {
		alert("Sua mensagem foi enviada com sucesso.")
	}

	render() {
		return (
			<div className="container-fluid bg-info">
				<div className="container bg-white">
					<h1 className="green-text text-center pt-3">Contato</h1>
					{/* <!-- Primeira row --> */}
					<div className="row">
						{/* <!-- Imagem à direita/topo --> */}
						<div className="col-sm-12 col-md-11 mt-2 mb-3 mx-auto pr-1 d-lg-none ">
							<img src={contato} width="98%" className="my-auto rounded-image" alt="Mão segurando celular para entrar em contato com a empresa" />
						</div>
						{/* <!-- Fim da Imagem à direita/topo --> */}

						{/* <!-- Text-box com formulário à esquerda --> */}
						<div className="col-12 col-md-11 col-lg-7 mt-2 mb-3 mx-auto">
							<div className="jumbotron-green shadow my-auto ">
								<form>
									<div className="form-group">
										<label className="white-text"><h5><b>Nome Completo</b></h5></label>
										<input type="text" className="form-control" id="nome-contato" placeholder="João da Silva" />
									</div>
									<div className="form-group">
										<label className="white-text"><h5><b>E-mail</b></h5></label>
										<input type="email" className="form-control" id="email-contato" placeholder="joãodasilva@email.com" />
									</div>
									<br />
									<div className="form-group">
										<label className="white-text"><h5><b>Finalidade do Contato</b></h5></label>
										<select className="form-control" id="finalidade-contato">
											<option>Sugestão</option>
											<option>Elogio</option>
											<option>Ajuda</option>
											<option>Outros</option>
											<option>Reclamação</option>
										</select>
									</div>
									<div className="form-group">
										<label className="white-text"><h5><b>Mensagem</b></h5></label>
										<textarea className="form-control" id="mensagem-contato" rows="6" placeholder="Digite sua mensagem neste campo..."></textarea>
									</div>
									<Btn text="Enviar Mensagem" onClick={this.enviarMensagem} className="btn btn-white mt-2" />
								</form>
							</div>
						</div>
						{/* <!-- Fim da text-box com formulário à esquerda --> */}
						{/* <!-- Imagem à direita/topo --> */}
						<div className="col-sm-12 col-md-8 col-lg-5 mt-2 mb-3 mx-auto d-none d-lg-block">
							<img src={contato} width="98%" className="my-auto rounded-image" alt="Mão segurando celular para entrar em contato com a empresa" />
						</div>
						{/* <!-- Fim da Imagem à direita/topo --> */}
					</div>
					{/* <!-- Fim da primeira row --> */}
				</div>
			</div>
		);
	}

}

export default Contato;
