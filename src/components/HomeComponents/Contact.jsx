import React from 'react';
import ContactForm from "./ContactForm";
import ContactBg from "../../assets/Background-Contact-Form.jpg";

const Contact = () => {
    return (
        <section className="contact" id="contactID">
            <div className="bg-box">
                <img src={ContactBg} alt="contactBg" className="contact__bg"/>
            </div>
            <ContactForm />
        </section>
    );
};

export default Contact;