import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, FlatList, Dimensions } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";


const { width, height } = Dimensions.get("screen");


const HomeScreen = ({ navigation }) => {

    const [state, setState] = useState(null);

    var currentUserUID = firebase.auth().currentUser.uid;
    const phobiaID = navigation.state.params.id;


    //called when screen is first time rendered or some of the IDs change
    useEffect(() => {

        //async function to retrieve data of currently signed in user and clicked phobia
        async function getInfo() {
            //getting a user doc
            var userDoc = await firebase.firestore().collection("users").doc(currentUserUID).get();
            //getting a phobia doc
            var phobiaDoc = await firebase.firestore().collection("phobias").doc(phobiaID).get();

            if (!userDoc.exists || !phobiaDoc.exists) {
                Alert.alert("No user or phobia data found!");
            } else {

                console.log(userDoc.data());
                console.log(phobiaDoc.data());
                setState({ user: userDoc.data(), phobia: phobiaDoc.data() });
            }
        };


        //call of async function
        getInfo();
    }, [currentUserUID, phobiaID]);






    const changeProfilePicture = () => {
        console.log("Mijenjam profilnu korisnika!");
    };


    return (
        <SafeAreaView>
            {/*Header section*/}
            <View style={styles.header}>
                <Text style={styles.headerText}>Hello {state.user.fullName}</Text>
                <TouchableOpacity style={styles.touchable} onPress={changeProfilePicture}>
                    <Image style={styles.image} source={!state.user.pictureURL ? require("../images/noProfile.png") : { uri: String(state.user.pictureURL) }} />
                </TouchableOpacity>
            </View>



            {/*Daily tasks section*/}
            <View style={styles.dailyTasksContainer} >
                <Text>Your daily tasks</Text>

                <FlatList
                    data={state.phobia.dailyTasks}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal={true}
                    renderItem={({ item }) => {
                        console.log(item);
                        return <View style={styles.card}>
                            <View style={styles.textContainer}>
                                <Text style={styles.phobiaName}>{state.phobia.name}</Text>
                                <Text>{item.description}</Text>
                            </View>
                            <Image style={styles.phobiaImage} />
                        </View>
                    }}
                />
                {/*card color #C4D8FF, bottomCard color #14284D */}

                {/*1. Read a small text about spiders. */}
                {/*Record yourself having a speach */}

                {/*button color #1169A7*/}

            </View>



            {/*Weekly tasks section*/}
            <View style={styles.weeklyTasksContainer} >

                {/*card color  #F8B320, bottomCard color #14284D */}
                {/*button color #F8792D */}

                {/*Watch a documentary about spiders. */}
                {/*a-Reality hang out with your friendly spider. */}

            </View>

        </SafeAreaView>
    );

};



const styles = StyleSheet.create({

    container: {
        flex: 1,
    },


    //header styles
    header: {
        height: 100,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 15
    },
    headerText: {
        fontSize: 30,
        fontFamily: "TrendaSemibold",
        color: "#14284D"
    },
    image: {
        width: 70,
        height: 65,
        borderRadius: 22,
        backgroundColor: "lightgray",
    },
    touchable: {
        width: 70,
        height: 65,
        borderRadius: 22,
        marginLeft: 20
    },




    //daily tasks styles
    dailyTasksContainer: {
        height: 220,
        borderColor: "black",
        borderWidth: 1,
        marginHorizontal: 15
    },

    card: {
        width: width * 0.7,
        height: height * 0.3,
        backgroundColor: "blue",
        marginRight: 30,
        flexDirection: "row"
    },

    textContainer: {
        borderColor: "black",
        borderWidth: 1,
    },

    phobiaName: {
        fontFamily: "TrendaSemibold",
        fontSize: 22,
    },

    phobiaImage: {
        borderWidth: 1,
        borderColor: "black",
        width: 120,
        height: 160,
        position: "absolute",
        right: 5,
        top: 25
    },





    //weekly tasks styles
    weeklyTasksContainer: {
        height: 220,
        borderColor: "black",
        borderWidth: 1,
        marginHorizontal: 15
    }



});



HomeScreen.navigationOptions = {
    title: "Home",
    headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontFamily: "TrendaLight"
    }
}


export default HomeScreen;