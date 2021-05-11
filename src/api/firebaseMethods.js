import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";



//signup method 
export async function registration(email, password, fullName) {

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        const currentUser = firebase.auth().currentUser;

        const database = firebase.firestore();

        //we go inside users collection to a document with user's id and set it's values
        database.collection("users").doc(currentUser.uid).set({ email: currentUser.email, fullName: fullName });

    } catch (err) {

        if (err.code == "auth/invalid-email")
            Alert.alert('Invalid email adress!", "Please try again.');
        else if (err.code == "auth/email-already-in-use")
            Alert.alert('Invalid email adress!", "Email is already in use.');

        //finish alert for incorrect password


        Alert.alert("There is something wrong!", err.message);
    };

}





//signin method that takes email and password
export async function signIn(email, password) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {

        if (err.code == "auth/too-many-requests")
            Alert.alert('Try again later!", "You failed to sign in multiple times.');
        else if (err.code == "auth/email-already-in-use")
            Alert.alert("Invalid email adress!", "Email does not exists.");

        //finish alert for incorrect password
        Alert.alert("There is something wrong!", err.message);
    }
}




//logout method
export async function loggingOut() {
    try {
        await firebase.auth().signOut();
    } catch (err) {
        Alert.alert('There is something wrong!', err.message);
    }
}