import React from 'react';
import { Route, Switch } from 'react-router-dom'

//components
import Home from './paginas/home'
import EncontreProfissionais from './paginas/encontreProfissionais'
import DivulgueSeuTrabalho from './paginas/divulgueSeuTrabalho'
import Contato from './paginas/contato'
import QuemSomos from './paginas/quemSomos'
import Entrar from './paginas/entrar'
import Cadastro from './paginas/cadastro'
import Profissional from './paginas/profissional'

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
		</Switch>
	)

}

export default Routes;
