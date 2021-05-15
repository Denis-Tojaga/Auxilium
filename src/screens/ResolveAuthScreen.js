import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { navigate } from "../helpers/navigation";
import * as firebase from "firebase";
import "firebase/firestore";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


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

        //console.log(subscriber);
        return subscriber; // unsubscribe on unmount
    });


    if (initializing)
        return <ActivityIndicator size="large"></ActivityIndicator>;

    //fix two errors on local sign in, and from menu to home screen


    return (
        <NavigationContainer>
            { !user ? navigate("loginFlow") : navigate("Menu")}
        </NavigationContainer>
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