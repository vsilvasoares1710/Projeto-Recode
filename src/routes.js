import React from 'react';
import { Route, Switch } from 'react-router-dom'

//components
import Home from './pages/home'
import EncontreProfissionais from './pages/encontreProfissionais'
import DivulgueSeuTrabalho from './pages/divulgueSeuTrabalho'
import Contato from './pages/contato'
import QuemSomos from './pages/quemSomos'
import Entrar from './pages/entrar'
import Cadastro from './pages/cadastro'
import Profissional from './pages/profissional'
import Perfil from './pages/perfil'

function Routes() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/encontreProfissionais' component={EncontreProfissionais} />
			<Route exact path='/divulgueSeuTrabalho' component={DivulgueSeuTrabalho} />
			<Route exact path='/contato' component={Contato} />
			<Route exact path='/quemSomos' component={QuemSomos} />
			<Route exact path='/entrar' component={Entrar} />
			<Route exact path='/cadastro' component={Cadastro} />
      <Route exact path='/profissional/:id' component={Profissional} />
      <Route exact path='/perfil' component={Perfil} />
		</Switch>
	)

}

export default Routes;
