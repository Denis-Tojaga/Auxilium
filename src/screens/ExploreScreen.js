import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


const ExploreScreen = ({ navigation }) => {

    return (
        <View>
            <Text>This is ExploreScreen screen</Text>
            <Button title="Go to purchase screen!" onPress={() => navigation.navigate("Purchase")} />
        </View>

    );

};



const styles = StyleSheet.create({

});



export default ExploreScreen;