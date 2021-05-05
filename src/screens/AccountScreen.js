import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


const AccountScreen = ({ navigation }) => {

    return (
        <View>
            <Text>This is AccountScreen screen</Text>
            <Button title="Go to expert talks screen!" onPress={() => navigation.navigate("Expert")} />
            <Button title="Go to review screen!" onPress={() => navigation.navigate("Review")} />
            <Button title="Go to changepassword screen!" onPress={() => navigation.navigate("ChangePassword")} />
            <Button title="Go to welcome screen!" onPress={() => navigation.navigate("loginFlow")} />

        </View>
    );

};



const styles = StyleSheet.create({

});



export default AccountScreen;