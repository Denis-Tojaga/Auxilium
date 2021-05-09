import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";



const SigninScreen = ({ navigation }) => {


    return (
        <LinearGradient start={[0.25, 0.35]} end={[0.8, 1.15]} colors={["#4D5C75", "#0E0E0E"]} style={styles.container}>


            {/*header container */}
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.touchableIcon} onPress={() => navigation.goBack()} >
                    <Ionicons name="arrow-back-sharp" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Sign in to Auxilium</Text>
            </View>



            {/*form container */}
            <View style={styles.formContainer}>
                <LinearGradient style={styles.gradientInput} colors={["#E3E9F2", "#8A94A5"]} start={{ x: 0.6, y: 0.5 }} end={{ x: 1.0, y: 0.5 }} >
                    <TextInput placeholderTextColor="#091121" placeholder="Email" style={styles.inputField} />
                </LinearGradient>

                <LinearGradient style={styles.gradientInput} colors={["#E3E9F2", "#8A94A5"]} start={{ x: 0.6, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}>
                    <TextInput secureTextEntry={true} placeholderTextColor="#091121" placeholder="Password" style={styles.inputField} />
                </LinearGradient>
            </View>



            {/*footer container */}
            <View style={styles.footerContainer}>
                <Text style={styles.passwordText}>Forgot password?</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>


        </LinearGradient>
    );

};


//background gradient
//start #4D5C75
//end #0E0E0E



//input gradient
// start #E3E9F2 0.4 - 0.5
//end #A8B3C5 1.10 - 0.5



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,

    },

    headerContainer: {
        width: "100%",
        height: "18%",
        alignItems: "center",
        marginBottom: 30
    },

    formContainer: {
        width: "100%",
        height: "25%",
        alignItems: "center",
        marginBottom: 10
    },


    footerContainer: {
        width: "100%",
        height: "22%",
        alignItems: "center",
        marginBottom: 5
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
        marginTop: 20,
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