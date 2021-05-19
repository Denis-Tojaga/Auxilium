import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, Dimensions, View, SafeAreaView } from "react-native";
import { AntDesign } from '@expo/vector-icons';


//taking the dimensions of a window
const { width, height } = Dimensions.get("screen");

const OnBoardingItem = ({ item }) => {




    //method that will render an object with its proper style
    const renderHelper = (object) => {

        if (object.id == "1")
            return (
                <View style={[styles.container, { width }]}>
                    <Image source={object.image2} style={styles.cloud}></Image>
                    <Text style={styles.description1}>{object.description}</Text>
                    <Image source={object.image1} style={styles.image1} />
                </View>
            );
        else if (object.id == "2")
            return (
                <View style={[styles.container, { width }]}>
                    <Image source={object.image2} style={styles.image2} />
                    <Text style={styles.description2}>{object.description}</Text>
                </View>
            );
        else if (object.id == '3')
            return (
                <View style={[styles.container, { width }]}>
                    <Text style={styles.description3}>{object.description}</Text>
                    <Image source={object.image3} style={styles.image3} />
                </View>
            );
        else if (object.id == '4')
            return (
                <View style={[styles.container, { width }]}>
                    <Image source={object.image4} style={styles.image4} />
                    <Text style={styles.description4}>{object.description}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text>Get Started</Text>
                        <AntDesign name="arrowright" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            );
    }

    return (
        renderHelper(item)
    );

};






const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        justifyContent: "center",
        alignItems: "center"
    },


    //ITEM 1 STYLES
    cloud: {
        width: width * 0.95,
        height: height * 0.38,
        alignSelf: "flex-end",
        resizeMode: "stretch",
        marginTop: 10
    },
    image1: {
        width: width * 0.7,
        height: height * 0.45,
        alignSelf: "flex-start",
        resizeMode: "contain",
        marginLeft: 20,
        marginBottom: 10
    },
    description1: {
        position: "absolute",
        top: height * 0.05,
        left: width * 0.03,
        marginHorizontal: 50,
        textAlign: "center",
        fontFamily: "TrendaRegular",
        fontSize: 25,
        color: "#14284D"
    },




    //ITEM 2 STYLES
    image2: {
        width: width,
        resizeMode: "contain"
    },
    description2: {
        marginHorizontal: 5,
        textAlign: "center",
        fontFamily: "TrendaRegular",
        fontSize: 25,
        color: "#14284D",
        marginBottom: 10
    },



    //ITEM 3 STYLES
    image3: {
        alignSelf: "flex-start",
        width: width * 0.9,
        height: height * 0.4
    },

    description3: {
        marginHorizontal: 10,
        textAlign: "center",
        fontFamily: "TrendaRegular",
        fontSize: 20,
        color: "#14284D",
        marginTop: height * 0.05
    },




    //ITEM 4 STYLES
    image4: {
        width: width * 0.9,
        height: height * 0.4,
        resizeMode: "contain"
    },

    description4: {
        marginHorizontal: 5,
        textAlign: "center",
        fontFamily: "TrendaRegular",
        fontSize: 23,
        color: "#14284D",
        marginTop: 15
    }
});



export default OnBoardingItem;