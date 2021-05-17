import React, { useRef, useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    FlatList,
    TouchableOpacity,
    Image,
    Easing,
    SafeAreaViewBase,
    SafeAreaView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { navigate } from "../helpers/navigation";
import * as firebase from "firebase";
import "firebase/firestore";
import { Ionicons } from '@expo/vector-icons';


const { width, height } = Dimensions.get("screen");



const PHOBIA_IMAGE_HEIGHT = 125;
const ITEM_SIZE = height * 0.25 + 50;



const MenuScreen = () => {

    //animation managing
    const scrollY = useRef(new Animated.Value(0)).current;





    const [phobias, setPhobias] = useState([]);
    useEffect(() => {
        //this is called when screen loads for the first time
        //seting the state to an array of all document inside "phobias" collection
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

                <Animated.FlatList
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    data={phobias}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {

                        // FlatList Animation Reference code
                        const inputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index,
                            ITEM_SIZE * (index + 1.4)
                        ]
                        const opacityInputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index,
                            ITEM_SIZE * (index + 0.9)
                        ]
                        const scale = scrollY.interpolate({
                            inputRange,
                            outputRange: [1, 1, 1, 0]
                        })
                        const opacity = scrollY.interpolate({
                            inputRange: opacityInputRange,
                            outputRange: [1, 1, 1, 0]
                        })
                        // FlatList Animation Reference code


                        return (
                            <Animated.View style={{ width: width * 0.85, height: height * 0.25, marginTop: 25, borderRadius: 25, transform: [{ scale }], opacity }}>

                                <LinearGradient start={[0.5, 0.2]} end={[0.5, 1.1]} colors={["#408BC0", "#FAFAFA"]} style={styles.gradient} >
                                    <Text style={styles.title}>{item.data.name}</Text>
                                    <Text style={styles.description}>{item.data.description}</Text>

                                    <Image style={styles.image} source={{ uri: item.data.url }} />

                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Enroll</Text>
                                        <Ionicons name="ios-play" style={styles.icon} />
                                    </TouchableOpacity>
                                </LinearGradient>

                            </Animated.View>
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
        width: width,
        height: height,
        alignItems: "flex-end"
    },
    headerContainer: {
        width: width,
        height: height * 0.35,
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    container2: {
        backgroundColor: "#FFFF",
        width: width,
        height: height * 0.65,
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












    /*MENU CARDS STYLES */
    gradient: {
        width: "100%",
        height: "100%",
        borderRadius: 25,
        paddingLeft: 15,
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
        height: PHOBIA_IMAGE_HEIGHT,
        position: "absolute",
        right: 15,
        bottom: 30
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