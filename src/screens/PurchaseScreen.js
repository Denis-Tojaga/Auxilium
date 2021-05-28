import React from "react";
import { StyleSheet, Text, Dimensions, View, TouchableOpacity, FlatList, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import PaymentMethod from "../components/PaymentMethod";
import CreditCards from "../components/CreditCards";
import { useEffect } from "react/cjs/react.development";



const { width, height } = Dimensions.get("screen");

const PurchaseScreen = ({ navigation }) => {

    const item = navigation.getParam("object");


    //navigation function
    const handlePress = () => {
        navigation.navigate("Confirm", { package: item.type });
    }


    return (
        <LinearGradient start={[-0.6, -0.3]} end={[0.8, 0.5]} colors={["#408BC0", "#0F2F6A"]} style={styles.container} >

            {/*Header container */}

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Ionicons name="arrow-back-sharp" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Payment methods</Text>
            </View>


            {/*Floating container that holds add new card button and all available cards */}
            <View style={styles.floatingContainer}>
                <View style={styles.addNewButton}>
                    <Text style={{ fontSize: 40, fontFamily: "TrendaRegular" }}>+</Text>
                </View>

                <View style={styles.flatListContainer}>
                    <FlatList
                        snapToAlignment={"15%"}
                        bounces={false}
                        pagingEnabled={true}
                        scrollEventThrottle={20}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={CreditCards}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={{
                                    borderRadius: 30, backgroundColor: item.background, alignItems: "center",
                                    justifyContent: "center", width: width * .6, height: "90%",
                                    marginHorizontal: 18, shadowColor: "black", shadowOffset: { width: 5, height: 6 },
                                    shadowOpacity: .7, shadowRadius: 5, elevation: 9
                                }}>
                                    <Image style={styles.creditCardImage} source={item.image} />
                                    <Text style={{ fontSize: 28, fontFamily: "TrendaRegular", color: "black" }}>{item.title}</Text>
                                </View>
                            );
                        }}
                    />
                </View>

            </View>



            {/*Middle container holding all payment methods */}
            <View style={styles.middleContainer}>
                <Text style={{ fontFamily: "TrendaLight", fontSize: 18, color: "black", opacity: .8, marginRight: width * .2 }}>Other payment methods</Text>
                <PaymentMethod image="card" />
                <PaymentMethod image="amazonPay" />
                <PaymentMethod image="paypal" />
            </View>


            {/*Bottom container which shows the price and buy option */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.buttonBuy} onPress={handlePress}>
                    <Text style={{ fontSize: 22, fontFamily: "TrendaRegular" }}>Buy</Text>
                    <AntDesign name="arrowright" size={26} color="black" />
                </TouchableOpacity>

                <View style={styles.details}>
                    <Text style={{ fontSize: 21, color: "white", fontFamily: "TrendaRegular" }}>{item.price}</Text>
                </View>
            </View>

        </LinearGradient>
    );

};



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FAFAFA"
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width,
        height: height * .15,
    },

    icon: {
        fontSize: 40,
        marginLeft: 15,
        color: "white"
    },

    headerText: {
        marginRight: 45,
        fontSize: 30,
        color: "white",
        fontFamily: "TrendaRegular"
    },

    floatingContainer: {
        position: "absolute",
        flexDirection: "row",
        width: width,
        height: height * .28,
        top: height * .15,
        zIndex: 1,
    },



    middleContainer: {
        position: "absolute",
        bottom: height * .09,
        width: width,
        height: height * .5,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 45,
    },

    bottomContainer: {
        position: "absolute",
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        width: width,
        height: height * .16,
        bottom: 0,
        backgroundColor: "#0F2F6A",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    addNewButton: {
        backgroundColor: "white",
        width: 60,
        height: "85%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: width * .1,
        shadowColor: "black",
        shadowOffset: {
            width: 4,
            height: 5
        },
        shadowOpacity: .8,
        shadowRadius: 7,
        borderRadius: 9,
    },


    flatListContainer: {
        width: "70%",
        height: "95%",
        marginLeft: 20,
    },


    buttonBuy: {
        width: 130,
        height: 50,
        backgroundColor: "white",
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 60
    },

    details: {
        position: "absolute",
        right: 30
    },


    creditCardImage: {
        width: "70%",
        height: "60%",
        resizeMode: "contain",
    }

});


PurchaseScreen.navigationOptions = {
    headerShown: false
}



export default PurchaseScreen;