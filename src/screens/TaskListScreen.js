import React from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import SmallTaskCard from "../components/SmallTaskCard";


const { width, height } = Dimensions.get("screen");


const TaskListScreen = ({ navigation }) => {

    //catching the params for this type of phobia
    const infoTitle = navigation.state.params.infoTitle;
    const info = navigation.state.params.info;

    return (
        <View style={styles.container}>

            {/* Top description container */}
            <View style={styles.topContainer}>

                {/* Go back arrow */}
                <TouchableOpacity style={styles.touchableIcon} onPress={() => navigation.goBack()} >
                    <Ionicons name="arrow-back-sharp" style={styles.icon} />
                </TouchableOpacity>

                <Text style={styles.title}>{infoTitle}</Text>
                <Text style={styles.info}>{info}</Text>
            </View>

            <SmallTaskCard type="left1" callback={() => navigation.navigate("TaskDetail")} />
            <SmallTaskCard type="right1" callback={() => navigation.navigate("TaskDetail")} />
            <SmallTaskCard type="left2" callback={() => navigation.navigate("TaskDetail")} />
            <SmallTaskCard type="right2" callback={() => navigation.navigate("TaskDetail")} />


            {/* Main tasks container */}

        </View>
    );

};



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFF"
    },

    topContainer: {
        width: width,
        height: height * .4,
        backgroundColor: "#14284D",
        borderBottomRightRadius: 55,
        justifyContent: "center",
        alignItems: "center"
    },

    touchableIcon: {
        position: "absolute",
        top: 15,
        left: 15,
        marginTop: 15,
    },

    icon: {
        color: "white",
        fontFamily: "MoonLight",
        fontSize: 38,
    },


    title: {
        fontFamily: "TrendaSemibold",
        fontSize: 35,
        marginTop: 35,
        marginBottom: 10,
        color: "white",
    },

    info: {
        fontSize: 20,
        fontFamily: "TrendaRegular",
        textAlign: "center",
        color: "white",
        opacity: 0.8,
        marginHorizontal: 10
    },


    leftSideCard: {
        marginLeft: 30,
        marginHorizontal: 50
    }


});




TaskListScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}


export default TaskListScreen;