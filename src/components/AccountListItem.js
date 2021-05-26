import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from "react-native";


const { width, height } = Dimensions.get("screen");


const AccountListItem = ({ color, icon, text }) => {

    return (
        <View style={styles.container}>
            <Text>{text}</Text>
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "black",
        width: width * .8,
        height: 40,
        marginBottom: 25
    }

});


export default AccountListItem;