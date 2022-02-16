import React from 'react';
import decoration from "../../../assets/Decoration.svg";

const Submit = () => {
    return (
        <div className="form__submit">
            <h1 className="submit__title">Dziękujemy za przesłanie formularza<br/>Na maila prześlemy wszelkie informacje o odbiorze.</h1>
            <img src={decoration} alt="decoration" className="decoration"/>
        </div>
    );
};

export default Submit;