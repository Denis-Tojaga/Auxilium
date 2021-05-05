import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text>This is HomeScreen screen</Text>
            <Button title="Go to task list screen" onPress={() => navigation.navigate("TaskList")} />
        </View>
    );

};



const styles = StyleSheet.create({

});



export default HomeScreen;