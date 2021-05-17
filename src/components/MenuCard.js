import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import * as firebase from "firebase";
import "firebase/firestore";



var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;


const colors2 = ["#F8B320", "#FAFAFA"];
const colors3 = ["#EC216A", "#FAFAFA"];






const MenuCard = ({ phobiaID }) => {

    const [state, setState] = useState(null);


    const info = () => {
        try {
            const database = firebase.firestore();
            database.collection("phobias").doc(phobiaID).get().then((document) => {
                const allInfo = document.data();
                firebase.storage().ref('/' + document.data().imgName).getDownloadURL().then((url) => {
                    //from url you can fetched the uploaded image easily
                    setState({ phobia: allInfo, imgURL: url });
                    console.log("Poslije infa!");
                    console.log(state);

                });
            });
        } catch (err) {
            Alert.alert("There is something wrong!", err.code);
        };
    };


    const callback = useCallback(() => {
        info();
        console.log(state);
    }, [state]);


    useEffect(() => {
        callback();
    }, []);





    return (
        <LinearGradient start={[0.5, 0.2]} end={[0.5, 1.1]} colors={["#408BC0", "#FAFAFA"]} style={styles.card} >

            <Text style={styles.title}>{state.phobia.name}</Text>
            <Text style={styles.description}>{state.phobia.description}</Text>

            <Image style={styles.image} source={{ uri: state.imgURL }} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enroll</Text>
                <Ionicons name="ios-play" style={styles.icon} />
            </TouchableOpacity>

        </LinearGradient>
    );

};



const styles = StyleSheet.create({
    card: {
        width: WIDTH * 0.85,
        height: HEIGHT * 0.25,
        backgroundColor: "blue",
        marginTop: 25,
        borderRadius: 25,
        paddingLeft: 15
    },

    title: {
        alignSelf: "flex-start",
        marginTop: 40,
        fontSize: 30,
        fontFamily: "TrendaSemibold",
        color: "#0E0E0E"
    },



    description: {
        fontSize: 20,
        fontFamily: "TrendaLight",
        color: "#0E0E0E"
    },


    image: {
        width: 65,
        height: 130,
        position: "absolute",
        right: 15,
        bottom: 25
    },

    button: {
        width: 90,
        height: 35,
        backgroundColor: "#14284D",
        borderRadius: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
    },

    buttonText: {
        fontFamily: "MoonBold",
        fontSize: 11,
        color: "#FFFF"
    },

    icon: {
        fontSize: 17,
        color: "#FFFF",
        marginLeft: 3
    }

});

export default MenuCard;