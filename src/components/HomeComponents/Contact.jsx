import React from 'react';
import ContactBg from "../../assets/Background-Contact-Form.jpg";
import decoration from "../../assets/Decoration.svg";
import fb from "../../assets/Facebook.svg";
import insta from "../../assets/Instagram.svg";

const Contact = () => {

    return (
        <section className="contact" id="contactID">
            <div className="bg-box">
                <img src={ContactBg} alt="contactBg" className="contact__bg"/>
            </div>
            <form className="form">
                <p className="form__title">Skontaktuj się z nami</p>
                <img src={decoration} alt="decoration" className="decoration"/>
                <div className="smallInputs">
                    <div className="oneInput">
                        <label htmlFor="name" className="label">Wpisz swoje imię</label>
                        <input type="text" id="name" placeholder="Krzysztof"/>
                    </div>
                    <div className="oneInput">
                        <label htmlFor="email" className="label">Wpisz swoje imię</label>
                        <input type="email" id="email" placeholder="abc@xyz.pl"/>
                    </div>
                </div>
                <label className="label">Wpisz swoją wiadomość</label>
                <textarea name="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                <button className="contact__btn">Wyślij</button>
            </form>
            <footer className="footer">
                <p className="footer__text">Copyright by Coders Lab</p>
                <div className="footer__media">
                    <a href="https://pl-pl.facebook.com/" target="_blank" className="main__btn"><img src={fb} alt="fb"/></a>
                    <a href="https://www.instagram.com/" target="_blank" className="main__btn"><img src={insta} alt="insta"/></a>
                </div>
            </footer>
        </section>
    );
};

export default Contact;