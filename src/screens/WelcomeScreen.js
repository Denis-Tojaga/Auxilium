import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";


const WelcomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../images/welcome.png")} />
            </View>

            <View style={styles.form}>

                <Text style={styles.header1}>WELCOME</Text>
                <Text style={styles.header2}>to the Auxilium App</Text>

                <TouchableOpacity style={styles.authButton1} onPress={() => navigation.navigate("Signin")}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.authButton2} onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};



const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
    },

    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "55%",
    },

    image: {
        width: "80%",
        height: "86%",
        marginTop: 25,
    },


    form: {
        width: "88%",
        height: "40%",
        alignItems: "center"
    },

    header1: {
        fontFamily: "TrendaLight",
        fontSize: 60
    },

    header2: {
        fontFamily: "TrendaLight",
        fontSize: 28,
    },

    authButton1: {
        width: 330,
        height: 64,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        marginTop: 12,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
    },

    authButton2: {
        width: 330,
        height: 64,
        backgroundColor: "#1B79D7",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        marginTop: 12,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
    },

    buttonText: {
        fontFamily: "MoonLight",
        fontSize: 20
    }


});


WelcomeScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}




export default WelcomeScreen;