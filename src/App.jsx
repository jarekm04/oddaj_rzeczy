import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {auth} from "./firebase";
import Header from "./components/HomeComponents/Header";
import Welcome from "./components/HomeComponents/Welcome";
import Login from "./components/LoginComponents/Login";
import Register from "./components/LoginComponents/Register";
import Logout from "./components/LoginComponents/Logout";
import GiveStuff from "./components/SendFormComponents/GiveStuff";
import Panel from "./components/AdminPanel/Panel";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isAdminLogged, setIsAdminLogged] = useState(false);

  const [values, setValues] = useState({
    userEmail: '',
    userPassword: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmPassword: ''
  })

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUserLogged(true);
      }
      if (user.uid === "BejEMfotV7ZEcCuPWvNLnXnebuI2") {
        setIsAdminLogged(true);
        console.log("zalogowany admin");
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Header isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged} isAdminLogged={isAdminLogged} setIsAdminLogged={setIsAdminLogged} />
        <Routes>
          <Route path="/" element={<Welcome isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged}/>} />
          <Route path="/logowanie" element={<Login setIsUserLogged={setIsUserLogged} userEmail={values.userEmail} userPassword={values.userPassword} />} />
          <Route path="/rejestracja" element={<Register setIsUserLogged={setIsUserLogged} registerEmail={values.registerEmail} registerPassword={values.registerPassword} registerConfirmPassword={values.registerConfirmPassword} />} />
          <Route path="/wylogowano" element={<Logout />} />
          <Route path="/oddaj-rzeczy" element={<GiveStuff />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
