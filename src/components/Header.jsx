import React from 'react'
import UseName from "./UseName.jsx";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="Header">
                <ul className="nav">
                    <Link to="/" className="logo">РешиКа</Link>
                    <Link className="nav-item" to="/">Главная</Link>
                    <Link className="nav-item" to="/Profile">Профиль</Link>
                </ul>
                <ul className="user">
                    <span className={`lgn-text`}>logged in as</span>
                    <Link to="/Login"><UseName/></Link>
                </ul>
            </div>
        </header>
    );
}
