import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, FlatList, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const TaskCard = ({ phobiaName, description, imageURL, type }) => {

    return (
        <View style={styles.dailyTaskCard}>
            <View style={styles.textContainer}>
                <Text style={styles.phobiaName}>{phobiaName}</Text>
                <Text>{description}</Text>
            </View>
            <Image style={styles.phobiaImage} source={{ uri: String(imageURL) }} />
        </View>

    );
};


const styles = StyleSheet.create({

    dailyTaskCard: {
        width: width * 0.7,
        height: height * 0.3,
        backgroundColor: "#C4D8FF",
        marginRight: 30,
        flexDirection: "row"
    },

    textContainer: {
        width: "55%",
        borderColor: "black",
        borderWidth: 1,
    },

    phobiaName: {
        fontFamily: "TrendaSemibold",
        fontSize: 22,
        textAlign: "center",
        marginTop: 20
    },

    phobiaImage: {
        borderWidth: 1,
        borderColor: "black",
        width: 120,
        height: 160,
        position: "absolute",
        right: 5,
        top: 25
    }


});


export default TaskCard;