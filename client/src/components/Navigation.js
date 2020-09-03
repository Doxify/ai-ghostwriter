import React from 'react';
import Logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return ( 
            <div className="nav navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container">
                    <Link className="d-inline-block align-top" to="/"><img src={Logo} width="55" height="50" className="d-inline-block align-top" alt="logo" loading="lazy" /></Link>
                    <Link className="navbar-brand" to="/"> <mark> AI Ghostwriter </mark> </Link>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li>
                                <Link className="nav-link" to="/">Generate</Link>
                            </li>
                            {/* <li>
                                <Link className="nav-link" to="/previous">Previous Works</Link>
                            </li> */}
                            <li>
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;