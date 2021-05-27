import React from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const { width, height } = Dimensions.get("screen");

const PurchaseScreen = ({ navigation }) => {

    const item = navigation.getParam("object");

    console.log(item);

    return (
        <View>
            <TouchableOpacity style={styles.touchableIcon} onPress={() => navigation.goBack()} >
                <Ionicons name="arrow-back-sharp" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>Subscription packages</Text>

        </View>
    );

};



const styles = StyleSheet.create({


});


PurchaseScreen.navigationOptions = {
    headerShown: false
}



export default PurchaseScreen;