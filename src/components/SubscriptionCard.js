import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");


const SubscriptionCard = ({ item }) => {

    return (
        <View style={styles.card}>
            <Text>{item.type}</Text>

        </View>
    );


};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        width: width * .65,
        height: height * .65,
        borderColor: "black",
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 22,
    }
});



export default SubscriptionCard;