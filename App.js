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
import SignupScreen from "./src/screens/WelcomeScreen";
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
import AppLoading from "expo-app-loading";



const switchNavigator = createSwitchNavigator({

  ResolveAuth: ResolveAuthScreen,

  loginFlow: createStackNavigator({
    Welcome: WelcomeScreen,
    Signin: SigninScreen,
    Signup: SignupScreen
  }),

  menuFlow: createStackNavigator({

    Menu: MenuScreen,
    bottomTabFlow: createBottomTabNavigator({

      HomeFlow: createStackNavigator({
        Home: HomeScreen,
        TaskList: TaskListScreen,
        TaskDetail: TaskDetailScreen
      }),


      ExploreFlow: createStackNavigator({
        Explore: ExploreScreen,
        Purchase: PurchaseScreen
      }),

      AccountFlow: createStackNavigator({
        Account: AccountScreen,
        Expert: ExpertScreen,
        Review: ReviewScreen,
        ChangePassword: ChangePasswordScreen
      })

    }),

  })

});






//Listing all custom fonts that app is using
const customFonts = {};



//creating an app container with switchNavigator
const App = createAppContainer(switchNavigator);






export default () => {

  return <App />

};

