import React from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const { width, height } = Dimensions.get("screen");

const PurchaseScreen = () => {

    return (
        <Text style={styles.title}>Subscription packages</Text>
    );

};



const styles = StyleSheet.create({


});



export default PurchaseScreen;