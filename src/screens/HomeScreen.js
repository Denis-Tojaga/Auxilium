import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, FlatList, Dimensions } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";
import TaskCard from "../components/TaskCard";
import { navigate } from "../helpers/navigation";


const { width, height } = Dimensions.get("screen");


const HomeScreen = ({ navigation }) => {

    const phobia = navigation.state.params.phobia;
    const user = navigation.state.params.user;

    console.log(user);
    console.log(phobia);

    const changeProfilePicture = () => {
        console.log("Mijenjam profilnu korisnika!");
    };


    return (
        <SafeAreaView>

            <View style={styles.header}>
                <Text style={styles.headerText}>Hello {user.fullName}</Text>
                <TouchableOpacity style={styles.touchable} onPress={changeProfilePicture}>
                    <Image style={styles.image} source={!user.pictureURL ? require("../images/noProfile.png") : { uri: String(user.pictureURL) }} />
                </TouchableOpacity>
            </View>


            <View style={styles.dailyTasksContainer} >
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
                        />
                    }}
                />
            </View>



            <View style={styles.weeklyTasksContainer} >
                <Text style={styles.title}>Your weekly tasks</Text>

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

    title: {
        fontFamily: "MoonBold",
        fontSize: 20,
        color: "#14284D",
        marginBottom: 10
    },

    dailyTasksContainer: {
        height: height * 0.35,
        borderColor: "black",
        borderWidth: 1,
        marginHorizontal: 15
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