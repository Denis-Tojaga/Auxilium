import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as firebase from "firebase";
import { loggingOut } from "../api/firebaseMethods";


const AccountScreen = ({ navigation }) => {


    const handlePress = () => {
        var result = loggingOut();
        console.log(result);
        if (result) {
            console.log("User successfully signed out!");
            navigation.navigate("Welcome");
        } else {
            console.log("There was a trouble with signout!");
        }
    };


    return (
        <View>
            <Text>This is AccountScreen screen</Text>
            <Button title="Go to expert talks screen!" onPress={() => navigation.navigate("Expert")} />
            <Button title="Go to review screen!" onPress={() => navigation.navigate("Review")} />
            <Button title="Go to changepassword screen!" onPress={() => navigation.navigate("ChangePassword")} />
            <Button title="Sign out!" onPress={handlePress} />

        </View>
    );

};



const styles = StyleSheet.create({

});



export default AccountScreen;