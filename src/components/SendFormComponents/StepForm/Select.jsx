import React from 'react';

const Select = ({showSelect, handleShowSelect, register, getValues, handleMoveForward, moveForward, handleMoveBackward}) => {
    const options = [1, 2, 3, 4, 5];

    return (
        <>
            <div className="sendStuffForm__warn">
                <p className="warn__title">Ważne!</p>
                <p className="warn__subtitle">
                    Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz
                    <a href="https://pl.wikipedia.org/wiki/Instrukcja" target="_blank">TUTAJ</a>.
                </p>
            </div>
            <div className="sendStuffForm__form">
                <p className="form__step">Krok 2/4</p>
                <h2 className="form__title">
                    Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                </h2>
                <div className="form__select">
                    <div className="select-box">
                        Liczba 60l worków:
                        <div className={showSelect ? "box rotateArrow" : "box"} onClick={handleShowSelect}>
                            {getValues("bags") ? getValues("bags") : "--wybierz--"}
                        </div>
                    </div>
                    <select
                        size="5"
                        className={showSelect ? "select-active" : "select-none"}
                        onClick={handleShowSelect}
                        {...register("bags", { required: true })}
                    >
                        {options.map((option) => (
                            <option key={option} value={option} >
                                {option}
                            </option>
                        ))}
                    </select>
                    {!moveForward ? <p className="errorsMsg">Proszę wybrać jedno z pól</p> : null}
                </div>
                <div className="sendStuffForm__buttons">
                    <div className="sendStuffForm__btn" onClick={handleMoveBackward}>
                        Wstecz
                    </div>
                    <div className="sendStuffForm__btn" onClick={() => handleMoveForward("bags")}>
                        Dalej
                    </div>
                </div>
            </div>
        </>
    );
};

export default Select;