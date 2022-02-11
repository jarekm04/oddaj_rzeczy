import React, {useEffect} from 'react';
import Header from "./Header";
import {auth} from "../firebase";

const GiveStuffForm = ({isUserLogged, setIsUserLogged}) => {



    return (
        <>
            <form className="giveStuffForm">
                <h1>Eloszka</h1>
            </form>
        </>
    );
};

export default GiveStuffForm;