import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import * as firebase from "firebase";
import "firebase/firestore";
import { useEffect } from "react/cjs/react.development";
import { set } from "react-native-reanimated";


var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;


const colors2 = ["#F8B320", "#FAFAFA"];
const colors3 = ["#EC216A", "#FAFAFA"];










const MenuCard = ({ phobiaID }) => {


    //collor code must be added to phobia

    const database = firebase.firestore();
    const [phobia, setPhobia] = useState(null);


    useEffect(() => {
        database.collection("phobias").doc(phobiaID).get().then((document) => {
            console.log(document.data());
            setPhobia(document.data());
        }).catch((err) => {
            console.log(err);
        });
    }, []);




    //figure out how to display image and color gradient for different phobias

    // const displayImage = (imageName) => {
    //     if (imageName == "FearHeights.png")
    //         return <Image source={require("../images/FearHeights.png")} style={styles.image} />
    //     else if (imageName == "FearFlying.png")
    //         return <Image source={require("../images/FearFlying.png")} style={styles.image} />
    //     else if (imageName == "FearSpiders.png")
    //         return <Image source={require("../images/FearSpiders.png")} style={styles.image} />
    // };



    return (
        <LinearGradient start={[0.5, 0.2]} end={[0.5, 1.1]} colors={["#408BC0", "#FAFAFA"]} style={styles.card} >

            <Text style={styles.title}>{phobia.name}</Text>
            <Text style={styles.description}>{phobia.description}</Text>

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
        width: 60,
        height: 110,
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