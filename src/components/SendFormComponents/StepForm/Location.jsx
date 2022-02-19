import React from 'react';

const Location = ({showSelect, setShowSelect, handleShowSelect, register, watch, getValues, handleMoveForward, moveForward, handleMoveBackward}) => {
    const cities = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];
    const helpgroups = ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym"];
    const optionalInput = watch('localizationSpecific');


    return (
        <>
            <div className="sendStuffForm__warn">
                <p className="warn__title">Ważne!</p>
                <p className="warn__subtitle">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
            </div>
            <div className="sendStuffForm__form">
                <p className="form__step">Krok 3/4</p>
                <h2 className="form__title">Lokalizacja:</h2>
                <div className="form__location">
                    <div className={showSelect ? "box rotateArrow" : "box"} onClick={handleShowSelect}>
                        {getValues("localization") ? getValues("localization") : "--wybierz-- (opcjonalnie)"}
                    </div>
                    <select size="5" className={showSelect ? "select-active" : "select-none"} onClick={handleShowSelect} {...register("localization", { required: true })}>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                    <div className="helpgroups">
                        <p className="helpgroups__title">Komu chcesz pomóc?</p>
                        <div className="helpgroups__squares">
                            {helpgroups.map((element, index) => (
                                <div className="square" key={index}>
                                    <input type="checkbox" id={`check${index}`} value={element} {...register("helpgroups", {required: !optionalInput})} />
                                    <label htmlFor={`check${index}`} className={!moveForward ? "error" : null}>{element}</label>
                                </div>
                            ))}
                        </div>
                        {!moveForward ? <p className="errorsMsg">Proszę wybrać co najmniej jedno pole</p> : null}
                    </div>
                    <div className="organisation">
                        <p className="organisation__title">Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                        <input type="text" {...register("localizationSpecific")} />
                    </div>
                </div>
                <div className="sendStuffForm__buttons">
                    <div className="sendStuffForm__btn" onClick={handleMoveBackward}>Wstecz</div>
                    <div className="sendStuffForm__btn" onClick={() => handleMoveForward("helpgroups")}>Dalej</div>
                </div>
            </div>
        </>
    );
};

export default Location;