import React from 'react';
import {useForm, useStep} from "react-hooks-helper";
import BearBg from '../../assets/Background-Form-mini.jpg';

const defaultData = {
    firstName: "",
    lastName: "",
    nickName: ""
};

const steps = [
    {id: 'names'},
    {id: 'address'},
    {id: 'contact'},
    {id: 'review'},
    {id: 'submit'}
];

const SendStuffForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    console.log(step);

    return (
        <form className="sendStuffForm">
            <div className="sendStuffForm__warn">
                <p className="warn__title">Ważne!</p>
                <p className="warn__subtitle">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć
                    komu najlepiej je przekazać.</p>
            </div>
            <div className="sendStuffForm__form">
                <p className="form__step">Krok 1/4</p>
                <h2 className="form__title">Zaznacz co chcesz oddać:</h2>
                <div className="form__inputs">
                    <input type="text"/>
                </div>
            </div>
            <img src={BearBg} alt="bear" className="sendStuffForm__bearBg"/>
        </form>
    );
};

export default SendStuffForm;