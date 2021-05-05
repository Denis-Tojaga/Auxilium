import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


const TaskListScreen = ({ navigation }) => {

    return (
        <View>
            <Text>This is TaskListScreen screen</Text>
            <Button title="Go to task detail screen" onPress={() => navigation.navigate("TaskDetail")} />
        </View>
    );

};



const styles = StyleSheet.create({

});



export default TaskListScreen;