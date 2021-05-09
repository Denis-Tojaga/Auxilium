import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { navigate } from "../helpers/navigation";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';



const SignupScreen = ({ navigation }) => {

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
                <TextInput placeholderTextColor="#091121" placeholder="Full name" style={styles.inputField} />
            </LinearGradient>

            <LinearGradient style={styles.gradientInput} colors={["#E3E9F2", "#8A94A5"]} start={{ x: 0.6, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}>
                <TextInput placeholderTextColor="#091121" placeholder="Email" style={styles.inputField} />
            </LinearGradient>

            <LinearGradient style={styles.gradientInput} colors={["#E3E9F2", "#8A94A5"]} start={{ x: 0.6, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}>
                <TextInput secureTextEntry={true} placeholderTextColor="#091121" placeholder="Password" style={styles.inputField} />
            </LinearGradient>




            {/*footer container */}
            <TouchableOpacity style={styles.button} onPress={() => navigate("Menu")}>
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