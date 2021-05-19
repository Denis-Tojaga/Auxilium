import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { navigate } from "../helpers/navigation";



const OnBoardScreen = () => {

    return (
        <View>
            <Text>This is on boarding screen!</Text>
            <Button title="Go to menu screen" onPress={() => navigate("Menu")} />
        </View>

    );

};


const styles = StyleSheet.create({

});


export default OnBoardScreen;

