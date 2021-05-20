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


ExploreScreen.navigationOptions = {
    title: "Explore",
    headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontFamily: "TrendaLight"

    }
}


export default ExploreScreen;