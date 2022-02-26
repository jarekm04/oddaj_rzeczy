import React, {useEffect, useState} from 'react';
import {onSnapshot, collection} from "firebase/firestore"
import {db, dbFireStore} from "../../firebase";
import {set, ref, get, onValue, child, push, remove} from "firebase/database";
import {getDatabase} from "firebase/database";

const Panel = () => {
    const [usersInfo, setUsersInfo] = useState([]);

    const dbRef = ref(db);
    useEffect(
        () => {
            get(child(dbRef, "UsersData")).then((snapshot) => {
                let list = [];
                snapshot.forEach(childSnapshot => {
                    list.push(childSnapshot.val());
                });
                setUsersInfo(list);
            });
        }, []);

    const handleDeleteUser = (item) => {
        console.log(item)
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