import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


const WelcomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text>This is welcome screen</Text>
            <Button title="Sign in" onPress={() => navigation.navigate("Signin")} />
            <Button title="Sign up" onPress={() => navigation.navigate("Signup")} />
        </View>
    );

};



const styles = StyleSheet.create({


});



export default WelcomeScreen;