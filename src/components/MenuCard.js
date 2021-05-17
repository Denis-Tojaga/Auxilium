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







const MenuCard = ({ imgUrl }) => {

    console.log(imgUrl);

    return (
        <Image style={styles.image} source={{ uri: imgUrl }} />
    );

};



const styles = StyleSheet.create({
    image: {
        width: 65,
        height: 130,
        position: "absolute",
        right: 15,
        bottom: 25
    },
});

export default MenuCard;