import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";


const HomeScreen = ({ navigation }) => {


    const [fullName, setFullName] = useState("");

    var currentUserUID = firebase.auth().currentUser.uid;

    useEffect(() => {
        //async function to retrieve data of currently signed in user
        async function getUserInfo() {
            //first we take the document from correct collection with currentUserUID string
            var document = await firebase
                .firestore()
                .collection("users")
                .doc(currentUserUID)
                .get();

            if (!document.exists) {
                Alert.alert("No user data found!");
            } else {
                //then we extract data out of that document so we can access its attributes
                var dataObject = document.data();
                setFullName(dataObject.fullName);
            }
        };
        getUserInfo();
    }, [currentUserUID]);






    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>HELLO {fullName}</Text>
                <Image style={{ width: 80, height: 65, borderRadius: 25, backgroundColor: "black" }} />
                {/* <Button title="Go to task list screen" onPress={() => navigation.navigate("TaskList")} /> */}
            </View>


            <View style={styles.dailyTasksContainer} >

            </View>

            <View style={styles.weeklyTasksContainer} >

            </View>

        </SafeAreaView>
    );

};



const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

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
        fontFamily: "TrendaRegular",
        marginRight: 5
    },

    dailyTasksContainer: {
        height: 220,
        borderColor: "black",
        borderWidth: 1,
        marginHorizontal: 15

    },

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
        fontFamily: "MoonBold"
    }
}


export default HomeScreen;