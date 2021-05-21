import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, FlatList, Dimensions } from "react-native";
import "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";
import TaskCard from "../components/TaskCard";
import DailyTasks from "../components/DailyTasks";
import WeeklyTasks from "../components/WeeklyTasks";

const { width, height } = Dimensions.get("screen");


const HomeScreen = ({ navigation }) => {

    const phobia = navigation.state.params.phobia;
    const user = navigation.state.params.user;

    const changeProfilePicture = () => {
        console.log("Mijenjam profilnu korisnika!");
    };


    return (
        <SafeAreaView style={styles.container}>

            {/*Header section*/}
            <View style={styles.header}>
                <Text style={styles.headerText}>Hello {user.fullName}</Text>
                <TouchableOpacity style={styles.touchable} onPress={changeProfilePicture}>
                    <Image style={styles.image} source={!user.pictureURL ? require("../images/noProfile.png") : { uri: String(user.pictureURL) }} />
                </TouchableOpacity>
            </View>



            {/*Daily tasks section*/}
            <View style={styles.tasksContainer} >
                <Text style={styles.title}>Your daily tasks</Text>

                <FlatList
                    bounces={false}
                    scrollEventThrottle={32}
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
                        />
                    }}
                />
            </View>




            {/*Weekly tasks section*/}
            <View style={styles.tasksContainer} >
                <Text style={styles.title}>Your weekly tasks</Text>
                <FlatList
                    bounces={false}
                    scrollEventThrottle={32}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={WeeklyTasks}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) => {
                        console.log(item);
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

        </SafeAreaView>
    );

};






const styles = StyleSheet.create({

    container: {
        flex: 1
    },


    //header styles
    header: {
        height: height * 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        paddingTop: 10
    },
    headerText: {
        fontSize: 30,
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
    touchable: {
        width: 70,
        height: 65,
        borderRadius: 22,
        marginLeft: 20
    },




    //tasks styles

    tasksContainer: {
        height: height * 0.4,
        marginLeft: 10,
        justifyContent: "center",
        marginTop: 10,
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