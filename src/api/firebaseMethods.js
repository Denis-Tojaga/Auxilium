import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";



//signup method 
export async function registration(email, password, fullName) {

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        //takes the current user from the database
        const currentUser = firebase.auth().currentUser;

        const database = firebase.firestore();

        //.collection("users") - makes a new collection called users
        //.doc(currentUser.uid) - goes inside of a document with correct user identifier
        //.set(key:value pair) - sets an attribute and its value in the database
        database.collection("users").doc(currentUser.uid).set({
            email: currentUser.email,
            fullName: fullName
        });

        return true;
    } catch (err) {

        if (err.code == "auth/invalid-email")
            Alert.alert("Invalid email adress!", "Please try again.");
        else if (err.code == "auth/email-already-in-use")
            Alert.alert("Invalid email adress!", "Email is already in use.");
        else if (err.code = "auth/weak-password")
            Alert.alert("Invalid password!", "Password must be at least 6 characters.")
        else if (err.code == "auth/invalid-email")
            Alert.alert("Invalid email!", "Email is badly formatted.")
        else if (err.code != "")
            Alert.alert("There is something wrong!", err.code);

        return false;
    };

}





//signin method that takes email and password
export async function signIn(email, password) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        return true;
    } catch (err) {

        console.log(err.code);

        if (err.code == "auth/too-many-requests")
            Alert.alert("Try again later!", "You failed to sign in multiple times.");
        else if (err.code == "auth/email-already-in-use")
            Alert.alert("Invalid email adress!", "Email already in use.");
        else if (err.code == "auth/user-not-found")
            Alert.alert("Invalid credentials!", "User not found.")
        else if (err.code == "auth/invalid-email")
            Alert.alert("Invalid email!", "Email does not exists or it is badly formatted.")
        else if (err.code == "auth/wrong-password")
            Alert.alert("Invalid password!", "Password is incorrect,try again.")

        else if (err.code != "")
            Alert.alert("There is something wrong!", err.code);

        return false;
    }
}




//logout method
export async function loggingOut() {
    try {
        await firebase.auth().signOut();
        return true;
    } catch (err) {
        Alert.alert('There is something wrong!', err.message);
        return false;
    }
}