import React from 'react';

const Checkboxes = ({register, handleMoveForward, moveForward}) => {
    const stuff = ["ubrania, które nadają się do ponownego użycia", "ubrania, do wyrzucenia", "zabawki", "książki", "inne"];

    return (
        <>
            <div className="sendStuffForm__warn">
                <p className="warn__title">Ważne!</p>
                <p className="warn__subtitle">
                    Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
                    przekazać.
                </p>
            </div>
            <div className="sendStuffForm__form">
                <p className="form__step">Krok 1/4</p>
                <h2 className="form__title">Zaznacz co chcesz oddać:</h2>
                <div className="form__checkboxes">
                    {stuff.map((item, index) => (
                        <div className="input__item" key={index}>
                            <input
                                type="radio"
                                {...register('stuff', {required: true})}
                                name="stuff" value={item}
                                className={!moveForward ? "error" : null}
                            />
                            {item}
                        </div>
                    ))}
                    {!moveForward ? <p className="errorsMsg">Proszę zaznaczyć jedno z pól</p> : null}
                </div>
                <div className="sendStuffForm__buttons">
                    <div className="sendStuffForm__btn" onClick={() => handleMoveForward("stuff")}>
                        Dalej
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkboxes;