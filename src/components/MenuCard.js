import React from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';


var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;


const colors2 = ["#F8B320", "#FAFAFA"];
const colors3 = ["#EC216A", "#FAFAFA"];


const MenuCard = ({ cardTitle, cardDesc }) => {

    return (
        <LinearGradient start={[0.5, 0.2]} end={[0.5, 1.1]} colors={["#408BC0", "#FAFAFA"]} style={styles.card} >

            <Text style={styles.title}>{cardTitle}</Text>
            <Text style={styles.description}>{cardDesc}</Text>

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