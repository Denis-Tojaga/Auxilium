import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native";


const { width, height } = Dimensions.get("screen");

const ConfirmPurchaseScreen = ({ navigation }) => {

    const packageName = navigation.getParam("package");

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={{ width: width, height: 330, resizeMode: "contain" }} source={require("../images/payment.png")} />
            </View>
            <View style={styles.info}>
                <Text style={styles.infoH1}>Payment successful</Text>
                <Text style={styles.infoP}>You have successfully purchased the "{packageName}" package. Tap bellow to unlock it.</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonUnlock}>
                    <Text style={{ fontSize: 19, fontFamily: "TrendaSemibold", color: "white" }}>Unlock {packageName} here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSkip}>
                    <Text style={{ fontSize: 19, fontFamily: "TrendaSemibold", color: "#1F3C72" }}>Skip for now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    imageContainer: {
        width: width,
        height: height * .5,
        borderWidth: 1,
        borderColor: "black"
    },

    info: {
        width: width,
        height: height * .2,
        alignItems: "center"
    },

    infoH1: {
        fontSize: 30,
        fontFamily: "TrendaSemibold",
        marginBottom: 5
    },

    infoP: {
        fontSize: 20,
        fontFamily: "TrendaLight",
        marginHorizontal: width * .1,
        textAlign: "center"
    },

    buttonsContainer: {
        width: width,
        height: height * .22,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 20,
        alignItems: "center"
    },

    buttonUnlock: {
        width: width * .6,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#1F3C72",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },


    buttonSkip: {
        width: width * .45,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#E4E1E1",
        justifyContent: "center",
        alignItems: "center",
    }

});


ConfirmPurchaseScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}


export default ConfirmPurchaseScreen;