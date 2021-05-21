import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");

const TaskCard = ({ phobiaName, description, imageURL, type, nav }) => {


    const renderIcon = () => {
        if (type == 'a-reality')
            return <Image style={{ width: 22, height: 22 }} source={require("../images/AR_icon.png")} />
        else if (type == "textual")
            return <Entypo name="text" style={styles.icon} />
        else if (type == "video")
            return <Feather name="video" style={styles.icon} />
    }

    return (
        <View style={styles.dailyTaskCard}>
            <View style={styles.textContainer}>
                <Text style={phobiaName.length <= 10 ? styles.phobiaName : styles.phobiaNameLonger}>{phobiaName}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.typeContainer}>
                    <Text style={styles.footerText}> {type}</Text>
                    {renderIcon()}
                </View>

                <View style={styles.typeContainer}>
                    <Text style={styles.footerText}>Auditory</Text>
                    <AntDesign name="sound" style={styles.icon} />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => nav.navigate("TaskList")}>
                    <AntDesign name="arrowright" size={24} color="white" />
                </TouchableOpacity>
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
        height: "80%"
    },

    phobiaName: {
        fontFamily: "TrendaSemibold",
        fontSize: 30,
        textAlign: "center",
        marginTop: 20
    },

    phobiaNameLonger: {
        fontFamily: "TrendaSemibold",
        fontSize: 23,
        textAlign: "center",
        marginTop: 20
    },

    phobiaImage: {
        width: 80,
        height: 100,
        position: "absolute",
        right: 10,
        top: 40,
        resizeMode: "stretch"
    },


    description: {
        fontSize: 18,
        fontFamily: "TrendaLight",
        textAlign: "center",
        marginTop: 15
    },


    footer: {
        backgroundColor: "#14284D",
        position: "absolute",
        width: "100%",
        height: "20%",
        bottom: 0,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
    },

    footerText: {
        color: "white",
        fontSize: 15,
        fontFamily: "TrendaLight"
    },

    typeContainer: {
        flexDirection: "row",
        width: "38%",
        paddingTop: 10,
        marginLeft: 5
    },

    icon: {
        marginLeft: 10,
        color: "white",
        fontSize: 22
    },

    button: {
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#EC216A"
    }

});


export default TaskCard;