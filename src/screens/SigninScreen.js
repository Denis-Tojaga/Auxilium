import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const SigninScreen = () => {

    return (
        <View style={styles.container}>
            <Ionicons name="arrow-back-sharp" style={styles.icon} />

            <Text style={styles.header}>Sign in to Auxilium</Text>

            <View style={styles.form}>
                <TextInput style={styles.inputField} />
                <TextInput style={styles.inputField} />
            </View>
            <Text style={styles.password}>Forgot password?</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>

        </View>
    );

};



const styles = StyleSheet.create({

    container: {
        borderWidth: 5,
        borderColor: "black",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 20
    },


    icon: {
        color: "black",
        fontFamily: "MoonLight",
        fontSize: 38,
        alignSelf: "flex-start",
        marginTop: 15,
    },

    header: {
        fontFamily: "MoonLight",
        fontSize: 30,
        marginTop: 25,
    },

    form: {
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        height: "28%",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20
    },

    inputField: {
        backgroundColor: "blue",
        width: "100%",
        height: 65,
        marginBottom: 41,
        borderRadius: 18
    },

    password: {
        alignSelf: "flex-end",
        fontFamily: "TrendaLight",
        fontSize: 15
    },

    buttonText: {
        alignSelf: "center",
        fontSize: 23,
        fontFamily: "MoonLight"
    },

    button: {
        width: 330,
        height: 60,
        backgroundColor: "#1B79D7",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        marginTop: 20
    }



});



SigninScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}


export default SigninScreen;