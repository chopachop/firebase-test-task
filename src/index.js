import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAO4iM3SzxTxSPJXozYgGK_SRhfpnmPJ-Y",
    authDomain: "test-login-task.firebaseapp.com",
    projectId: "test-login-task",
    storageBucket: "test-login-task.appspot.com",
    messagingSenderId: "640489852453",
    appId: "1:640489852453:web:36f8b6775ada115b4179cc",
    measurementId: "G-MG6D65E7D0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();


ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          firebase,
          auth,
          firestore
      }}>

          <BrowserRouter>
              <App />
          </BrowserRouter>

      </Context.Provider>

  </React.StrictMode>,

  document.getElementById('root')
);

