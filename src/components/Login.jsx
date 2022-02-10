import React from 'react';
import Header from "./HomeComponents/Header";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className="login">
            <Header />
            <p className="login__title">Tutaj będzie login</p>
            <img src={decoration} alt="decoration" className="decoration"/>
            <form className="login__data">
                <label>Email</label>
                <input type="text" name="email"/>
                <label>Hasło</label>
                <input type="text" name="password"/>
            </form>
            <Link to="/rejestracja" className="register__btn">Załóż konto</Link>
            <button className="login__btn">Zaloguj się</button>
        </section>
    );
};

export default Login;