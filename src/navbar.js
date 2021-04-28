import React from 'react';
import './navbar.css';
import logo from './Logo_white.png';

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark px-3" id="navbar-example2">
            <div className="container-fluid">
                <img src={logo} width="250" height="" alt="" loading="lazy"></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Configurations</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">All Configurations</a></li>
                                <li><a className="dropdown-item" href="#">New Configurations</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Compare Configurations</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Items</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">All Items</a></li>
                                <li><a className="dropdown-item" href="#">New Items</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Compare Items</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Components</a>
                            <div className="dropdown1"></div>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">All Components</a></li>
                                <li><a className="dropdown-item" href="#">New Components</a></li>
                                <li><a className="dropdown-item" href="#"></a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#"></a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="nav-item" id="itemsb">
                            <button className="button1"><p className="nav-link active" aria-current="page" href="#">Log out</p></button>
                        </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;