import React from 'react';
import BearBg from "../../../assets/Background-Form-mini.jpg";

const Address = ({register, moveForward, handleMoveBackward, handleMoveForward}) => {
    const userMustHaveData = ["street", "city", "postCode", "phone", "date", "time"];

    return (
        <>
            <div className="sendStuffForm__warn">
                <p className="warn__title">Ważne!</p>
                <p className="warn__subtitle">
                    Podaj adres oraz termin odbioru rzeczy.
                </p>
            </div>
            <div className="sendStuffForm__form">
                <p className="form__step">Krok 4/4</p>
                <h2 className="form__title">
                    Podaj adres oraz termin odbioru rzecz przez kuriera
                </h2>
                <div className="form__address">
                    <div className="pickupData">
                        <p className="dataTitle">Adres odbioru:</p>
                        <div className="data__box">
                            <label htmlFor="street">Ulica</label>
                            <input
                                type="text"
                                id="street"
                                placeholder="Wpisz ulicę"
                                {...register("street", {required: true, min: 2})}
                                className={!moveForward ? "error" : null}
                            />
                        </div>
                        <div className="data__box">
                            <label htmlFor="city">Miasto</label>
                            <input
                                type="text"
                                id="city"
                                placeholder="Wpisz miasto"
                                {...register("city", {required: true, min: 2})}
                                className={!moveForward ? "error" : null}
                            />
                        </div>
                        <div className="data__box">
                            <label htmlFor="postCode">Kod pocztowy</label>
                            <input
                                type="text"
                                id="postCode"
                                placeholder="Wpisz kod pocztowy"
                                pattern="^\d{5}(?:[-\s]\d{4})?$"
                                {...register("postCode", {required: true, pattern: "{2}-{3}"})}
                                className={!moveForward ? "error" : null}
                            />
                        </div>
                        <div className="data__box">
                            <label htmlFor="phone">Telefon</label>
                            <input
                                type="number"
                                id="phone"
                                placeholder="Wpisz nr telefonu"
                                {...register("phone", {required: true, minLength: 9, maxLength: 9})}
                                className={!moveForward ? "error" : null}
                            />
                        </div>
                    </div>
                    <div className="timeData">
                        <p className="dataTitle">Termin odbioru:</p>
                        <div className="data__box">
                            <label htmlFor="date">Data</label>
                            <input
                                type="date"
                                id="date"
                                {...register("date", {required: true})}
                                className={!moveForward ? "error" : null}
                            />
                        </div>
                        <div className="data__box">
                            <label htmlFor="time">Godzina</label>
                            <input
                                type="time"
                                id="time"
                                {...register("time", {required: true})}
                                className={!moveForward ? "error" : null}
                            />
                        </div>
                        <div className="data__box">
                            <label htmlFor="note">Uwagi dla kuriera</label>
                            <textarea
                                id="note"
                                placeholder="Uwagi dla kuriera"
                                {...register("note", {})}
                            />
                        </div>
                    </div>
                </div>
                {!moveForward ? <p className="errorsMsg">Proszę uzupełnić wszystkie obowiązkowe dane</p> : null}
                <div className="sendStuffForm__buttons">
                    <div className="sendStuffForm__btn" onClick={handleMoveBackward}>
                        Wstecz
                    </div>
                    <div className="sendStuffForm__btn" onClick={() => handleMoveForward(userMustHaveData)}>
                        Dalej
                    </div>
                </div>
            </div>
        </>
    );
};

export default Address;