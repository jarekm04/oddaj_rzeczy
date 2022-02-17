import React from 'react';

const Address = ({register}) => {
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
                            <input type="text" id="street" {...register("street", {required: true, min: 2})}/>
                        </div>
                        <div className="data__box">
                            <label htmlFor="city">Miasto</label>
                            <input type="text" id="city" {...register("city", {required: true, min: 2})}/>
                        </div>
                        <div className="data__box">
                            <label htmlFor="postCode">Kod pocztowy</label>
                            <input type="text" id="postCode" {...register("postCode", {required: true, pattern: "{2}-{3}"})}/>
                        </div>
                        <div className="data__box">
                            <label htmlFor="phone">Telefon</label>
                            <input type="number" id="phone" {...register("phone", {required: true, minLength: 9, maxLength: 9})}/>
                        </div>
                    </div>
                    <div className="timeData">
                        <p className="dataTitle">Termin odbioru:</p>
                        <div className="data__box">
                            <label htmlFor="date">Data</label>
                            <input type="date" id="date" {...register("date", {required: true})}/>
                        </div>
                        <div className="data__box">
                            <label htmlFor="time">Godzina</label>
                            <input type="time" id="time" {...register("time", {required: true})}/>
                        </div>
                        <div className="data__box">
                            <label htmlFor="note">Uwagi dla kuriera</label>
                            <textarea id="note" {...register("note", {})}/>
                        </div>
                    </div>
                </div>
                <div className="sendStuffForm__buttons">
                    <div className="sendStuffForm__btn">Wstecz</div>
                    <div className="sendStuffForm__btn">Dalej</div>
                </div>
            </div>
        </>
    );
};

export default Address;