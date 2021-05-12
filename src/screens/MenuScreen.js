import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { navigate } from "../helpers/navigation";
import * as firebase from "firebase";


const MenuScreen = () => {

    var currentUser = firebase.auth().currentUser;


    return (
        <View>
            <Text>This is MenuScreen screen</Text>
            <Text>This is current user - {currentUser.fullName} </Text>
            <Button title="Go to bottom tab nav" onPress={() => { navigate("bottomTabFlow") }} />
        </View>
    );

};



const styles = StyleSheet.create({

});



export default MenuScreen;