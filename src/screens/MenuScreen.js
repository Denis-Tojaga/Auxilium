import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { navigate } from "../helpers/navigation";
import { Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import MenuCard from "../components/MenuCard";


var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

console.log(WIDTH, HEIGHT);

const MenuScreen = () => {

    console.log({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    })

    return (
        <LinearGradient start={[-0.6, -0.3]} end={[0.8, 0.5]} colors={["#0E0E0E", "#0F2F6A"]} style={styles.container1} >
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Choose your phobia</Text>
                <Text style={styles.subHeader}>
                    By choosing a phobia from the list,
                    all the tasks you will solve
                    during this process,
                    will be addressing that topic.
                </Text>
                {/* {<Button title="Go to bottom tab nav" onPress={() => { navigate("bottomTabFlow") }} />} */}
            </View>
            <View style={styles.container2}>

            </View>
        </LinearGradient>

    );

};


//start prvaBoja #0E0E0E druga boja #0E0E0E (x -0.10 y 1.0)
//kraj druga #0E0E0E druga boja #0F2F6A (x 0.85 y -1.0)



const styles = StyleSheet.create({

    /*Containers */
    container1: {
        backgroundColor: "black",
        width: WIDTH,
        height: HEIGHT,
        alignItems: "flex-end"
    },
    headerContainer: {
        width: WIDTH,
        height: HEIGHT * 0.35,
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    container2: {
        backgroundColor: "#FFFF",
        width: WIDTH,
        height: HEIGHT * 0.65,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45
    },



    /*Header */
    header: {
        fontFamily: "MoonBold",
        fontSize: 28,
        color: "white"
    },
    subHeader: {
        fontFamily: "TrendaLight",
        fontSize: 17,
        color: "white",
        textAlign: "center",
        marginTop: 20
    }

});


MenuScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}



export default MenuScreen;