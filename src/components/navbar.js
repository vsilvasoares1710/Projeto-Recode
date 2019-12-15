import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Btn from './button.js'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">

            <Link to ='/' className="navbar-brand" id="brand-logo" >FixHub</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo"
                    aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo">
                    <ul className="navbar-nav mr-auto ml-1 ">
                        <li className="nav-item active my-3">
                            <Link to ='/' className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item active my-3">
                            <Link to='/encontreProfissionais' className="nav-link" >Encontre Profissionais</Link>
                        </li>
                        <li className="nav-item active my-3">
                            <Link to='/divulgueSeuTrabalho' className="nav-link" >Divulgue seu Trabalho</Link>
                        </li>
                        <li className="nav-item active my-3">
                            <Link to='/quemSomos' className="nav-link" >Quem Somos</Link>
                        </li>
                        <li className="nav-item active my-3">
                            <Link to='/contato' className="nav-link" >Contato</Link>
                        </li>
                    </ul>
                    <Btn text="Entrar" lead="/entrar"/>
                    <Btn text="Cadastro" lead="/cadastro"/>
                </div>
            </nav>

        );
    }

}

export default Navbar;