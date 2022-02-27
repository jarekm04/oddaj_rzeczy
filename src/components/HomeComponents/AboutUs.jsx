import React from 'react';
import people from '../../assets/People.jpg';
import decoration from "../../assets/Decoration.svg";
import signature from "../../assets/Signature.svg";

const AboutUs = () => {
    return (
        <section className="aboutUs" id="aboutUsID">
            <div className="aboutUs__contentBox">
                <p className="aboutUs__title">O nas</p>
                <img src={decoration} alt="decoration" className="decoration"/>
                <p className="aboutUs__text">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img src={signature} alt="signature" className="signature"/>
            </div>
            <div className="aboutUs__photo">
                <img src={people} alt="people" className="peoplePhoto"/>
            </div>
        </section>
    );
};

export default AboutUs;