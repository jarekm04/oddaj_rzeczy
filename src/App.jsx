import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeMain from "./components/HomeComponents/HomeMain";
import Login from "./components/LoginComponents/Login";
import Register from "./components/LoginComponents/Register";
import Logout from "./components/LoginComponents/Logout";
import GiveStuff from "./components/SendFormComponents/GiveStuff";
import Header from "./components/HomeComponents/Header";
import {auth} from "./firebase";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);

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
    });
  }, []);

  return (
    <>
      <Router>
        <Header isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged} />
        <Routes>
          <Route path="/" element={<HomeMain isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged}/>} />
          <Route path="/logowanie" element={<Login setIsUserLogged={setIsUserLogged} userEmail={values.userEmail} userPassword={values.userPassword} />} />
          <Route path="/rejestracja" element={<Register setIsUserLogged={setIsUserLogged} registerEmail={values.registerEmail} registerPassword={values.registerPassword} registerConfirmPassword={values.registerConfirmPassword} />} />
          <Route path="/wylogowano" element={<Logout />} />
          <Route path="/oddaj-rzeczy" element={<GiveStuff />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
