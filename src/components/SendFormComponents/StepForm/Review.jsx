import React from 'react';
import icon1 from '../../../assets/Icon-1.svg';
import icon4 from '../../../assets/Icon-4.svg';

const Review = () => {
    return (
        <>
            <div className="sendStuffForm__form">
                <h2 className="form__title review">Podsumowanie Twojej darowizny</h2>
                <div className="form__review">
                    <section className="giftSummary">
                        <p className="giftSummary__title">Oddajesz:</p>
                        <div className="gift__item">
                            <img src={icon1} alt="tshirt"/>
                            <p className="icon-text">4 worki, ubrania w dobrym stanie, dzieciom</p>
                        </div>
                        <div className="gift__item">
                            <img src={icon4} alt="recycling"/>
                            <p className="icon-text">dla lokalizacji: Warszawa</p>
                        </div>
                    </section>
                    <section className="userDetails">
                        <div className="userDetails__address">
                            <p className="address__title">Adres odbioru:</p>
                            <div className="item">
                                <p className="item__name">Ulica</p>
                                <p className="item__data">Prosta 51</p>
                            </div>
                            <div className="item">
                                <p className="item__name">Miasto</p>
                                <p className="item__data">Warszawa</p>
                            </div>
                            <div className="item">
                                <p className="item__name">Kod pocztowy</p>
                                <p className="item__data">90-209</p>
                            </div>
                            <div className="item">
                                <p className="item__name">Numer telefonu</p>
                                <p className="item__data">473 839 483</p>
                            </div>
                        </div>
                        <div className="userDetails__date">
                            <p className="userDetails__title">Termin odbioru:</p>
                            <div className="item">
                                <p className="item__name">Data</p>
                                <p className="item__data">17.10.2019</p>
                            </div>
                            <div className="item">
                                <p className="item__name">Godzina</p>
                                <p className="item__data">17:30</p>
                            </div>
                            <div className="item">
                                <p className="item__name">Uwagi dla kuriera</p>
                                <p className="item__data">...</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="sendStuffForm__buttons">
                    <div className="sendStuffForm__btn">Wstecz</div>
                    <button type="submit" className="sendStuffForm__btn">Potwierdzam</button>
                </div>
            </div>
        </>
    );
};

export default Review;