import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList, Dimensions, Platform } from "react-native";
import "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";
import TaskCard from "../components/TaskCard";
import DailyTasks from "../components/DailyTasks";
import WeeklyTasks from "../components/WeeklyTasks";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from "firebase";
import "firebase/firestore";

const { width, height } = Dimensions.get("screen");


const HomeScreen = ({ navigation }) => {

    const phobia = navigation.state.params.phobia;
    const user = navigation.state.params.user;

    const [currentUser, setCurrentUser] = useState(user);


    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();

        setCurrentUser(user);
    }, []);




    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            const database = firebase.firestore();
            database.collection("users").doc(user.id).update({
                profileImageURL: result.uri
            });

            console.log("slika uspjesno setovana");
            await firebase.firestore().collection("users").doc(user.id).get().then((doc) => {
                var userData = doc.data();
                setCurrentUser({ id: user.id, userData: userData });
            });
        }
    };


    return (
        <View style={styles.container}>

            {/*Header section*/}
            <View style={styles.header}>
                <Text style={styles.headerText}>Hello {currentUser.userData.fullName}</Text>
                <TouchableOpacity style={styles.touchable} onPress={pickImage}>
                    <Image style={styles.image} source={!currentUser.userData.profileImageURL ? require("../images/noProfile.png") : { uri: String(currentUser.userData.profileImageURL) }} />
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="pencil-plus" style={styles.icon} />
                    </View>
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
        fontSize: 25,
        fontFamily: "TrendaRegular",
        fontWeight: "600",
        color: "black",
    },
    image: {
        width: 65,
        height: 60,
        borderRadius: 22,
        backgroundColor: "lightgray",
    },

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