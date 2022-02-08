import React from 'react';
import {Link} from "react-router-dom";
import welcomeBg from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";

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
                            <Link to="" className="loginArea__btn">Zaloguj</Link>
                            <Link to="" className="loginArea__btn">Załóż konto</Link>
                        </section>
                        <nav className="header__menu">
                            <Link to="" className="menu__btn">Start</Link>
                            <Link to="" className="menu__btn">O co chodzi?</Link>
                            <Link to="" className="menu__btn">O nas</Link>
                            <Link to="" className="menu__btn">Fundacja i organizacje</Link>
                            <Link to="" className="menu__btn">Kontakt</Link>
                        </nav>
                    </header>
                    <main className="main__content">
                        <h1 className="main__title">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={decoration} alt="decoration" className="decoration"/>
                        <div className="main__btn-box">
                            <Link to="" className="main__btn">ODDAJ<br/>RZECZY</Link>
                            <Link to="" className="main__btn">ZORGANIZUJ ZBIÓRKĘ</Link>
                        </div>
                    </main>
                </section>
            </div>
        </>
    );
};

export default Home;