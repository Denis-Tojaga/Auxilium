import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, FlatList, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const TaskCard = ({ phobiaName, description, imageURL, type }) => {

    return (
        <View style={styles.dailyTaskCard}>
            <View style={styles.textContainer}>
                <Text style={styles.phobiaName}>{phobiaName}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.footer}>
                <Text>{type}</Text>
            </View>
            <Image style={styles.phobiaImage} source={{ uri: String(imageURL) }} />
        </View>

    );
};


const styles = StyleSheet.create({

    dailyTaskCard: {
        width: width * 0.7,
        height: height * 0.3,
        borderRadius: 18,
        backgroundColor: "#C4D8FF",
        marginRight: 30,
        flexDirection: "row"
    },

    textContainer: {
        width: "62%",
        height: "80%",
        borderColor: "black",
        borderWidth: 1,
    },

    phobiaName: {
        fontFamily: "TrendaSemibold",
        fontSize: 25,
        textAlign: "center",
        marginTop: 20
    },

    phobiaImage: {
        borderWidth: 1,
        borderColor: "black",
        width: 100,
        height: 140,
        position: "absolute",
        right: 0,
        top: 20,
        resizeMode: "contain"
    },


    description: {
        fontSize: 20,
        fontFamily: "TrendaLight",
        textAlign: "center"
    },


    footer: {
        backgroundColor: "#14284D",
        position: "absolute",
        width: "100%",
        height: "20%",
        bottom: 0,
        borderRadius: 10
    }

});


export default TaskCard;