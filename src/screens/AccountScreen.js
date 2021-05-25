import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image, Platform, Dimensions } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { loggingOut } from "../api/firebaseMethods";
import { navigate } from "../helpers/navigation";
import * as ImagePicker from 'expo-image-picker';

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
        // if (!result.cancelled) {
        //     const database = firebase.firestore();
        //     database.collection("users").doc(user.id).update({
        //         profileImageURL: result.uri
        //     });
        // }
    };




    //editing profile picture button
    //     <View style={styles.iconContainer}>
    //     <MaterialCommunityIcons name="pencil-plus" style={styles.icon} />
    // </View>


    return (
        <View>
            {user ? <Text style={{ fontSize: 20 }}>{user.userData.fullName}</Text> : null}
            {user ? <Image style={{ width: 100, height: 100 }} source={!user.userData.profileImageURL ? require("../images/noProfile.png") : { uri: user.userData.profileImageURL }} /> : null}
            <Button title="Go to expert talks screen!" onPress={() => navigation.navigate("Expert")} />
            <Button title="Go to review screen!" onPress={() => navigation.navigate("Review")} />
            <Button title="Go to changepassword screen!" onPress={() => navigation.navigate("ChangePassword")} />
            <Button title="Sign out!" onPress={logout} />
        </View>
    );
};



const styles = StyleSheet.create({
    iconContainer: {
        position: "absolute",
        top: height * 0.06,
        right: 7,
        borderRadius: 50,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#14284D",
    },


    icon: {
        fontSize: 18,
        color: "white",
        marginLeft: 2
    },
});


AccountScreen.navigationOptions = {
    headerShown: false
}



export default AccountScreen;