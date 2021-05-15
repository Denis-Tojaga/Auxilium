import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { navigate } from "../helpers/navigation";
import "firebase/firestore";
import * as firebase from "firebase";


const ResolveAuthScreen = () => {

    // Set an initializing state whilst Firebase connects
    const [user, setUser] = useState(null);
    const [initializing, setInitializing] = useState(true);


    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing)
            setInitializing(false);
    }



    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        user ? navigate("Menu") : navigate("loginFlow");
        return subscriber; // unsubscribe on unmount
    }, []);


    if (initializing)
        return <ActivityIndicator size="large"></ActivityIndicator>;

    return null;
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