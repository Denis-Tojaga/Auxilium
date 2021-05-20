import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";


const HomeScreen = ({ navigation }) => {

    const [state, setState] = useState(null);



    var currentUserUID = firebase.auth().currentUser.uid;
    const phobiaID = navigation.state.params.id;



    useEffect(() => {
        //async function to retrieve data of currently signed in user
        async function getInfo() {
            //first we take the document from correct collection with currentUserUID string
            var userDoc = await firebase
                .firestore()
                .collection("users")
                .doc(currentUserUID)
                .get();

            var phobiaDoc = await firebase.firestore().collection("phobias").doc(phobiaID).get();

            if (!userDoc.exists || !phobiaDoc.exists) {
                Alert.alert("No user or phobia data found!");
            } else {
                //then we extract data out of that document so we can access its attributes
                // var user = userDoc.data();
                // var phobia = phobiaDoc.data();
                setState({ user: userDoc.data(), phobia: phobiaDoc.data() });
            }
        };

        getInfo();
    }, [currentUserUID, phobiaID]);




    console.log(state);

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hello {state.user.fullName}</Text>
                <Image style={styles.image} />
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
        fontFamily: "TrendaSemibold",
    },


    image: {
        width: 75,
        height: 65,
        borderRadius: 25,
        backgroundColor: "black",
        marginLeft: 35
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