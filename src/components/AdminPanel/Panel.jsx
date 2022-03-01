import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {ref, onValue} from "firebase/database";
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore";
import {auth, db, dbFireStore} from "../../firebase";

const Panel = () => {
    const [usersInfo, setUsersInfo] = useState([]);
    const [sendStuffForms, setSendStuffForms] = useState([]);
    const [contactforms, setContactForms] = useState([]);

    const navigate = useNavigate();
    const sendStuffFormsRef = collection(dbFireStore, "SendStuffForm");
    const contactFormsRef = collection(dbFireStore, "ContactForm")

    const handleDeleteGiveForm = (id) => {
        const docRef = doc(dbFireStore, "SendStuffForm", id);
        const filteredForms = sendStuffForms.filter((item) => item.id !== id);

        deleteDoc(docRef)
            .then(() => {
                setSendStuffForms(filteredForms);
            })
    }

    const handleDeleteContactForm = (id) => {
        const docRef = doc(dbFireStore, "ContactForm", id);
        const filteredForms = contactforms.filter((item) => item.id !== id);

        deleteDoc(docRef)
            .then(() => {
                setContactForms(filteredForms);
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
                navigate("/wylogowano");
            }
        });
        getDocs(sendStuffFormsRef)
            .then((snapshot) => {
                let forms = [];
                snapshot.docs.forEach((doc) => {
                    forms.push({...doc.data(), id: doc.id})
                })
                setSendStuffForms(forms);
            })
            .catch(err => {
                console.log(err.message);
            });
        getDocs(contactFormsRef)
            .then((snapshot) => {
                let forms = [];
                snapshot.docs.forEach((doc) => {
                    forms.push({...doc.data(), id: doc.id})
                })
                setContactForms(forms);
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
                    <h2 className="title">Użytkownicy</h2>
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
                <div className="sendStuffForms">
                    <h2 className="title">Formularze - Oddaj rzeczy</h2>
                    <hr/>
                    {
                        sendStuffForms.map((item, index) => (
                                <div className="form__box" key={index}>
                                    <p className="box__title">Nr formularza: {item.id}</p><br/>
                                    <p>Rzeczy: {item.stuff}, Ile worków: {item.bags},
                                        Lokalizacja: {item.localization ? item.localization : "Brak danych"},
                                        Komu? {item.helpgroups.map(el => el)}, Podano
                                        konkretnie: {item.localizationSpecific ? item.localizationSpecific : "Brak danych"}</p>
                                    <br/>
                                    <p>Dane wysyłającego: Ulica: {item.street}, Miasto: {item.city}, Kod
                                        pocztowy: {item.postCode}, Telefon: {item.phone}, Data odbioru: {item.date}, Godzina
                                        odbioru: {item.time}, Uwagi dla kuriera: {item.note ? item.note : "Brak danych"}</p>
                                    <br/>
                                    <button onClick={() => handleDeleteGiveForm(item.id)}>Usuń formularz</button>
                                </div>
                            )
                        )
                    }
                </div>
                <div className="contactForms">
                    <h2 className="title">Formularze kontaktowe</h2>
                    <hr/>
                    {
                        contactforms.map((item, index) => (
                            <div className="form__box" key={index}>
                                <p className="box__title">Nr formularza: {item.id}</p><br/>
                                <p>Imię: {item.name}, Email: {item.email}</p><br/>
                                <p>Treść: {item.message}</p><br/>
                                <button onClick={() => handleDeleteContactForm(item.id)}>Usuń formularz</button>
                            </div>
                        ))
                    }
                </div>
            </main>
        </section>
    );
};

export default Panel;