import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";
import welcomeBg from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import ThreeColumns from "./HomeComponents/ThreeColumns";
import SimpleSteps from "./HomeComponents/SimpleSteps";
import AboutUs from "./HomeComponents/AboutUs";
import Foundation from "./HomeComponents/Foundation";

const Home = () => {
    return (
        <>
            <div className="welcome">
                <div className="bg-box">
                    <img className="welcome__bg" src={welcomeBg} alt="stuff"/>
                </div>
                <section className="welcome__content">
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
                            <LinkScroll to="" className="menu__btn">Kontakt</LinkScroll>
                        </nav>
                    </header>
                    <main className="main__content">
                        <h1 className="main__title">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={decoration} alt="decoration" className="decoration"/>
                        <div className="main__btn-box">
                            <Link to="/logowanie" className="main__btn">ODDAJ<br/>RZECZY</Link>
                            <Link to="/logowanie" className="main__btn">ZORGANIZUJ ZBIÓRKĘ</Link>
                        </div>
                    </main>
                </section>
            </div>
            <ThreeColumns />
            <SimpleSteps />
            <AboutUs />
            <Foundation />
        </>
    );
};

export default Home;