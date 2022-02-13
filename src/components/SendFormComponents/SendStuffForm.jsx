import React from 'react';

const SendStuffForm = () => {
    return (
        <form className="sendStuffForm">
            <div className="sendStuffForm__warn">
                <p className="warn__title">Ważne!</p>
                <p className="warn__subtitle">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>
            <div className="sendStuffForm__form">
                <p className="form__step">Krok 1/4</p>
                <h2 className="form__title">Zaznacz co chcesz oddać:</h2>
                <div className="form__inputs">
                    <input type="text"/>
                </div>
            </div>
        </form>
    );
};

export default SendStuffForm;