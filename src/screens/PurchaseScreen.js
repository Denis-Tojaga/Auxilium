import React from "react";
import { StyleSheet, Text, Dimensions, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import PaymentMethod from "../components/PaymentMethod";



const { width, height } = Dimensions.get("screen");

const PurchaseScreen = ({ navigation }) => {

    const item = navigation.getParam("object");


    return (
        <LinearGradient start={[-0.6, -0.3]} end={[0.8, 0.5]} colors={["#408BC0", "#0F2F6A"]} style={styles.container} >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Ionicons name="arrow-back-sharp" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Payment methods</Text>
            </View>

            <View style={styles.floatingContainer}>
                <View style={styles.addNewButton}>
                    <Text style={{ fontSize: 40 }}>+</Text>
                </View>

                <View style={styles.flatListContainer}>

                </View>

            </View>

            <View style={styles.middleContainer}>
                <Text style={{ fontFamily: "TrendaLight", fontSize: 18, color: "black", opacity: .8, marginRight: width * .2 }}>Other payment methods</Text>
                <PaymentMethod image="card" />
                <PaymentMethod image="amazonPay" />
                <PaymentMethod image="paypal" />
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.buttonBuy}>
                    <Text>Buy</Text>
                    <AntDesign name="arrowright" size={26} color="black" />
                </View>

                <View style={styles.details}>
                    <Text style={{ fontSize: 21, color: "white", fontFamily: "TrendaRegular" }}>{item.price}</Text>
                </View>
            </View>

        </LinearGradient>
    );

};



const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width,
        height: height * .15,
    },

    icon: {
        fontSize: 40,
        marginLeft: 15,
        color: "white"
    },

    headerText: {
        marginRight: 45,
        fontSize: 30,
        color: "white",
        fontFamily: "TrendaRegular"
    },

    floatingContainer: {
        position: "absolute",
        flexDirection: "row",
        width: width,
        height: height * .25,
        borderWidth: 1,
        borderColor: "black",
        top: height * .15,
        zIndex: 1
    },



    middleContainer: {
        position: "absolute",
        bottom: height * .1,
        width: width,
        height: height * .5,
        borderColor: "black",
        borderWidth: 4,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 45,
    },

    bottomContainer: {
        position: "absolute",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        width: width,
        height: height * .17,
        bottom: 0,
        backgroundColor: "#0F2F6A",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    addNewButton: {
        backgroundColor: "white",
        width: 60,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: width * .1,
        shadowColor: "black",
        shadowOffset: {
            width: 3,
            height: 5
        },
        shadowOpacity: .7,
        shadowRadius: 7,
        borderRadius: 12,
    },


    flatListContainer: {
        width: "70%",
        height: "100%",
        marginLeft: 30,
        borderColor: "black",
        borderWidth: 1
    },


    buttonBuy: {
        width: 130,
        height: 50,
        backgroundColor: "white",
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 60
    },


    details: {
        position: "absolute",
        right: 30
    }

});


PurchaseScreen.navigationOptions = {
    headerShown: false
}



export default PurchaseScreen;