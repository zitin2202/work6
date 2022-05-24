import React from 'react';
import logo from "../imagePets/logo.jpg"
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-">
                    <div className="container-fluid">
                        <Link  to="/" className="navbar-brand"><img src={logo} className="w-25 rounded-3" alt="logo"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Главная</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Личный кабинет</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/registration">Регистрация</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addPets">Добавить объявление</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/search">Поиск по объявлениям</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="foundpet">Сообщить о нахождении</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Поиск"
                                       aria-label="Search"/>
                                    <button className="btn btn-primary" onClick="">Поиск</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;