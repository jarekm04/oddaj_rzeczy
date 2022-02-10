import React from 'react';
import Header from "./HomeComponents/Header";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <Header/>
            <section className="login-box">
                <p className="login__title">Zaloguj się</p>
                <img src={decoration} alt="decoration" className="decoration"/>
                <form className="login__data">
                    <label className="label">Email</label>
                    <input type="text" name="email"/>
                    <label className="label">Hasło</label>
                    <input type="text" name="password"/>
                </form>
                <div className="login__buttons">
                    <Link to="/rejestracja" className="register__btn">Załóż konto</Link>
                    <button className="login__btn">Zaloguj się</button>
                </div>
            </section>
        </>
    );
};

export default Login;