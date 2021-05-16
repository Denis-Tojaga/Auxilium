import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";


var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;


const MenuCard = ({ cardTitle, cardDesc }) => {

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{cardTitle}</Text>
            <Text style={styles.description}>{cardDesc}</Text>
        </View>
    );

};



const styles = StyleSheet.create({
    card: {
        width: WIDTH * 0.85,
        height: HEIGHT * 0.25,
        backgroundColor: "blue",
        marginTop: 25,
        borderRadius: 25,
        paddingLeft: 20,
    },

    title: {
        alignSelf: "flex-start",
        marginTop: 40,
        fontSize: 35,
        fontFamily: "TrendaSemiBold",
        color: "#0E0E0E"
    },

    description: {
        fontSize: 22,
        fontFamily: "TrendaLight",
        color: "#0E0E0E"
    }

});

export default MenuCard;