import React, { useState, useRef } from "react";
import { StyleSheet, FlatList, Animated, SafeAreaView } from "react-native";
import slides from "../components/Slides";
import OnBoardingItem from "../components/OnBoardingItem";



const OnBoardScreen = () => {



    const slidesRef = useRef(null);


    //next slide must be visible 50% in order to change viewable Index
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;


    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    pagingEnabled={true}
                    bounces={false}
                    renderItem={({ item }) => {
                        return <OnBoardingItem item={item} />
                    }}

                    viewabilityConfig={viewConfig}
                    scrollEventThrottle={32}

                /*Animation reference*/



                />
            </SafeAreaView>
        </SafeAreaView>

    );

};


const styles = StyleSheet.create({

    container: {
        flex: 0.9,
        justifyContent: "center"
    }

});


export default OnBoardScreen;

