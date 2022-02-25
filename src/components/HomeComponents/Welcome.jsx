import React from 'react';
import {Link} from "react-router-dom";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import Foundation from "./Foundation";
import Contact from "./Contact";
import Footer from "./Footer";
import welcomeBg from "../../assets/Home-Hero-Image.jpg";
import decoration from "../../assets/Decoration.svg";

const Welcome = () => {
    return (
        <>
            <section className="welcome" id="welcomeID">
                <div className="bg-box">
                    <img className="welcome__bg" src={welcomeBg} alt="stuff"/>
                </div>
                <section className="welcome__content">
                    <main className="main__content">
                        <h1 className="main__title">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={decoration} alt="decoration" className="decoration"/>
                        <div className="main__btn-box">
                            <Link to="/logowanie" className="main__btn">ODDAJ<br/>RZECZY</Link>
                            <Link to="/logowanie" className="main__btn">ZORGANIZUJ ZBIÓRKĘ</Link>
                        </div>
                    </main>
                </section>
            </section>
            <ThreeColumns />
            <SimpleSteps />
            <AboutUs />
            <Foundation />
            <Contact />
            <Footer />
        </>
    );
};

export default Welcome;