import React, { useRef } from "react";
import {
    StyleSheet, Text, Dimensions, View, FlatList, Animated, TouchableOpacity
} from "react-native";
import SubscriptionPackages from "../components/SubscriptionPackages";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';



const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = height * .4 + 80;






const ExploreScreen = ({ navigation }) => {

    const scrollX = useRef(new Animated.Value(0)).current;





    const renderOption = (title, valid) => {
        return <View style={{ borderColor: "black", borderWidth: 1 }}>
            <View style={{ width: 50, height: 50, backgroundColor: "#EC216A", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                <AntDesign name="check" size={24} color="black" />
            </View>
            <Text>{title}</Text>
        </View>
    };







    return (
        <LinearGradient start={[-0.6, -0.3]} end={[0.8, 0.5]} colors={["#408BC0", "#0F2F6A"]} style={styles.container} >
            <Text style={styles.title}>Subscription packages</Text>
            <View style={styles.contentContainer}>
                <Animated.FlatList
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                    data={SubscriptionPackages}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    bounces={false}
                    snapToInterval={width * .7}
                    pagingEnabled={true}
                    renderItem={({ item, index }) => {

                        /*  FlatList Animation Reference code */
                        const inputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index + 1,
                            ITEM_SIZE * (index + 2.5)
                        ]

                        const opacityInputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index,
                            ITEM_SIZE * (index + 1)
                        ]

                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [1, 1, 1, 0]
                        })


                        const opacity = scrollX.interpolate({
                            inputRange: opacityInputRange,
                            outputRange: [1, 1, 1, 0]
                        })
                        /*  FlatList Animation Reference code */


                        return (
                            <Animated.View style={{ transform: [{ scale }], opacity }}>
                                <View style={styles.card}>
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Text style={styles.type}>{item.type}</Text>
                                        <Text style={styles.price}>{item.price}</Text>
                                    </View>

                                    <View style={{ marginTop: 40 }}>
                                        {item.options.map((item, key) => (
                                            <View style={styles.optionContainer}>
                                                <View style={item.valid ? styles.valid : styles.notValid}>
                                                    <AntDesign name="check" size={22} color="black" />
                                                </View>
                                                <Text key={key} style={styles.optionText}>{item.title}</Text>
                                            </View>
                                        ))}
                                    </View>


                                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Purchase", { object: item }) }}>
                                        <Text style={styles.buttonText}>Select now</Text>
                                        <AntDesign name="arrowright" size={26} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </Animated.View>
                        );
                    }}
                />

            </View>
        </LinearGradient>
    );

};



const styles = StyleSheet.create({

    container: {
        backgroundColor: "black",
        width: width,
        height: height,
    },

    title: {
        fontSize: 30,
        color: "white",
        fontFamily: "TrendaRegular",
        textAlign: "center",
        marginVertical: 40
    },

    contentContainer: {
        width: width,
        height: height * .7,
    },

    card: {
        backgroundColor: "white",
        width: width * .7,
        height: height * .6,
        marginHorizontal: 25,
        borderRadius: 22,
    },

    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 55,
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#EC216A",
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    buttonText: {
        fontFamily: "TrendaSemibold",
        marginRight: 2,
        fontSize: 20
    },


    type: {
        fontSize: 35,
        fontFamily: "TrendaSemibold",
        color: "#14284D",
        marginTop: 20
    },

    price: {
        fontSize: 22,
        fontFamily: "TrendaRegular",
        color: "black",
        opacity: .5,
    },


    optionText: {
        fontSize: 16,
        fontFamily: "TrendaLight",
        color: "#14284D",
        marginLeft: 10
    },

    valid: {
        width: 35,
        height: 35,
        backgroundColor: "#EC216A",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    notValid: {
        width: 35,
        height: 35,
        backgroundColor: "gray",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        opacity: .6
    },

    optionContainer: {
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }


});

ExploreScreen.navigationOptions = {
    headerShown: false
}


export default ExploreScreen;