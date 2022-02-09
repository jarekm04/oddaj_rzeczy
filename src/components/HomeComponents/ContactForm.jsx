import React from 'react';
import decoration from "../../assets/Decoration.svg";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

// const schema = yup.object().shape({
//     name: yup.string().required(),
//     email: yup.string().email().required(),
//     msg: yup.string().min(120).required()
// })

const ContactForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    console.log(errors);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className="form__title">Skontaktuj się z nami</p>
            <img src={decoration} alt="decoration" className="decoration"/>
            <div className="smallInputs">
                <div className="oneInput">
                    <label className="label">Wpisz swoje imię</label>
                    <input type="text" placeholder="Krzysztof" {...register("firstName", {required: true, max: 3, maxLength: 80})}/>
                </div>
                <div className="oneInput">
                    <label className="label">Wpisz swój email</label>
                    <input type="text" placeholder="abc@xyz.pl" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                </div>
            </div>
            <label className="label">Wpisz swoją wiadomość</label>
            <textarea {...register("msg", {required: true, min: 120})} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <button type="submit" className="contact__btn">Wyślij</button>
        </form>
    );
};

export default ContactForm;