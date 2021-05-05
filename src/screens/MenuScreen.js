import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { navigate } from "../helpers/navigation";


const MenuScreen = () => {

    return (
        <View>
            <Text>This is MenuScreen screen</Text>
            <Button title="Go to bottom tab nav" onPress={() => { navigate("tablFlow") }} />
        </View>
    );

};



const styles = StyleSheet.create({

});



export default MenuScreen;