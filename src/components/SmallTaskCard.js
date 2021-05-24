import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const SmallTaskCard = ({ type }) => {

    console.log(type);

    const HandlePositioning = () => {

        switch (type) {
            case "left1":
                return (
                    <View style={styles.containerLeft1}>
                        <Text>This is something</Text>
                    </View>
                );
            case "right1":
                return (
                    <View style={styles.containerRight1}>
                        <Text>This is something</Text>
                    </View>
                );
            case "left2":
                return (
                    <View style={styles.containerLeft2}>
                        <Text>This is something</Text>
                    </View>
                );
            case "right2":
                return (
                    <View style={styles.containerRight2}>
                        <Text>This is something</Text>
                    </View>
                );
        }
    };

    return (
        <View>

        </View>
    );

};



const styles = StyleSheet.create({
    containerLeft1: {
        position: "absolute",
        left: width * .15,
        bottom: height * .35,
        width: 120,
        height: 120,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "blue",
        borderRadius: 20
    },

    containerRight1: {
        position: "absolute",
        bottom: height * .25,
        width: 120,
        height: 120,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "red",
        marginLeft: width * 0.6,
        borderRadius: 20,
        marginBottom: 10
    },


    containerLeft2: {
        position: "absolute",
        left: width * .15,
        bottom: height * .35,
        width: 120,
        height: 120,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "blue",
        borderRadius: 20
    },

    containerRight2: {
        position: "absolute",
        bottom: height * .25,
        width: 120,
        height: 120,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "red",
        marginLeft: width * 0.6,
        borderRadius: 20,
        marginBottom: 10
    },

});

export default SmallTaskCard;