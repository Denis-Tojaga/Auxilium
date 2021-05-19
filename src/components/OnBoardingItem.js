import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from "react-native";
import { AntDesign } from '@expo/vector-icons';


//taking the dimensions of a window
const { width, height } = Dimensions.get("screen");

const OnBoardingItem = ({ item }) => {




    //method that will render an object with its proper style
    const renderHelper = (object) => {

        if (object.id == "1")
            return (
                <SafeAreaView style={[styles.container, { width }]}>
                    <Image source={object.image2} style={styles.cloud}></Image>
                    <Text style={styles.description1}>{object.description}</Text>
                    <Image source={object.image1} style={styles.image1} />
                </SafeAreaView>
            );
        else if (object.id == "2")
            return (
                <SafeAreaView style={[styles.container, { width }]}>
                    <Image source={object.image2} style={styles.image2} />
                    <Text>{object.description2}</Text>
                </SafeAreaView>
            );
        else if (object.id == '3')
            return (
                <SafeAreaView style={[styles.container, { width }]}>
                    <Text>{object.description}</Text>
                    <Image source={object.image3} style={styles.image3} />
                </SafeAreaView>
            );
        else if (object.id == '4')
            return (
                <SafeAreaView style={[styles.container, { width }]}>
                    <Image source={object.image4} style={styles.image4} />
                    <Text>{object.description}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text>Get Started</Text>
                        <AntDesign name="arrowright" size={24} color="black" />
                    </TouchableOpacity>
                </SafeAreaView>
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
        height: height * 0.35,
        alignSelf: "flex-end",
        resizeMode: "stretch",
    },
    image1: {
        width: width * 0.7,
        height: height * 0.45,
        alignSelf: "flex-start",
        resizeMode: "cover",
        marginBottom: 25,
        marginLeft: 20
    },

    description1: {
        position: "absolute",
        top: height * 0.08,
        left: width * 0.06,
        marginHorizontal: 40,
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
        marginHorizontal: 40,
        textAlign: "center",
        fontFamily: "TrendaRegular",
        fontSize: 25,
        color: "#14284D"
    },






    //ITEM 3 STYLES
    image3: {

    },





    //ITEM 4 STYLES
    image4: {

    }
});



export default OnBoardingItem;