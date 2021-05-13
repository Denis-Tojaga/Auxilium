import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { navigate } from "../helpers/navigation";
import * as firebase from "firebase";
import "firebase/firestore";
import { ActivityIndicator } from "react-native";


const ResolveAuthScreen = () => {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);


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
        <View>
            { !user ? navigate("loginFlow") : navigate("Menu")}
        </View>
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