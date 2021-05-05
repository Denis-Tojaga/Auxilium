import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { navigate } from "../helpers/navigation";


const SignupScreen = () => {

    return (
        <View>
            <Text>This is SignupScreen screen</Text>
            <Button title="Go to menu flow" onPress={() => navigate("menuFlow")} />
        </View>
    );

};



const styles = StyleSheet.create({

});



export default SignupScreen;