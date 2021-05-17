import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Animated, FlatList, TouchableOpacity, Image } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { navigate } from "../helpers/navigation";
import { LinearGradient } from "expo-linear-gradient";
import MenuCard from "../components/MenuCard";
import * as firebase from "firebase";
import "firebase/firestore";
import { Ionicons } from '@expo/vector-icons';



var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;





const MenuScreen = () => {

    const [phobias, setPhobias] = useState([]);



    //this is called when screen loads for the first time
    //seting the state to an array of all document inside "phobias" collection
    useEffect(() => {

        var newArray = [];
        var db = firebase.firestore();
        db.collection("phobias").get().then((querySnapshot) => {
            querySnapshot.forEach((document) => {
                newArray.push({ id: document.id, data: document.data() });
            });
            setPhobias(newArray);
        });
    }, []);



    return (
        <LinearGradient start={[-0.6, -0.3]} end={[0.8, 0.5]} colors={["#0E0E0E", "#0F2F6A"]} style={styles.container1} >
            {/*HEADER CONTAINER*/}
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Choose your phobia</Text>
                <Text style={styles.subHeader}>
                    By choosing a phobia from the list,
                    all the tasks you will solve
                    during this process,
                    will be addressing that topic.
                </Text>
            </View>


            {/*LIST CONTAINER*/}
            <View style={styles.container2}>
                <FlatList data={phobias}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            // <MenuCard phobiaID={item.id} />
                            <LinearGradient start={[0.5, 0.2]} end={[0.5, 1.1]} colors={["#408BC0", "#FAFAFA"]} style={styles.card} >

                                <Text style={styles.title}>{item.data.name}</Text>
                                <Text style={styles.description}>{item.data.description}</Text>

                                <Image style={styles.image} source={{ uri: item.data.url }} />

                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Enroll</Text>
                                    <Ionicons name="ios-play" style={styles.icon} />
                                </TouchableOpacity>

                            </LinearGradient>
                        );
                    }}
                />
            </View>


        </LinearGradient>
    );

};





const styles = StyleSheet.create({

    /*Containers */
    container1: {
        backgroundColor: "black",
        width: WIDTH,
        height: HEIGHT,
        alignItems: "flex-end"
    },

    headerContainer: {
        width: WIDTH,
        height: HEIGHT * 0.35,
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },

    container2: {
        backgroundColor: "#FFFF",
        width: WIDTH,
        height: HEIGHT * 0.65,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        borderColor: "black",
        borderWidth: 3,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5
    },



    /*Header */
    header: {
        fontFamily: "MoonBold",
        fontSize: 28,
        color: "white"
    },
    subHeader: {
        fontFamily: "TrendaLight",
        fontSize: 17,
        color: "white",
        textAlign: "center",
        marginTop: 20
    },












    /*MENU CARD */
    card: {
        width: WIDTH * 0.85,
        height: HEIGHT * 0.25,
        backgroundColor: "blue",
        marginTop: 25,
        borderRadius: 25,
        paddingLeft: 15
    },

    title: {
        alignSelf: "flex-start",
        marginTop: 40,
        fontSize: 30,
        fontFamily: "TrendaSemibold",
        color: "#0E0E0E"
    },



    description: {
        fontSize: 20,
        fontFamily: "TrendaLight",
        color: "#0E0E0E"
    },


    image: {
        width: 65,
        height: 130,
        position: "absolute",
        right: 15,
        bottom: 25
    },

    button: {
        width: 90,
        height: 35,
        backgroundColor: "#14284D",
        borderRadius: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
    },

    buttonText: {
        fontFamily: "MoonBold",
        fontSize: 11,
        color: "#FFFF"
    },

    icon: {
        fontSize: 17,
        color: "#FFFF",
        marginLeft: 3
    }



});



//navigationOptions of screen used to modify header style
MenuScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}



export default MenuScreen;