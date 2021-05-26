import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';


const { width, height } = Dimensions.get("screen");


const AccountListItem = ({ color, icon, text }) => {

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: color, width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                <Entypo name="share" style={styles.icon} />
            </View>
            <View style={{ width: 250 }}>
                <Text style={styles.info}>{text}</Text>
            </View>
            <Entypo name="chevron-thin-right" style={styles.chevron} />
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        width: width * .8,
        height: 65,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    info: {
        color: "#091a3a",
        fontSize: 18,
        marginHorizontal: 45,
        borderColor: "white",
        borderWidth: 1,
        textAlign: "center"
    },

    chevron: {
        color: "#091a3a",
        fontSize: 30,
    },

    icon: {
        color: "#091a3a",
        fontSize: 30,
        opacity: .8
    },


});


export default AccountListItem;