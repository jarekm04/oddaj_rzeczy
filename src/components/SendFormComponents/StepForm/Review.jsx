import React from 'react';

const Review = () => {
    return (
        <>
            <div className="sendStuffForm__warn">
                <p className="warn__title">Ważne!</p>
                <p className="warn__subtitle">Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <div className="sendStuffForm__form">
                <h2 className="form__title review">Podsumowanie Twojej darowizny</h2>
                <div className="form__review">
                    <section className="giftSummary">
                        <p className="giftSummary__title">Oddajesz:</p>
                        
                    </section>
                </div>
                <div className="sendStuffForm__buttons">
                    <button className="sendStuffForm__btn">Wstecz</button>
                    <button className="sendStuffForm__btn">Potwierdzam</button>
                </div>
            </div>
        </>
    );
};

export default Review;