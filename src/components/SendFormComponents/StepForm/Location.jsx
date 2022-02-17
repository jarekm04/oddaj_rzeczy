import React, {useState} from 'react';

const Location = ({showSelect, setShowSelect, handleShowSelect, register, watch}) => {
    const [city, setCity] = useState('');
    const cities = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];
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
                        {city ? city : "--wybierz--"}
                    </div>
                    <select size="5" className={showSelect ? "select-active" : "select-none"} onClick={handleShowSelect} {...register("localization", { required: true })}>
                        {cities.map((city) => (
                            <option key={city} value={city} onClick={() => setCity(city)}>
                                {city}
                            </option>
                        ))}
                    </select>
                    <div className="helpgroups">
                        <p className="helpgroups__title">Komu chcesz pomóc?</p>
                        <div className="helpgroups__squares">
                            <div className="square">
                                <input type="checkbox" id="check1" value="kids" {...register("helpgroups", {required: !optionalInput})}/>
                                <label htmlFor="check1">dzieciom</label>
                            </div>
                            <div className="square">
                                <input type="checkbox" id="check2" value="singleMothers" {...register("helpgroups", {required: !optionalInput})}/>
                                <label htmlFor="check2">samotnym matkom</label>
                            </div>
                            <div className="square">
                                <input type="checkbox" id="check3" value="homeless" {...register("helpgroups", {required: !optionalInput})}/>
                                <label htmlFor="check3">bezdomnym</label>
                            </div>
                            <div className="square">
                                <input type="checkbox" id="check4" value="disabled" {...register("helpgroups", {required: !optionalInput})}/>
                                <label htmlFor="check4">niepełnosprawnym</label>
                            </div>
                            <div className="square">
                                <input type="checkbox" id="check5" value="elderly" {...register("helpgroups", {required: !optionalInput})}/>
                                <label htmlFor="check5">osobom starszym</label>
                            </div>
                        </div>
                    </div>
                    <div className="organisation">
                        <p className="organisation__title">Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                        <input type="text" {...register("localizationSpecific")} />
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

export default Location;