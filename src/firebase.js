import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoleuxDf5LFGqgL1d9LxrVQN5kvybD9X8",
    authDomain: "oddaj-rzeczy-2f419.firebaseapp.com",
    databaseURL: "https://oddaj-rzeczy-2f419-default-rtdb.firebaseio.com",
    projectId: "oddaj-rzeczy-2f419",
    storageBucket: "oddaj-rzeczy-2f419.appspot.com",
    messagingSenderId: "656442124744",
    appId: "1:656442124744:web:acfead251cc5670b8278fd"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();