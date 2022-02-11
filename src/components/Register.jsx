import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";


const schemaRegister = yup.object().shape({
    email: yup.string().email("Proszę wpisać poprawny email").required("Proszę wpisać email"),
    password: yup.string().min(6, "Hasło musi mieć min. 6 znaków").max(15, "Hasło może mieć max 15 znaków").required("Proszę wpisać hasło"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null])
});

const Register = ({setIsUserLogged, registerEmail, registerPassword, registerConfirmPassword}) => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schemaRegister)
    });

    const [isFormSending, setIsFormSending] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (formData) => {
        // console.log(formData);
        registerEmail = formData.email;
        registerPassword = formData.password;
        registerConfirmPassword = formData.confirmPassword;
        localStorage.setItem("userName", registerEmail);

        setIsFormSending(true);
        setIsUserLogged(true);

        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            .then(() => {
                navigate("/");
            })
            .catch((err) => alert(err.message));
    }
    // console.log(errors);

    return (
        <section className="register-box">
            <p className="register__title">Zarejestruj się</p>
            <img src={decoration} alt="decoration" className="decoration"/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="register__data">
                    <label className="label">Email</label>
                    <input type="text" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                    {errors.email?.message && <p className="errorMsg">{errors.email?.message}</p>}
                    <label className="label">Hasło</label>
                    <input type="password" {...register("password", {required: true, max: 15, min: 6})} />
                    {errors.password?.message && <p className="errorMsg">{errors.password?.message}</p>}
                    <label className="label">Powtórz hasło</label>
                    <input type="password" {...register("confirmPassword", {required: true, max: 15, min: 6})} />
                    {errors.confirmPassword?.message &&
                    <p className="errorMsg">{errors.confirmPassword && "Hasła nie są takie same"}</p>}
                </div>
                <div className="register__buttons">
                    <Link to="/logowanie" className="login__btn">Zaloguj się</Link>
                    <button className="register__btn" type="submit">Załóż konto</button>
                </div>
            </form>
        </section>
    );
};

export default Register;