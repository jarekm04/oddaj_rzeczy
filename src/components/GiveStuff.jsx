import React from 'react';
import giveStuffBg from "../assets/Form-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";

const GiveStuff = () => {

    return (
        <section className="giveStuff">
                <div className="bg-box">
                    <img className="giveStuff__bg" src={giveStuffBg} alt="blouse"/>
                </div>
                <section className="giveStuff__content">
                    <main className="main__content">
                        <h1 className="main__title">Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h1>
                        <img src={decoration} alt="decoration" className="decoration"/>
                        <h2 className="main__subtitle">Wystarczą 4 proste kroki:</h2>
                        <div className="main__steps">
                            <p className="step">1<br/>Wybierz rzeczy</p>
                            <p className="step">2<br/>Spakuj je w worki</p>
                            <p className="step">3<br/>Wybierz fundację</p>
                            <p className="step">4<br/>Zamów kuriera</p>
                        </div>
                    </main>
                </section>
        </section>
    );
};

export default GiveStuff;