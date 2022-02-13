import React from 'react';
import ContactForm from "./ContactForm";
import ContactBg from "../../assets/Background-Contact-Form.jpg";
import fb from "../../assets/Facebook.svg";
import insta from "../../assets/Instagram.svg";

const Contact = () => {
    return (
        <section className="contact" id="contactID">
            <div className="bg-box">
                <img src={ContactBg} alt="contactBg" className="contact__bg"/>
            </div>
            <ContactForm />
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