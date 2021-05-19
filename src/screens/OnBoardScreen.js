import React, { useState, useRef } from "react";
import { StyleSheet, FlatList, Animated, SafeAreaView, ScrollView, View, Dimensions, Text } from "react-native";
import slides from "../components/Slides";
import OnBoardingItem from "../components/OnBoardingItem";


const { width, height } = Dimensions.get("screen");



const OnBoardScreen = () => {

    const scrollX = new Animated.Value(0);


    //next slide must be visible 50% in order to change viewable Index
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;



    const renderContent = () => {
        return (
            <Animated.View
                style={{ flex: 3 }}
            >
                <FlatList
                    data={slides}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    bounces={false}
                    renderItem={({ item }) => {
                        return <OnBoardingItem item={item} />
                    }}

                    viewabilityConfig={viewConfig}
                    scrollEventThrottle={32}

                    /*Animation reference*/
                    decelerationRate={0}
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { x: scrollX } } },
                    ],
                        { useNativeDriver: false }
                    )}


                />
            </Animated.View>
        );
    }


    const renderDots = () => {

        const dotPosition = Animated.divide(scrollX, width);

        return (
            <View style={styles.dotContainer}>
                {slides.map((item, index) => {

                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [15, 23, 15],
                        extrapolate: "clamp"
                    });

                    const dotColor = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: ["black", "#EC206A", "black"],
                        extrapolate: "extend"
                    });

                    return (
                        <Animated.View
                            key={`dot${index}`}
                            opacity={opacity}
                            style={[styles.dot, { width: dotSize, height: 15, backgroundColor: dotColor }]}
                        >
                        </Animated.View>
                    )
                })}
            </View>
        );
    }



    return (
        <SafeAreaView style={styles.container}>
            {renderContent()}
            {renderDots()}
            <View style={styles.textContainer}>
                <Text style={styles.text}>Swipe for next</Text>
            </View>
        </SafeAreaView>

    );

};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },


    dotContainer: {
        flexDirection: "row",
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },

    dot: {
        borderRadius: 50,
        backgroundColor: "black",
        marginHorizontal: 12
    },


    textContainer: {
        flex: 0.12,
        marginBottom: 20
    },

    text: {
        fontSize: 20,
        fontFamily: "TrendaRegular",
        color: "#14284D"
    }

});


export default OnBoardScreen;

