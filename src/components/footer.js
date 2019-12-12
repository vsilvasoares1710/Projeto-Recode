import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (

            <div>
                <footer className="container-fluid d-md-none footer-dark">
                    <div className="row mx-2">
                        <Link to='/' className="col-4 mb-2 mt-4 text-white text-left" >Home</Link>
                        <Link to='/quemSomos' className="col-4 mb-2 mt-4 text-white text-center" >Quem Somos</Link>
                        <Link to='/contato' className="col-4 mb-2 mt-4 text-white text-right" >Contato</Link>
                    </div>
                    <div className="row mx-2">
                        <Link to='encontreProfissionais' className="col-6 mb-2 mt-2 text-white text-left" >Encontre
                            Profissionais</Link>
                        <Link to='/divulgueSeuTrabalho' className="col-6 mb-2 mt-2 text-white text-right" >Divulgue seu
                            Trabalho</Link>
                    </div>
                    <div className="row mx-2">
                        <Link to='/entrar' className="col-6 mb-4 mt-2 text-white text-left" >Entrar</Link>
                        <Link to='/cadastro' className="col-6 mb-4 mt-2 text-white text-right" >Cadastro</Link>
                    </div>
        
                    <div className="green-text text-center border-top border-info">© 2019 - FixHub. Todos os direitos reservados.
                    </div>
                </footer>

                <footer className="container-fluid d-none d-md-block footer-dark">
                    <div className="row d-flex">
                        <Link to='/' className="col mb-4 mt-4 text-white text-center" >Home</Link>
                        <Link to='/quemSomos' className="col mb-4 mt-4 text-white text-center" >Encontre
                            Profissionais</Link>
                        <Link to='/divulgueSeuTrabalho' className="col mb-4 mt-4 text-white text-center" >Divulgue seu
                            Trabalho</Link>
                        <Link to='/quemSomos' className="col mb-4 mt-4 text-white text-center" >Quem Somos</Link>
                        <Link to='/contato' className="col mb-4 mt-4 text-white text-center" >Contato</Link>
                        <Link to='/entrar' className="col mb-4 mt-4 text-white text-center" >Entrar</Link>
                        <Link to='/cadastro' className="col mb-4 mt-4 text-white text-center" >Cadastro</Link>
                    </div>
                    <div className="green-text text-center border-top border-info">© 2019 - FixHub. Todos os direitos reservados.</div>
                </footer>
            </div>
        );
    }

}

export default Footer;