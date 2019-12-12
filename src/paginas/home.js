import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Home Page</h1>
					<Link to='/'>
						<button>
							Home Page
            			</button>
					</Link >
					<Link to='/encontreProfissionais'>
						<button>
							Encontre Profissionais
						</button>
					</Link >
					<Link to='/divulgueSeuTrabalho'>
						<button>
							Divulgue Seu Trabalho
						</button>
					</Link >
					<Link to='/contato'>
						<button>
							Contato
						</button>
					</Link >
					<Link to='/quemSomos'>
						<button>
							Quem Somos
						</button>
					</Link >
					<Link to='/entrar'>
						<button>
							Entrar
						</button>
					</Link >
					<Link to='/cadastro'>
						<button>
							Cadastro
						</button>
					</Link >
				</header>
			</div>
		);
	}

}

export default Home;
