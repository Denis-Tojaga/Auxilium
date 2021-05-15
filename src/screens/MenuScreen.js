import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { navigate } from "../helpers/navigation";


const MenuScreen = () => {


    return (
        <View>
            <Text>This is MenuScreen screen</Text>
            <Text>This is current user -  </Text>
            <Button title="Go to bottom tab nav" onPress={() => { navigate("bottomTabFlow") }} />
        </View>
    );

};



const styles = StyleSheet.create({

});



export default MenuScreen;