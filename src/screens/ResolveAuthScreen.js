import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { navigate } from "../helpers/navigation";
import * as firebase from "firebase";


const ResolveAuthScreen = () => {





    useEffect(() => {
        var isMounted = true;

        firebase.auth().onAuthStateChanged(user => {
            if (user != null) {
                console.log('We are authenticated now!');
                navigate("Menu");
            } else {
                navigate("loginFlow");
            }

        });

        return () => { isMounted = false; }
    });

    return null;
};


export default ResolveAuthScreen;