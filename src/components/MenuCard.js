import React from "react";
import { View, StyleSheet, Text } from "react-native";


const MenuCard = ({ cardTitle, cardDesc }) => {

    return (
        <View style={styles.card}>
            <Text>
                {cardTitle}
            </Text>
            <Text>{cardDesc}</Text>
        </View>
    );

};



const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 180,
        backgroundColor: "blue"
    }

});

export default MenuCard;