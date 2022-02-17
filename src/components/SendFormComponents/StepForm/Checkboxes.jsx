import React from 'react';

const Checkboxes = ({register}) => {

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
                <div className="form__checkboxes">
                    <div className="input__item">
                        <input type="radio" {...register('check', { required: true })} name="check" value="goodClothes"/>
                        ubrania, które nadają się do ponownego użycia
                    </div>
                    <div className="input__item">
                        <input type="radio" {...register('check', { required: true })} name="check" value="badClothes"/>
                        ubrania, do wyrzucenia
                    </div>
                    <div className="input__item">
                        <input type="radio" {...register('check', { required: true })} name="check" value="toys"/>
                        zabawki
                    </div>
                    <div className="input__item">
                        <input type="radio" {...register('check', { required: true })} name="check" value="books"/>
                        książki
                    </div>
                    <div className="input__item">
                        <input type="radio" {...register('check', { required: true })} name="check" value="other"/>
                        inne
                    </div>
                </div>
                <div className="sendStuffForm__buttons">
                    <div className="sendStuffForm__btn">Dalej</div>
                </div>
            </div>
        </>
    );
};

export default Checkboxes;