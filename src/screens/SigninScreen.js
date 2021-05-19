import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { navigate } from "../helpers/navigation";
import { signIn } from "../api/firebaseMethods";




const SigninScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const clearAllFields = () => {
        setEmail("");
        setPassword("");
    };


    //sign in on press
    const handlePress = () => {

        if (!email || !password)
            return;

        //if fields are successful we signIn with input credentials
        signIn(email, password).then((result) => {
            if (result) {
                clearAllFields();
                navigate("OnBoard");
            } else {
                console.log("Sign in failed!");
            }
        });

    };










    return (

        < LinearGradient start={[0.25, 0.35]} end={[0.8, 1.15]} colors={["#4D5C75", "#0E0E0E"]} style={styles.container} >
            {/*background container */}


            {/*header container */}
            <TouchableOpacity style={styles.touchableIcon} onPress={() => navigation.goBack()} >
                <Ionicons name="arrow-back-sharp" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Sign in to Auxilium</Text>


            {/*form container */}
            <LinearGradient style={styles.gradientInput} colors={["#E3E9F2", "#8A94A5"]} start={{ x: 0.6, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}>
                <TextInput
                    style={styles.inputField}
                    placeholderTextColor="#091121"
                    placeholder="Email"
                    keyboardType={"email-address"}
                    autoCorrect={false}
                    autoCapitalize={"none"}
                    value={email}
                    onChangeText={(newInput) => setEmail(newInput)}
                />
            </LinearGradient>

            <LinearGradient style={styles.gradientInput} colors={["#E3E9F2", "#8A94A5"]} start={{ x: 0.6, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}>
                <TextInput
                    style={styles.inputField}
                    secureTextEntry={true}
                    placeholderTextColor="#091121"
                    placeholder="Password"
                    autoCorrect={false}
                    textContentType={"none"}
                    value={password}
                    onChangeText={(newInput) => {
                        setPassword(newInput);
                    }}
                />


            </LinearGradient>





            {/*footer container */}
            <Text style={styles.passwordText}>Forgot password?</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>


        </LinearGradient >
    );

};





const styles = StyleSheet.create({


    //containers 
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },



    //header section
    touchableIcon: {
        alignSelf: "flex-start",
        marginTop: 15,
    },

    icon: {
        color: "#FAFAFA",
        fontFamily: "MoonLight",
        fontSize: 38,
    },

    headerText: {
        fontFamily: "MoonLight",
        fontSize: 28,
        marginTop: 25,
        marginBottom: 35,
        color: "#FAFAFA",
    },




    //form section
    inputField: {
        width: 340,
        height: 65,
        borderRadius: 18,
        fontSize: 20,
        fontFamily: "TrendaLight",
        paddingLeft: 30
    },

    gradientInput: {
        width: 340,
        height: 65,
        borderRadius: 18,
        marginBottom: 21,
    },



    //footer section
    passwordText: {
        alignSelf: "flex-end",
        fontFamily: "TrendaRegular",
        fontSize: 15,
        color: "#FAFAFA"
    },

    buttonText: {
        alignSelf: "center",
        fontSize: 23,
        fontFamily: "MoonLight",
        color: "white"
    },

    button: {
        width: 340,
        height: 60,
        backgroundColor: "#1F88F1",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        marginTop: 10
    },

});



SigninScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}


export default SigninScreen;