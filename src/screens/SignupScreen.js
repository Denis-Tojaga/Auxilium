import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { navigate } from "../helpers/navigation";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { registration } from "../api/firebaseMethods";



const SignupScreen = ({ navigation }) => {


    //state for managing input fields
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //clearing all input fields
    const clearAllFields = () => {
        setFullName("");
        setEmail("");
        setPassword("");
    }


    //full name validation
    const checkFullName = () => {

        if (!fullName) {
            Alert.alert("Full name invalid", "Full name is required!");
            return false;
        } else if (fullName.length < 3) {
            Alert.alert("Full name invalid", "Full name must be at least 3 characters!");
            return false;
        }
        return true;
    };

    //email validation
    const checkEmail = () => {

        if (!email) {
            Alert.alert("Email invalid", "Email is required!");
            return false;
        }
        return true;
    };

    //password validation
    const checkPassword = () => {

        if (!password) {
            Alert.alert("Password invalid", "Password is required!");
            return false;
        } else if (password.length < 6) {
            Alert.alert("Password invalid", "Password must be at least 6 characters!");
            return false;
        }
        return true;
    };


    //new registration
    const handlePress = () => {

        //if any of rules aren't true we can't sign up
        if (!checkFullName() || !checkEmail() || !checkPassword())
            return;

        // if everything is fine we make new user registration to our database and navigate to menu screen
        registration(email, password, fullName);

        console.log("Registration is successful!");
        clearAllFields();
        navigate("Menu");
    };



    return (
        < LinearGradient start={[0.25, 0.35]} end={[0.8, 1.15]} colors={["#4D5C75", "#0E0E0E"]} style={styles.container} >
            {/*background container */}


            {/*header container */}
            <TouchableOpacity style={styles.touchableIcon} onPress={() => navigation.goBack()} >
                <Ionicons name="arrow-back-sharp" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Sign up to Auxilium</Text>



            {/*form container */}
            <LinearGradient style={styles.gradientInput} colors={["#E3E9F2", "#8A94A5"]} start={{ x: 0.6, y: 0.5 }} end={{ x: 1.0, y: 0.5 }} >
                <TextInput
                    style={styles.inputField}
                    placeholderTextColor="#091121"
                    placeholder="Full name"
                    value={fullName}
                    onChangeText={(newInput) => setFullName(newInput)}
                />
            </LinearGradient>

            <LinearGradient style={styles.gradientInput} colors={["#E3E9F2", "#8A94A5"]} start={{ x: 0.6, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}>
                <TextInput
                    style={styles.inputField}
                    placeholderTextColor="#091121"
                    placeholder="Email"
                    keyboardType={"email-address"}
                    autoCapitalize="none"
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
                    value={password}
                    onChangeText={(newInput) => setPassword(newInput)}
                />
            </LinearGradient>




            {/*footer container */}
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>SIGN UP</Text>
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




    //header
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
        marginTop: 30,
        marginBottom: 50,
        color: "#FAFAFA",
    },




    //form
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




    //footer
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


SignupScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}



export default SignupScreen;