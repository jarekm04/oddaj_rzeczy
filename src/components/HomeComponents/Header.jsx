import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

const Header = ({isUserLogged, setIsUserLogged}) => {

    return (
        <header className="header">
            {isUserLogged ? (
                <section className="header__loginArea">
                    <p className="userName">{localStorage.getItem("userName")}</p>
                    <Link to="/oddaj-rzeczy" className="loginArea__btn">Oddaj rzeczy</Link>
                    <Link onClick={() => setIsUserLogged(false)} to="/wylogowano" className="loginArea__btn" >Wyloguj</Link>
                </section>
            ) : (
                <section className="header__loginArea">
                    <Link to="/logowanie" className="loginArea__btn">Zaloguj</Link>
                    <Link to="/rejestracja" className="loginArea__btn">Załóż konto</Link>
                </section>
            )}
            <nav className="header__menu">
                <Link to="/" className="menu__btn">Start</Link>
                <LinkScroll to="simpleStepsID" smooth={true} duration={500} offset={-55} className="menu__btn">O co chodzi?</LinkScroll>
                <LinkScroll to="aboutUsID" smooth={true} duration={500} className="menu__btn">O nas</LinkScroll>
                <LinkScroll to="foundationID" smooth={true} duration={500} offset={-70} className="menu__btn">Fundacja i organizacje</LinkScroll>
                <LinkScroll to="contactID" smooth={true} duration={500} className="menu__btn">Kontakt</LinkScroll>
            </nav>
        </header>
    );
};

export default Header;