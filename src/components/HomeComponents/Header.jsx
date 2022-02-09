import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

const Header = () => {
    return (
        <header className="header">
            <section className="header__loginArea">
                <Link to="/logowanie" className="loginArea__btn">Zaloguj</Link>
                <Link to="/rejestracja" className="loginArea__btn">Załóż konto</Link>
            </section>
            <nav className="header__menu">
                <LinkScroll to="" className="menu__btn">Start</LinkScroll>
                <LinkScroll to="simpleStepsID" smooth={true} duration={500} offset={-55} className="menu__btn">O co chodzi?</LinkScroll>
                <LinkScroll to="aboutUsID" smooth={true} duration={500} className="menu__btn">O nas</LinkScroll>
                <LinkScroll to="foundationID" smooth={true} duration={500} offset={-70} className="menu__btn">Fundacja i organizacje</LinkScroll>
                <LinkScroll to="contactID" smooth={true} duration={500} className="menu__btn">Kontakt</LinkScroll>
            </nav>
        </header>
    );
};

export default Header;