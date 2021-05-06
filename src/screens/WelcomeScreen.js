import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";


const WelcomeScreen = ({ navigation }) => {

    return (
        <View>
            <Image style={styles.image} source={require("../images/welcome_img.png")} />
            <Button title="Sign in" onPress={() => navigation.navigate("Signin")} />
            <Button title="Sign up" onPress={() => navigation.navigate("Signup")} />
        </View>
    );

};



const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 350,
        alignSelf: "center",
        marginTop: 15
    }

});







export default WelcomeScreen;