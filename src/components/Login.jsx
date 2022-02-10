import React, {useState} from 'react';
import Header from "./HomeComponents/Header";
import decoration from "../assets/Decoration.svg";
import {Link, useNavigate} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

const schemaLogin = yup.object().shape({
    email: yup.string().email("Proszę wpisać poprawny email").required("Proszę wpisać email"),
    password: yup.string().min(6, "Hasło musi mieć min. 6 znaków").max(15, "Hasło może mieć max 15 znaków").required("Proszę wpisać hasło"),
});

const Login = ({setIsUserLogged, userEmail, userPassword}) => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schemaLogin)
    });

    const [isFormSending, setIsFormSending] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (formData) => {
        // console.log(formData);
        userEmail = formData.email;
        userPassword = formData.password;
        localStorage.setItem("userName", userEmail);

        setIsFormSending(true);
        setIsUserLogged(true);

        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then(() => {
                navigate('/')
            }).catch((err) =>
            alert(err.message));
    }
    console.log(errors);

    return (
        <>
            <Header/>
            <section className="login-box">
                <p className="login__title">Zaloguj się</p>
                <img src={decoration} alt="decoration" className="decoration"/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="login__data">
                        <label className="label">Email</label>
                        <input type="text" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                        {errors.email?.message && <p className="errorMsg">{errors.email?.message}</p>}
                        <label className="label">Hasło</label>
                        <input type="password" {...register("password", {required: true, max: 15, min: 6})} />
                        {errors.password?.message && <p className="errorMsg">{errors.password?.message}</p>}
                    </div>
                    <div className="login__buttons">
                        <Link to="/rejestracja" className="register__btn">Załóż konto</Link>
                        <button className="login__btn">Zaloguj się</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;