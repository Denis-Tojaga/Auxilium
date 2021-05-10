import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";



//creating a reducer function
const authReducer = (state, action) => {

    switch (action.type) {

        case "signup":
        //
        case "singin":
        //
        case "add_error":
        //
        case "clear_error":
        //
        case "signout":
        // 

        default:
            return state;
    }
};




//automatical signin from local storage
const tryLocalSignin = (dispatch) => async () => {

    console.log("Pokusao sam local signin!");


};






const signup = (dispatch) => {
    console.log("Pokusao sam sign up metodu!");
};





const signin = (dispatch) => {
    console.log("Pokusao sam sign in metodu!");
};







//if we want to sign out we just need to delete that verification token from async storage
const signout = (dispatch) => {
    console.log("Pokusao sam logout metodu!");
};











/*Three arguments
reducer function - that is going to somehow change the state
all functions - that are calling that reducer function
initial state object*/
export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { errorMessage: "" }
);