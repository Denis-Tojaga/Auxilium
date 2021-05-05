import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";



//Importing all screens
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import MenuScreen from "./src/screens/MenuScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TaskListScreen from "./src/screens/TaskListScreen";
import TaskDetailScreen from "./src/screens/TaskDetailScreen";
import ExploreScreen from "./src/screens/ExploreScreen";
import PurchaseScreen from "./src/screens/PurchaseScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ExpertScreen from "./src/screens/ExpertScreen";
import ReviewScreen from "./src/screens/ReviewScreen";
import ChangePasswordScreen from "./src/screens/ChangePasswordScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";


//Importing fonts hook
import { useFonts } from "@use-expo/font";
import AppLoading from "expo-app-loading";





//Importing AppLoading component if something doesn't load correctly
import AppLoading from "expo-app-loading";




//navigator component which will have all navigators nested
const navigator = createSwitchNavigator({

  loginFlow: createStackNavigator({
    Welcome: WelcomeScreen,
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),

  // menuFlow: createStackNavigator({

  //   menu: MenuScreen,

  //   tablFlow: createBottomTabNavigator({
  //     homeFlow: createStackNavigator(/*screenovi za home*/),
  //     exploreFlow: createStackNavigator(/*screenovi za explore*/),
  //     accountFlow: createStackNavigator(/*screenovi za account*/)
  //   })

  // })

});






const App = createAppContainer(navigator);



const customFonts = {
  TrendaExtraLight: require("./assets/fonts/TrendaFonts/Trenda-ExtraLight.otf"),
  TrendaLightIt: require("./assets/fonts/TrendaFonts/Trenda-LightIt.otf"),
  TrendaLight: require("./assets/fonts/TrendaFonts/Trenda-Light.otf"),
  TrendaRegular: require("./assets/fonts/TrendaFonts/Trenda-Regular.otf"),
  TrendaSemiboldIt: require("./assets/fonts/TrendaFonts/Trenda-SemiboldIt.otf"),
  TrendaSemibold: require("./assets/fonts/TrendaFonts/Trenda-Semibold.otf"),
  MoonBold: require("./assets/fonts/MoonFonts/Moon-Bold.otf"),
  MoonLight: require("./assets/fonts/MoonFonts/Moon-Light.otf")
}



export default () => {

  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded)
    return <AppLoading />

  return (
    <App />
  );
}





