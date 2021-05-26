import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image, Platform, Dimensions, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { loggingOut } from "../api/firebaseMethods";
import { navigate } from "../helpers/navigation";
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import AccountListItem from "../components/AccountListItem";


const { width, height } = Dimensions.get("screen");



const AccountScreen = ({ navigation }) => {

    const [user, setUser] = useState();


    const logout = () => {
        var result = loggingOut();
        if (result)
            navigate("loginFlow");
    }



    //this will get called only the first time we load the screen 
    useEffect(() => {

        //method to ask a user for permission to use camera options
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();

        var userID = firebase.auth().currentUser.uid;
        firebase.firestore().collection("users").doc(userID).get().then((doc) => {
            var userData = doc.data();
            setUser({ id: userID, userData: userData });
        });

    }, []);




    //method for user's profile image update
    const pickImage = async () => {
        //starting the ImageLibrary and seting some image options
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        //if we choose some image (we didn't selected cancel) it updates the current profileImageURL in database
        if (!result.cancelled) {
            const database = firebase.firestore();
            database.collection("users").doc(user.id).update({
                profileImageURL: result.uri
            });
        }
    };




    //editing profile picture button

    return (
        <View style={styles.container}>
            <LinearGradient start={[-0.6, -0.3]} end={[0.8, 0.5]} colors={["#408BC0", "#0F2F6A"]} style={styles.gradient} >

                {user ? <Image style={styles.image} source={!user.userData.profileImageURL ? require("../images/noProfile.png") : require("../images/noProfile.png")} /> : null}
                <TouchableOpacity style={styles.editButton} onPress={pickImage}>
                    <Ionicons name="ios-pencil" style={styles.icon} />
                </TouchableOpacity>
                {user ? <Text style={styles.info}>{user.userData.fullName}</Text> : null}
                <View style={styles.bottomContainer}>
                    <AccountListItem text="Expert talks" />
                    <AccountListItem text="View reviews" />
                    <AccountListItem text="Change password" />

                </View>
            </LinearGradient>
        </View>
    );
};



const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    gradient: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    info: {
        marginBottom: height * .5,
        marginTop: 10,
        color: "white",
        fontSize: 25,
        textAlign: "center",
        width: 100,
        borderWidth: 1,
        borderColor: "black",
        color: "black",
        fontFamily: "TrendaSemibold",
    },

    image: {
        width: 110,
        height: 110,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20
    },

    editButton: {
        position: "absolute",
        top: height * .17,
        right: width * .35,
        borderRadius: 50,
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },


    icon: {
        fontSize: 20,
        color: "white",
        marginLeft: 2
    },

    bottomContainer: {
        backgroundColor: "white",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        width: width,
        height: height * .5,
        position: "absolute",
        bottom: 0
    }
});


AccountScreen.navigationOptions = {
    headerShown: false
}



export default AccountScreen;