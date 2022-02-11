import React from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Logout = () => {
    return (
        <section className="logout-box">
            <p className="logout__title">Wylogowanie nastąpiło pomyślnie</p>
            <img src={decoration} alt="decoration" className="decoration"/>
            <Link to="/" className="logout__btn">Strona główna</Link>
        </section>
    );
};

export default Logout;