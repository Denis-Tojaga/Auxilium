import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { navigate } from "../helpers/navigation";
import * as firebase from "firebase";
import "firebase/firestore";
import { signIn } from "../api/firebaseMethods";


const ResolveAuthScreen = () => {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    if (initializing) return null;

    return (
        <>
            {!user ? navigate("loginFlow") : navigate("Menu")}
        </>

    );
};


export default ResolveAuthScreen;

















// useEffect(() => {
//     var isMounted = true;
//     firebase.auth().onAuthStateChanged(user => {
//         if (user != null) {
//             navigate("Menu");
//         } else {
//             navigate("loginFlow");
//         }
//     });

//     return () => { isMounted = false; }
// });

// return null;