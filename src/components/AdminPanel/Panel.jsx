import React, {useEffect, useState} from 'react';
import {db} from "../../firebase";
import {set, ref, get, onValue, child, push} from "firebase/database";
import {getDatabase} from "firebase/database";

const Panel = () => {
    const [usersInfo, setUsersInfo] = useState([]);


    return (
        <section className="panel">
            <h1 className="panel__title">ADMIN PANEL</h1>
            <main className="main">
                <div className="users">
                    <h2 className="users__title">Użytkownicy</h2>
                    <hr/>
                    {
                        usersInfo.map((item, index) => <h1>{item}{index}</h1>)
                    }
                </div>
                <div className="organizations">
                    <h2 className="organizations__title">Organizacje</h2>
                    <hr/>
                </div>
            </main>
        </section>
    );
};

export default Panel;