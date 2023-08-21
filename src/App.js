import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
        console.log(user.email);
      }
      setLoading(false)
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "password123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "password123")
      .then(({ user }) => {
        // Signed in
        console.log(user);
        setUser(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
    setUser(user);
    console.log(user);
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <>
      {loading ? (
        <>
          {user?.email  (
            "loading..."
          ) : (
            <button onClick={logout}>{user.email[0].toUpperCase()}</button>
          )}
        </>
      ) : (
        <>
          <button onClick={register}>Register</button>
          <button onClick={login}>login</button>
        </>
      )}
    </>
  );
}

export default App;
