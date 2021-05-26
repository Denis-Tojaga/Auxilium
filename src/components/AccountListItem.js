import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");


const AccountListItem = ({ color, icon, text }) => {


    const renderIcon = () => {
        if (icon == "chat")
            return <Entypo name="chat" style={styles.icon} />
        else if (icon == "star")
            return <AntDesign name="star" style={styles.icon} />
        else if (icon == "lock")
            return <AntDesign name="lock" style={styles.icon} />
    };

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: color, width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                {renderIcon()}
            </View>
            <View style={{ width: 220 }}>
                <Text style={styles.info}>{text}</Text>
            </View>
            <Entypo name="chevron-thin-right" style={styles.chevron} />
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: width * .8,
        height: 65,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },

    info: {
        color: "#091a3a",
        fontSize: 22,
        marginHorizontal: 10,
        borderColor: "white",
        textAlign: "center",
    },

    chevron: {
        color: "#091a3a",
        fontSize: 30,
    },

    icon: {
        fontSize: 23,
        opacity: .7
    },


});


export default AccountListItem;