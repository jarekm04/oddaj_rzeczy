import React, {useEffect, useState} from 'react';
import {auth, db, dbFireStore} from "../../firebase";
import {set, ref, get, onValue, child, push, remove} from "firebase/database";

const Panel = () => {
    const [usersInfo, setUsersInfo] = useState([]);

    useEffect(() => { //
        auth.onAuthStateChanged(() => {
                onValue(ref(db, `UsersData`), (snapshot) => {
                    setUsersInfo([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        Object.values(data).map((item) => {
                            setUsersInfo((oldArray) => [...oldArray, item]);
                        });
                    }
                });
        });
    }, []);

    const handleDeleteUser = (item) => {
        remove(ref(db, `/UsersData/${item.uid}`));
    };

    return (
        <section className="panel">
            <h1 className="panel__title">ADMIN PANEL</h1>
            <main className="main">
                <div className="users">
                    <h2 className="users__title">Użytkownicy</h2>
                    <hr/>
                    {
                        usersInfo.map((item, index) => (
                            <div className="user__name" key={index}>
                                <p>Email: {item.email}<br/>ID: {item.uid}</p>
                                <button>Edytuj email</button><button onClick={() => handleDeleteUser(item)}>Usuń użytkownika</button>
                            </div>
                            )
                        )
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