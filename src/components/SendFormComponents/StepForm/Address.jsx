import React from 'react';

const Address = () => {
    return (
        <>
            <div className="sendStuffForm__warn">
                <p className="warn__title">Ważne!</p>
                <p className="warn__subtitle">Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <div className="sendStuffForm__form">
                <p className="form__step">Krok 4/4</p>
                <h2 className="form__title">Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                <div className="form__address">
                    <div className="pickupData">
                        <p className="dataTitle">Adres odbioru:</p>
                        <div className="data__box">
                            <label htmlFor="street">Ulica</label>
                            <input type="text" id="street"/>
                        </div>
                        <div className="data__box">
                            <label htmlFor="city">Miasto</label>
                            <input type="text" id="city"/>
                        </div>
                        <div className="data__box">
                            <label htmlFor="postCode">Kod pocztowy</label>
                            <input type="text" id="postCode"/>
                        </div>
                        <div className="data__box">
                            <label htmlFor="phone">Telefon</label>
                            <input type="text" id="phone"/>
                        </div>
                    </div>
                    <div className="timeData">
                        <p className="dataTitle">Termin odbioru:</p>
                        <div className="data__box">
                            <label htmlFor="date">Data</label>
                            <input type="text" id="date"/>
                        </div>
                        <div className="data__box">
                            <label htmlFor="time">Godzina</label>
                            <input type="text" id="time"/>
                        </div>
                        <div className="data__box">
                            <label htmlFor="note">Uwagi dla kuriera</label>
                            <textarea id="note"/>
                        </div>
                    </div>
                </div>
                <div className="sendStuffForm__buttons">
                    <button className="sendStuffForm__btn">Wstecz</button>
                    <button className="sendStuffForm__btn">Dalej</button>
                </div>
            </div>
        </>
    );
};

export default Address;