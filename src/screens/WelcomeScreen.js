import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

//components import
import GradientButton from "react-native-gradient-buttons";
import Spacer from "../components/Spacer";


const WelcomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../images/welcome.png")} />
            </View>

            <View style={styles.form}>
                <Text style={styles.header}>WELCOME</Text>
                <Text style={styles.header}>to the Auxilium App</Text>
                <Button title="Sign in" onPress={() => navigation.navigate("Signin")} />
                <Button title="Sign up" onPress={() => navigation.navigate("Signup")} />
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
        width: "88%",
        height: "95%",
        marginTop: 45,
    },


    form: {
        borderColor: "black",
        borderWidth: 1
    }




});


WelcomeScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}







export default WelcomeScreen;