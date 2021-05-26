import React from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { navigate } from "../helpers/navigation";

const { width, height } = Dimensions.get("screen");

const SmallTaskCard = ({ type, callback }) => {

    console.log(callback);

    //method that will display views in correct order and style
    const handlePositioning = () => {
        if (type == "left1") {
            return (
                <View style={styles.containerLeft1}>
                    <Text style={styles.sessionText}>Session</Text>
                    <Text style={styles.sessionNumber}>01</Text>
                    <TouchableOpacity style={styles.button} onPress={callback}>
                        <Ionicons name="ios-play" size={25} color="white" />
                    </TouchableOpacity>
                </View>
            );
        } else if (type == "right1") {
            return (
                <View style={styles.containerRight1}>
                    <Text style={styles.sessionText}>Session</Text>
                    <Text style={styles.sessionNumber}>02</Text>
                    <TouchableOpacity style={styles.button} onPress={callback}>
                        <Ionicons name="ios-play" size={25} color="white" />
                    </TouchableOpacity>
                </View>
            );
        } else if (type == "left2") {
            return (
                <View style={styles.containerLeft2}>
                    <Text style={styles.sessionText}>Session</Text>
                    <Text style={styles.sessionNumber}>03</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("TaskDetail")}>
                        <Ionicons name="ios-play" size={25} color="white" />
                    </TouchableOpacity>
                </View>
            );
        } else if (type == "right2") {
            return (
                <View style={styles.containerRight2}>
                    <Text style={styles.sessionText}>Session</Text>
                    <Text style={styles.sessionNumber}>04</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("TaskDetail")}>
                        <Ionicons name="ios-play" size={25} color="white" />
                    </TouchableOpacity>
                </View>
            );
        }
    };

    return handlePositioning();
};



const styles = StyleSheet.create({
    containerLeft1: {
        position: "absolute",
        left: width * .15,
        bottom: height * .32,
        width: 120,
        height: 120,
        backgroundColor: "#c4d8ff",
        borderRadius: 20,
        justifyContent: "center",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: .6,
        shadowRadius: 5,
    },

    containerRight1: {
        position: "absolute",
        bottom: height * .25,
        width: 120,
        height: 120,
        backgroundColor: "#c4d8ff",
        marginLeft: width * 0.6,
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: "center",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: .6,
        shadowRadius: 5,
    },


    containerLeft2: {
        position: "absolute",
        left: width * .15,
        bottom: height * .1,
        width: 120,
        height: 120,
        backgroundColor: "#c4d8ff",
        borderRadius: 20,
        justifyContent: "center",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: .6,
        shadowRadius: 5,
    },

    containerRight2: {
        position: "absolute",
        bottom: height * .01,
        width: 120,
        height: 120,
        backgroundColor: "#c4d8ff",
        marginLeft: width * 0.6,
        borderRadius: 20,
        marginBottom: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: .6,
        shadowRadius: 5,
    },


    sessionText: {
        fontSize: 23,
        fontFamily: "TrendaLight",
        textAlign: "center",
        marginTop: 15
    },

    sessionNumber: {
        fontFamily: "TrendaSemibold",
        fontSize: 30,
        fontWeight: "800",
        textAlign: "center",
        marginBottom: 5
    },

    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "30%",
        backgroundColor: "#14284d"
    }

});

export default SmallTaskCard;