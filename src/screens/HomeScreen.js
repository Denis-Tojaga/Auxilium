import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, FlatList, Dimensions } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";
import TaskCard from "../components/TaskCard";


const { width, height } = Dimensions.get("screen");


const HomeScreen = ({ navigation }) => {

    const phobia = navigation.state.params.phobia;
    const user = navigation.state.params.user;

    const changeProfilePicture = () => {
        console.log("Mijenjam profilnu korisnika!");
    };


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Hello {user.fullName}</Text>
                <TouchableOpacity style={styles.touchable} onPress={changeProfilePicture}>
                    <Image style={styles.image} source={!user.pictureURL ? require("../images/noProfile.png") : { uri: String(user.pictureURL) }} />
                </TouchableOpacity>
            </View>


            <View style={styles.tasksContainer} >
                <Text style={styles.title}>Your daily tasks</Text>

                <FlatList
                    data={phobia.dailyTasks}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal={true}
                    renderItem={({ item }) => {

                        return <TaskCard
                            phobiaName={phobia.name}
                            description={item.description}
                            imageURL={phobia.url}
                            type={item.type}
                            nav={navigation}
                        />
                    }}
                />
            </View>



            <View style={styles.tasksContainer} >
                <Text style={styles.title}>Your weekly tasks</Text>
                <FlatList
                    data={phobia.dailyTasks}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal={true}
                    renderItem={({ item }) => {

                        return <TaskCard
                            phobiaName={phobia.name}
                            description={item.description}
                            imageURL={phobia.url}
                            type={item.type}
                            nav={navigation}
                        />
                    }}
                />
            </View>

        </SafeAreaView>
    );

};






const styles = StyleSheet.create({

    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center"
    },


    //header styles
    header: {
        height: height * 0.1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10
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




    //tasks styles

    tasksContainer: {
        height: height * 0.35,
        marginLeft: 10,
        justifyContent: "center",
        marginTop: 10
    },


    title: {
        fontFamily: "MoonBold",
        fontSize: 20,
        color: "#14284D",
        marginBottom: 10
    },


});



HomeScreen.navigationOptions = {
    headerShown: false
}


export default HomeScreen;