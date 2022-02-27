import React from 'react';
import {Link} from "react-router-dom";
import decoration from "../../assets/Decoration.svg";

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