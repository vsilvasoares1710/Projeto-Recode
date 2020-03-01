import React from "react";
import { Route, Switch } from "react-router-dom";

import isAuthenticated from "./services/userAuthentication";
//components
import Home from "./pages/home";
import EncontreProfissionais from "./pages/encontreProfissionais";
import DivulgueSeuTrabalho from "./pages/divulgueSeuTrabalho";
import Contato from "./pages/contato";
import QuemSomos from "./pages/quemSomos";
import Entrar from "./pages/entrar";
import Cadastro from "./pages/cadastro";
import Profissional from "./pages/profissional";
import Perfil from "./pages/perfil";
import AlterarCadastro from "./pages/alterarCadastro";
import Imagem from "./pages/imagem";

function Routes() {
  if (isAuthenticated()) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/encontreProfissionais"
          component={EncontreProfissionais}
        />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/quemSomos" component={QuemSomos} />
        <Route exact path="/profissional/:id" component={Profissional} />
        <Route exact path="/imagem" component={Imagem} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/alterarCadastro" component={AlterarCadastro} />
        <Route component={Home} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/encontreProfissionais"
          component={EncontreProfissionais}
        />
        <Route
          exact
          path="/divulgueSeuTrabalho"
          component={DivulgueSeuTrabalho}
        />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/quemSomos" component={QuemSomos} />
        <Route exact path="/entrar" component={Entrar} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/profissional/:id" component={Profissional} />
        <Route exact path="/imagem" component={Imagem} />
        <Route component={Home} />
      </Switch>
    );
  }
}

export default Routes;
