import React from 'react';
import Header from "./HomeComponents/Header";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <>
            <Header/>
            <section className="register-box">
                <p className="register__title">Zarejestruj się</p>
                <img src={decoration} alt="decoration" className="decoration"/>
                <form className="register__data">
                    <label className="label">Email</label>
                    <input type="text" name="email"/>
                    <label className="label">Hasło</label>
                    <input type="text" name="password"/>
                    <label className="label">Powtórz hasło</label>
                    <input type="text" name="password"/>
                </form>
                <div className="register__buttons">
                    <Link to="/logowanie" className="login__btn">Zaloguj się</Link>
                    <button className="register__btn">Załóż konto</button>
                </div>
            </section>
        </>
    );
};

export default Register;