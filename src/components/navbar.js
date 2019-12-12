import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark shadow">

            <Link to ='/' className="navbar-brand" id="brand-logo" >FixHub</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo"
                    aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to ='/' className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/encontreProfissionais' className="nav-link" >Encontre Profissionais</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/divulgueSeuTrabalho' className="nav-link" >Divulgue seu Trabalho</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/quemSomos' className="nav-link" >Quem Somos</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/contato' className="nav-link" >Contato</Link>
                        </li>
                    </ul>
                    <Link to='/entrar' className="btn btn-info my-3 mr-3" >Entrar</Link>
                    <Link to='/cadastro' className="btn btn-info my-3" >Cadastre-se</Link>
                </div>
            </nav>

        );
    }

}

export default Navbar;