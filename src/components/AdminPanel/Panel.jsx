import React, {useEffect, useState} from 'react';
import {auth, db, dbFireStore} from "../../firebase";
import {set, ref, get, onValue, child, push, remove} from "firebase/database";
import {useNavigate} from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const Panel = () => {
    const [usersInfo, setUsersInfo] = useState([]);
    const [formsInfo, setFormsInfo] = useState([]);
    const navigate = useNavigate();
    const colsRef = collection(dbFireStore, "SendStuffForm");

    const handleDeleteForm = (id) => {
        const docRef = doc(dbFireStore, "SendStuffForm", id);
        const filteredForms = formsInfo.filter((item) => item.id !== id);

        deleteDoc(docRef)
            .then(() => {
                setFormsInfo(filteredForms);
            })
    }

    useEffect(() => { //
        auth.onAuthStateChanged((user) => { //updating users from realtime database
                onValue(ref(db, `UsersData`), (snapshot) => {
                    setUsersInfo([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        Object.values(data).map((item) => {
                            setUsersInfo((oldArray) => [...oldArray, item]);
                        });
                    }
                });
                if (!user || user.uid !== "BejEMfotV7ZEcCuPWvNLnXnebuI2") { //if user isnt admin -> go to homepage
                    navigate("/");
                }
        });
        getDocs(colsRef)
            .then((snapshot) => {
                let forms = [];
                snapshot.docs.forEach((doc) => {
                    forms.push({ ...doc.data(), id: doc.id })
                })
                setFormsInfo(forms);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);

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
                            </div>
                            )
                        )
                    }
                </div>
                <div className="organizations">
                    <h2 className="organizations__title">Organizacje</h2>
                    <hr/>
                </div>
                <div className="forms">
                    <h2 className="organizations__title">Formularze</h2>
                    <hr/>
                    {
                        formsInfo.map((item, index) => (
                            <div className="form__box" key={index}>
                                <p className="box__title">Nr formularza: {item.id}</p><br/>
                                <p>Rzeczy: {item.stuff}, Ile worków: {item.bags}, Lokalizacja: {item.localization ? item.localization : "Brak danych"}, Komu? {item.helpgroups.map(el => el)}, Podano konkretnie: {item.localizationSpecific ? item.localizationSpecific : "Brak danych"}</p><br/>
                                <p>Dane wysyłającego: Ulica: {item.street}, Miasto: {item.city}, Kod pocztowy: {item.postCode}, Telefon: {item.phone}, Data odbioru: {item.date}, Godzina odbioru: {item.time}, Uwagi dla kuriera: {item.note? item.note : "Brak danych"}</p><br/>
                                <button onClick={() => handleDeleteForm(item.id)}>Usuń formularz</button>
                            </div>
                            )
                        )
                    }
                </div>
            </main>
        </section>
    );
};

export default Panel;