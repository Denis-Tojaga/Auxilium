import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";



const PaymentMethod = ({ image }) => {

    const renderContent = () => {
        if (image == "card")
            return <View style={styles.card}>
                <Image style={{ width: 65, height: 55, resizeMode: "contain" }} source={require("../images/card.png")} />
                <Text style={styles.description}>Credit/debit card</Text>
            </View>
        else if (image == "amazonPay")
            return <View style={styles.card}>
                <Image style={{ width: 65, height: 55, resizeMode: "contain" }} source={require("../images/amazonPay.png")} />
                <Text style={styles.description}>amazonPay</Text>
            </View>
        else if (image == "paypal")
            return <View style={styles.card}>
                <Image style={{ width: 65, height: 55, resizeMode: "contain" }} source={require("../images/paypal.png")} />
                <Text style={styles.description}>amazonPay</Text>
            </View>
    };
    return renderContent();
};



const styles = StyleSheet.create({

    card: {
        width: 280,
        height: 60,
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
        alignItems: "center",
        flexDirection: "row",
        marginTop: 2
    },

    description: {
        width: 170,
        height: 35,
        fontSize: 22,
        fontFamily: "TrendaLight",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginTop: 10,
    },


});


export default PaymentMethod;