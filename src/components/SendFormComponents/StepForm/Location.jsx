import React from 'react';

const Location = ({showSelect, setShowSelect, handleShowSelect}) => {
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
                        --wybierz--
                    </div>
                    <select size="5" className={showSelect ? "select-active" : "select-none"} onClick={handleShowSelect}>
                        <option value="poznan">Poznań</option>
                        <option value="warszawa">Warszawa</option>
                        <option value="krakow">Kraków</option>
                        <option value="wroclaw">Wrocław</option>
                        <option value="katowice">Katowice</option>
                    </select>
                    <div className="helpgroups">
                        <p className="helpgroups__title">Komu chcesz pomóc?</p>
                        <div className="helpgroups__squares">
                            <div className="square">
                                <input type="checkbox" id="check1"/>
                                <label htmlFor="check1">dzieciom</label>
                            </div>
                            <div className="square">
                                <input type="checkbox" id="check2"/>
                                <label htmlFor="check2">samotnym matkom</label>
                            </div>
                            <div className="square">
                                <input type="checkbox" id="check3"/>
                                <label htmlFor="check3">bezdomnym</label>
                            </div>
                            <div className="square">
                                <input type="checkbox" id="check4"/>
                                <label htmlFor="check4">niepełnosprawnym</label>
                            </div>
                            <div className="square">
                                <input type="checkbox" id="check5"/>
                                <label htmlFor="check5">osobom starszym</label>
                            </div>
                        </div>
                    </div>
                    <div className="organisation">
                        <p className="organisation__title">Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                        <input type="text"/>
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