import React from 'react';
import decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import icon1 from "../../assets/Icon-1.svg";
import icon2 from "../../assets/Icon-2.svg";
import icon3 from "../../assets/Icon-3.svg";
import icon4 from "../../assets/Icon-4.svg";

const SimpleSteps = () => {
    return (
        <section className="simpleSteps" id="simpleStepsID">
            <p className="simpleSteps__title">Wystarczą 4 proste kroki</p>
            <img src={decoration} alt="decoration" className="decoration"/>
            <div className="simpleSteps__steps">
                <article className="steps__item">
                    <img src={icon1} alt="icon1" className="item__icon"/>
                    <p className="item__title">Wybierz rzeczy</p>
                    <hr/>
                    <p className="item__desc">ubrania, zabawki, sprzęt i inne</p>
                </article>
                <article className="steps__item">
                    <img src={icon2} alt="icon2" className="item__icon"/>
                    <p className="item__title">Spakuj je</p>
                    <hr/>
                    <p className="item__desc">skorzystaj z worków na śmieci</p>
                </article>
                <article className="steps__item">
                    <img src={icon3} alt="icon3" className="item__icon"/>
                    <p className="item__title">Zdecyduj komu chcesz pomóc</p>
                    <hr/>
                    <p className="item__desc">wybierz zaufane miejsce</p>
                </article>
                <article className="steps__item">
                    <img src={icon4} alt="icon4" className="item__icon"/>
                    <p className="item__title">Zamów kuriera</p>
                    <hr/>
                    <p className="item__desc">kurier przyjedzie w dogodnym terminie</p>
                </article>
            </div>
            <Link to="/logowanie" className="simpleSteps__btn">ODDAJ<br/>RZECZY</Link>
        </section>
    );
};

export default SimpleSteps;