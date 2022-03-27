import {createContext, useEffect, useState} from "react";

import {auth, onAuthStateChanged, db} from "../config/Firebase";
import {collection, addDoc, setDoc} from "@firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
    const [currentUser,
        setCurrentUser] = useState(localStorage.getItem("userEmail"));
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function postUserToDb(email, UID, username) {
        try {
            const docRef = await setDoc(doc(db, "users", email), {
                name: username,
                email: email,
                UID: UID
            });
            console.log("user added with docID", docRef.id);
        } catch (err) {
            console.error("Error adding document: ", err);
        }
    }

    async function signUp(email, password, username) {
        try {
            setError("");
            setLoading(true);
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const setDisplayName = await updateProfile(auth.currentUser, {displayName: username});
            postUserToDb(email, response.user.uid, username);
            navigate("/login");
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
        setLoading(false);
    }

    async function logIn(email, password) {
        try {
            setLoading(true);
            setError("");
            const response = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("userEmail", response.user.email);
            navigate("/home");
            console.log(response.user);
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
        setLoading(false);
    }

    async function logout() {
        try {
            setLoading(true);
            setError("");
            const response = signOut(auth);
            console.log(response);
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(" at authProvider use Effect", user);
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
            currentUser,
            setCurrentUser,
            signUp,
            logIn,
            logout,
            error,
            loading
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
