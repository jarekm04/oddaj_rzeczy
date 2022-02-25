import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import decoration from "../../assets/Decoration.svg";

const schema = yup.object().shape({
    name: yup.string().required("Proszę wpisać imię").min(2, "Imię musi zawierać min. 2 znaki").matches(/^(\S+$)/, 'Pole powinno zawierać jedno słowo'),
    email: yup.string().email("Proszę wpisać poprawny email").required("Proszę wpisać email"),
    message: yup.string().required("Proszę wpisać wiadomość").min(120, "Wiadomość musi zawierać min. 120 znaków")
});

const ContactForm = () => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });
    const [isFormSent, setIsFormSent] = useState(false);

    const onSubmit = (formData) => {
        // console.log(formData);
        setIsFormSent(true);

        axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', formData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

        setTimeout(() => {
            setIsFormSent(false);
            reset();
        }, 5000);
    }
    // console.log(errors);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className="form__title">Skontaktuj się z nami</p>
            <img src={decoration} alt="decoration" className="decoration"/>
            {isFormSent && <p className="form__successMsg">Wiadomość została wysłąna!<br/>Wkrótce się skontaktujemy</p>}
            <div className="smallInputs">
                <div className="oneInput">
                    <label className="label">Wpisz swoje imię</label>
                    <input type="text" placeholder="Krzysztof" {...register("name", {required: true, min: 2, maxLength: 80})}/>
                    <p className="errorsMsg">{errors.name?.message}</p>
                </div>
                <div className="oneInput">
                    <label className="label">Wpisz swój email</label>
                    <input type="text" placeholder="abc@xyz.pl" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                    <p className="errorsMsg">{errors.email?.message}</p>
                </div>
            </div>
            <label className="label">Wpisz swoją wiadomość</label>
            <textarea {...register("message", {required: true, min: 120})} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <p className="errorsMsg">{errors.message?.message}</p>
            <button type="submit" className="contact__btn">Wyślij</button>
        </form>
    );
};

export default ContactForm;