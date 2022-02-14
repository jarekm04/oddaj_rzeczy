import React, {useState} from 'react';
import BearBg from "../../../assets/Background-Form-mini.jpg";

const Checkboxes = ({formData, setFormData, navigation}) => {
    // const handleCheckbox = (e) => {
    //     const {name, value, type, checked} = e.target;
    //
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: type === 'checkbox' ? checked : value,
    //     }));
    // }

    const handleChange = (e) => {
        setFormData({... prevState, userGift: e.target.value})
    }

    return (
        <>
            <div className="sendStuffForm__warn">
                <p className="warn__title">Ważne!</p>
                <p className="warn__subtitle">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć
                    komu najlepiej je przekazać.</p>
            </div>
            <div className="sendStuffForm__form">
                <p className="form__step">Krok 1/4</p>
                <h2 className="form__title">Zaznacz co chcesz oddać:</h2>
                <div className="form__inputs">
                    <div className="input__item">
                        <input onChange={handleChange} type="radio" value="firstChoice" checked={formData.userGift === "firstChoice"}/>ubrania,
                        które nadają się do ponownego użycia
                    </div>
                    <div className="input__item">
                        <input onChange={handleChange} type="radio" value="secondChoice" checked={formData.userGift === "secondChoice"}/>ubrania,
                        do wyrzucenia
                    </div>
                    {/*<div className="input__item">*/}
                    {/*    <input onChange={handleCheckbox} type="checkbox" name="thirdCheckbox" checked={formData.thirdCheckbox}/>zabawki*/}
                    {/*</div>*/}
                    {/*<div className="input__item">*/}
                    {/*    <input onChange={handleCheckbox} type="checkbox" name="fourthCheckbox" checked={formData.fourthCheckbox}/>książki*/}
                    {/*</div>*/}
                    {/*<div className="input__item">*/}
                    {/*    <input onChange={handleCheckbox} type="checkbox" name="fifthCheckbox" checked={formData.fifthCheckbox}/>inne*/}
                    {/*</div>*/}
                </div>
                <button className="sendStuffForm__btn">Wstecz</button>
                <button className="sendStuffForm__btn">Dalej</button>
            </div>
            <img src={BearBg} alt="bear" className="sendStuffForm__bearBg"/>
        </>
    );
};

export default Checkboxes;