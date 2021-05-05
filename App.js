import React from "react";
//createAppContainer function takes navigator funtion and creates component out of it
//createStackNavigator function creates StackNavigator
//createSwitchNavigator function creates SwitchNavigator
//createBottomTabNavigator function creates BottomTabNavigator
import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
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





//Importing AppLoading component if something doesn't load correctly
//import AppLoading from "expo-app-loading";




const loginFlow = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Signin: SigninScreen,
    Signup: SignupScreen,
  }
);


const navigator = createSwitchNavigator({

  loginFlow: loginFlow,

  menuFlow: createStackNavigator({

    menu: MenuScreen,

    tablFlow: createBottomTabNavigator({
      homeFlow: createStackNavigator(/*screenovi za home*/),
      exploreFlow: createStackNavigator(/*screenovi za explore*/),
      accountFlow: createStackNavigator(/*screenovi za account*/)
    })

  })

});



export default createAppContainer(navigator);





