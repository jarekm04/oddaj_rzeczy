import React from 'react';
import decoration from "../../assets/Decoration.svg";

const Foundation = () => {
    return (
        <section className="foundation" id="foundationID">
            <p className="foundation__title">Komu pomagamy?</p>
            <img src={decoration} alt="decoration" className="decoration"/>
            <div className="foundation__choice">
                <div className="choice">Fundacjom</div>
                <div className="choice">Organizacjom pozarządowym</div>
                <div className="choice">Lokalnym zbiórkom</div>
            </div>
            <div className="choice__content">
                <p className="choice__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div className="text-box">
                    <div className="box-left">
                        <p className="left__title">Fundacja “Dbam o Zdrowie”</p>
                        <p className="left__desc">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <div className="box-right">
                        <p className="right__desc">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                </div>
                <div className="text-box">
                    <div className="box-left">
                        <p className="left__title">Fundacja “Dla dzieci”</p>
                        <p className="left__desc">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <div className="box-right">
                        <p className="right_desc">ubrania, meble, zabawki</p>
                    </div>
                </div>
                <div className="text-box">
                    <div className="box-left">
                        <p className="left__title">Fundacja “Bez domu”</p>
                        <p className="left__desc">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    </div>
                    <div className="box-right">
                        <p className="right_desc">ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
            </div>
            <div className="foundation__numbers">
                <div className="number">1</div>
                <div className="number">2</div>
                <div className="number">3</div>
            </div>
        </section>
    );
};

export default Foundation;