import React, { Component } from 'react';
import './App.css';
// Import de Imagens
import clientes from "../img/clientes.jpg"
import clientes2 from "../img/clientes2.png"
import womanJumping from "../img/womanJumping.jpg"

import { Link } from 'react-router-dom';

class DivulgueSeuTrabalho extends Component {
	render() {
		return (
			<div className="container-fluid bg-info">
            {/* <!-- Conteúdo principal da página --> */}
            <div className="container bg-white">
                {/* <!-- Primeira row --> */}
                <div className="row">
                    {/* <!-- Text-box com conteúdo à direita/topo da primeira imagem --> */}
                    <div className="col-sm-12 mt-4">
                        <div className="jumbotron my-auto rounded">

                            <h1 className="green-text">Divulgue seu Trabalho</h1>
                            <br/>
                            <h4 className="text-content text-justify">O FixHub é a plataforma perfeita para a divulgação do
                                seu trabalho,
                                cadastre-se agora mesmo gratuitamente e comece a vender cada vez mais.</h4>
                            <br/>
                            <Link to="/cadastro" className="btn btn-info shadow mt-3 0" >Cadastre-se</Link>
                        </div>
                    </div>
                    {/* <!-- Fim da text-box com conteúdo à direita/topo da primeira imagem -->
                    <!-- Imagem à direita/baixo --> */}
                    <div className="row mt-4 mx-2">
                        <div className="col-10 col-md-6 py-2 mx-auto">
                            <img src={clientes} width="100%" alt="Lupa fazendo a leitura do contrato em uma prancheta e simbolizando letras pequenas"/>
                        </div>
                        <div className="col-10 col-md-6 py-2 mx-auto">
                            <img src={clientes2} width="100%" alt="Assinatura do contrato, duas mãos, uma prancheta e uma uma caneta"/>
                        </div>
                    </div>
                    {/* <!-- Fim da Imagem à direita/baixo --> */}
                </div>
                {/* <!-- Fim da primeira row -->

                <!-- Segunda row --> */}
                <div className="row">
                    {/* <!-- Text-box com conteúdo à esquerda/abaixo da primeira imagem --> */}
                    <div className="col-sm-12 col-md-10 col-lg-6 mt-0 mx-auto">
                        <img src={womanJumping} width="100%" alt="Uma mulher segurando um trofeu, pulando de felicidade e uma seta simbolizando o aumento das vendas"/>
                    </div>
                    {/* <!-- Fim da text-box com conteúdo à esquerda/abaixo da primeira imagem --> */}
                    
                    <div className="col-sm-12 col-lg-6 mt-2 text-right">
                        <div className="jumbotron my-auto rounded">
                            <h1 className="green-text">Encontrar, ser encontrado, negociar e vender...</h1>
                            <br/>
                            <h4 className="text-content text-justify">Serviço bem feito merece visibilidade, faça seu negócio decolar conosco.</h4>
                            <br/>
                            <h4 className="text-content text-justify">Seja visualizado e encontrado por milhares de clientes, converse,
                                    negocie e venda via chat, cadastre-se e tenha acesso a esses e outros benefícios agora
                                    mesmo..</h4>
                            <br/>
                            <Link to="/cadastro" className="btn btn-info shadow mt-3">Cadastre-se</Link>
                        </div>
                    </div>
                    {/* <!-- Imagem à direita/baixo -->
                    <!-- Fim da Imagem à direita/baixo --> */}
                </div>
                <br/>
                {/* <!-- Fim da segunda row --> */}
            </div>
            {/* <!-- Conteúdo principal da página --> */}
        </div>
		)
	}
}

export default DivulgueSeuTrabalho;
