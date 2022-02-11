import React from 'react';
import giveStuffBg from "../assets/Form-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import SendStuffForm from "./SendStuffForm";
// import Contact from "./HomeComponents/Contact";

const GiveStuff = () => {
    return (
        <>
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
                            <p className="step"><span>1</span>Wybierz<br/>rzeczy</p>
                            <p className="step"><span>2</span>Spakuj je<br/>w worki</p>
                            <p className="step"><span>3</span>Wybierz<br/>fundację</p>
                            <p className="step"><span>4</span>Zamów<br/>kuriera</p>
                        </div>
                    </main>
                </section>
            </section>
            <SendStuffForm/>
            {/*<Contact />*/}
        </>
    );
};

export default GiveStuff;