import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as firebase from "firebase";
import { loggingOut } from "../api/firebaseMethods";
import { navigate } from "../helpers/navigation";


const AccountScreen = ({ navigation }) => {


    const handlePress = () => {
        var result = loggingOut();
        if (result)
            navigate("loginFlow");
    }


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


AccountScreen.navigationOptions = {
    title: "Account",
    headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontFamily: "MoonBold"
    }
}



export default AccountScreen;