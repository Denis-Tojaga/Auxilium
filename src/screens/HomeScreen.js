import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";


const HomeScreen = ({ navigation }) => {


    //this screen needs to accept an PhobiaID which user selects on menu screen

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
    });



    return (
        <View>
            <Text>This is HomeScreen screen</Text>
            <Text>This user is - {fullName}</Text>
            <Button title="Go to task list screen" onPress={() => navigation.navigate("TaskList")} />
        </View>
    );

};



const styles = StyleSheet.create({

});



export default HomeScreen;