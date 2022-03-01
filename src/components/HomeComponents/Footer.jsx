import React from 'react';
import fb from "../../assets/Facebook.svg";
import insta from "../../assets/Instagram.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">Copyright by JM</p>
            <div className="footer__media">
                <a href="https://pl-pl.facebook.com/" target="_blank" className="main__btn">
                    <img src={fb} alt="fb"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="main__btn">
                    <img src={insta} alt="insta"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;