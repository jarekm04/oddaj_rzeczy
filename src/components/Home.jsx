import React from 'react';
import {Link} from "react-router-dom";
import welcomeBg from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import Header from "./HomeComponents/Header";
import ThreeColumns from "./HomeComponents/ThreeColumns";
import SimpleSteps from "./HomeComponents/SimpleSteps";
import AboutUs from "./HomeComponents/AboutUs";
import Foundation from "./HomeComponents/Foundation";
import Contact from "./HomeComponents/Contact";

const Home = () => {
    return (
        <>
            <div className="welcome">
                <div className="bg-box">
                    <img className="welcome__bg" src={welcomeBg} alt="stuff"/>
                </div>
                <section className="welcome__content">
                    <Header />
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
            <Contact />
        </>
    );
};

export default Home;