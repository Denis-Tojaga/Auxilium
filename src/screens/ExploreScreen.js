import React, { useRef } from "react";
import {
    StyleSheet, Text, Dimensions, View, FlatList, Animated,
    TouchableOpacity,
} from "react-native";
import SubscriptionPackages from "../components/SubscriptionPackages";
import { LinearGradient } from "expo-linear-gradient";
import SubscriptionCard from "../components/SubscriptionCard";



const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = height * .4 + 80;

const ExploreScreen = () => {

    const scrollX = useRef(new Animated.Value(0)).current;

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
                    snapToInterval={width * .3}
                    pagingEnabled={true}
                    renderItem={({ item, index }) => {

                        /*  FlatList Animation Reference code */
                        const inputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index + 1,
                            ITEM_SIZE * (index + 1.5)
                        ]

                        const opacityInputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index,
                            ITEM_SIZE * (index + 0.9)
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
                                    <Text>{item.type}</Text>
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
        marginVertical: 30
    },

    contentContainer: {
        width: width,
        height: height * .65,
        borderColor: "black",
        borderWidth: 1,
    },

    card: {
        backgroundColor: "white",
        width: width * .65,
        height: height * .65,
        borderColor: "black",
        borderWidth: 1,
        marginHorizontal: 25,
        borderRadius: 22,
    }


});

ExploreScreen.navigationOptions = {
    headerShown: false
}


export default ExploreScreen;