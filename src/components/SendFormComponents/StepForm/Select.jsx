import React, {useState} from 'react';

const Select = ({showSelect, handleShowSelect}) => {

    return (
        <>
            <div className="sendStuffForm__warn">
                <p className="warn__title">Ważne!</p>
                <p className="warn__subtitle">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <a href="https://pl.wikipedia.org/wiki/Instrukcja" target="_blank">TUTAJ</a>.</p>
            </div>
            <div className="sendStuffForm__form">
                <p className="form__step">Krok 2/4</p>
                <h2 className="form__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                <div className="form__select">
                    <div className="select-box">
                        Liczba 60l worków:
                        <div className={showSelect ? "box rotateArrow" : "box"} onClick={handleShowSelect}>
                            --wybierz--
                        </div>
                    </div>
                    <select size="5" className={showSelect ? "select-active" : "select-none"} onClick={handleShowSelect}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="sendStuffForm__buttons">
                    <button className="sendStuffForm__btn">Wstecz</button>
                    <button className="sendStuffForm__btn">Dalej</button>
                </div>
            </div>
        </>
    );
};

export default Select;