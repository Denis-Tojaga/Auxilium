import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList, Dimensions, Alert } from "react-native";
import "firebase/firestore";
import * as firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import TaskCard from "../components/TaskCard";
import DailyTasks from "../components/DailyTasks";
import WeeklyTasks from "../components/WeeklyTasks";

const { width, height } = Dimensions.get("screen");


const HomeScreen = ({ navigation }) => {



    const message = navigation.state.params.message;


    const phobia = navigation.state.params.phobia;

    const [user, setUser] = useState();


    //method to fetch user's data from firebase
    const getUserData = () => {
        var userID = firebase.auth().currentUser.uid;
        firebase.firestore().collection("users").doc(userID).get().then((doc) => {
            var userData = doc.data();
            setUser({ id: userID, userData: userData });
        });
    };


    useEffect(() => {

        //first time screen gets rendered we get the user's data
        getUserData();
        //any other time screen got focus we call this didFocus listener to catch the newest user data
        const listener = navigation.addListener("didFocus", () => {
            getUserData();
        });

        if (message)
            Alert.alert("Congratulations", message);

        return () => {
            listener.remove();
        };
    }, [message]);


    return (
        <View style={styles.container}>

            {/*Header section*/}
            <View style={styles.header}>
                {user ? <Text style={styles.headerText}>Hello {user.userData.fullName}</Text> : null}
                <TouchableOpacity style={styles.touchable}>
                    {user ? <Image style={styles.image} source={!user.userData.profileImageURL ? require("../images/noProfile.png") : { uri: String(user.userData.profileImageURL) }} /> : null}
                </TouchableOpacity>
            </View>



            {/*Daily tasks section*/}
            <View style={styles.tasksContainer} >
                <Text style={styles.title}>Your daily tasks</Text>

                <FlatList
                    bounces={false}
                    scrollEventThrottle={16}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={DailyTasks}
                    keyExtractor={(item) => `${item.id}`}

                    renderItem={({ item }) => {
                        return <TaskCard
                            phobiaName={phobia.name}
                            description={item.description}
                            imageURL={phobia.url}
                            type={item.type}
                            nav={navigation}
                            infoTitle={phobia.infoTitle}
                            info={phobia.info}
                        />
                    }}
                />
            </View>




            {/*Weekly tasks section*/}
            <View style={styles.tasksContainer} >
                <Text style={styles.title}>Your weekly tasks</Text>
                <FlatList
                    bounces={false}
                    scrollEventThrottle={16}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={WeeklyTasks}
                    keyExtractor={(item) => `${item.id}`}
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

        </View>
    );

};






const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center"
    },


    //header styles
    header: {
        height: height * 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        paddingTop: 10,
        marginTop: 30,
        marginBottom: 20
    },
    headerText: {
        width: width * .7,
        fontSize: 25,
        fontFamily: "TrendaSemibold",
        fontWeight: "600",
        color: "black",
        textAlign: "center",
    },
    image: {
        width: 70,
        height: 65,
        borderRadius: 18,
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
        height: height * 0.38,
        marginLeft: 10,
        justifyContent: "center",
        marginBottom: 10
    },


    title: {
        fontFamily: "MoonBold",
        fontSize: 17,
        color: "black",
        marginBottom: 10,
    },


});



HomeScreen.navigationOptions = {
    headerShown: false
}


export default HomeScreen;