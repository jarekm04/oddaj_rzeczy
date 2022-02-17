import React from 'react';

const Checkboxes = ({register, navigation, errors}) => {

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
                        <input type="radio" {...register('stuff', { required: true })} name="stuff" value="ubrania, które nadają się do ponownego użycia"/>
                        ubrania, które nadają się do ponownego użycia
                    </div>
                    <div className="input__item">
                        <input type="radio" {...register('stuff', { required: true })} name="stuff" value="ubrania, do wyrzucenia"/>
                        ubrania, do wyrzucenia
                    </div>
                    <div className="input__item">
                        <input type="radio" {...register('stuff', { required: true })} name="stuff" value="zabawki"/>
                        zabawki
                    </div>
                    <div className="input__item">
                        <input type="radio" {...register('stuff', { required: true })} name="stuff" value="książki"/>
                        książki
                    </div>
                    <div className="input__item">
                        <input type="radio" {...register('stuff', { required: true })} name="stuff" value="inne"/>
                        inne
                    </div>
                </div>
                <div className="sendStuffForm__buttons">
                    <p className="errorsMsg">{errors.stuff?.message}</p>
                    <div className="sendStuffForm__btn" onClick={() => navigation.next()}>Dalej</div>
                </div>
            </div>
        </>
    );
};

export default Checkboxes;