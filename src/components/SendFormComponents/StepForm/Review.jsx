import React from 'react';
import icon1 from '../../../assets/Icon-1.svg';
import icon4 from '../../../assets/Icon-4.svg';

const Review = ({getValues, moveForward, handleMoveForward, handleMoveBackward, navigation}) => {
    const bags = getValues("bags");
    const stuff = getValues("stuff");
    const helpgroups = getValues("helpgroups");
    const localizationSpecific = getValues("localizationSpecific");
    const localization = getValues("localization");
    const street = getValues("street");
    const city = getValues("city");
    const postCode = getValues("postCode");
    const phone = getValues("phone");
    const date = getValues("date");
    const time = getValues("time");
    const note = getValues("note");

    return (
        <>
            <div className="sendStuffForm__form">
                <h2 className="form__title review">Podsumowanie Twojej darowizny</h2>
                <div className="form__review">
                    <section className="giftSummary">
                        <p className="giftSummary__title">Oddajesz:</p>
                        <div className="gift__item">
                            <img src={icon1} alt="tshirt"/>
                            <p className="icon-text">
                                {`${bags} ${bags === "1"? "worek" : "worki"}, ${stuff}, ${localizationSpecific}${helpgroups.length && localizationSpecific? ", " : ""}${helpgroups.join(", ")}`}
                            </p>
                        </div>
                        <div className="gift__item">
                            <img src={icon4} alt="recycling"/>
                            <p className="icon-text">{`dla lokalizacji: ${localization? localization : "brak"}`}</p>
                        </div>
                    </section>
                    <section className="userDetails">
                        <div className="userDetails__address">
                            <p className="address__title">Adres odbioru:</p>
                            <div className="item">
                                <p className="item__name">Ulica</p>
                                <p className="item__data">{street}</p>
                            </div>
                            <div className="item">
                                <p className="item__name">Miasto</p>
                                <p className="item__data">{city}</p>
                            </div>
                            <div className="item">
                                <p className="item__name">Kod pocztowy</p>
                                <p className="item__data">{postCode}</p>
                            </div>
                            <div className="item">
                                <p className="item__name">Numer telefonu</p>
                                <p className="item__data">{phone}</p>
                            </div>
                        </div>
                        <div className="userDetails__date">
                            <p className="userDetails__title">Termin odbioru:</p>
                            <div className="item">
                                <p className="item__name">Data</p>
                                <p className="item__data">{date}</p>
                            </div>
                            <div className="item">
                                <p className="item__name">Godzina</p>
                                <p className="item__data">{time}</p>
                            </div>
                            <div className="item">
                                <p className="item__name">Uwagi dla kuriera</p>
                                <p className="item__data">{note}</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="sendStuffForm__buttons">
                    <div className="sendStuffForm__btn" onClick={handleMoveBackward}>Wstecz</div>
                    <button type="submit" className="sendStuffForm__btn">Potwierdzam</button>
                </div>
            </div>
        </>
    );
};

export default Review;