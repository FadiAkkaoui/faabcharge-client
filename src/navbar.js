import React from 'react';
import './navbar.css';
import logo from './Logo_white.png';
import {Link} from 'react-router-dom';

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark px-3" id="navbar-example2">
            <div className="container-fluid">
                <img src={logo} width="250" height="" alt="" loading="lazy" style={{marginTop: "20px", margin:"auto", marginLeft:"25px"}}></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Configurations</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/"><a className="dropdown-item">All Configurations</a></Link></li>
                                <li><Link to="/"><a className="dropdown-item">New Configurations</a></Link></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><Link to="/"><a className="dropdown-item">Compare Configurations</a></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Items</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/"><a className="dropdown-item">All Items</a></Link></li>
                                <li><Link to="/"><a className="dropdown-item">New Items</a></Link></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><Link to="/"><a className="dropdown-item">Compare Items</a></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Components</a>
                            <div className="dropdown1"></div>
                            <ul className="dropdown-menu">
                                <li><Link to="/"><a className="dropdown-item">All Components</a></Link></li>
                                <li><Link to="/"><a className="dropdown-item">New Components</a></Link></li>
                                <li><a className="dropdown-item"></a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item"></a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="nav-item" id="itemsb">
                            <button className="button1"><Link to="/login"><p>Log out</p></Link></button>
                        </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;