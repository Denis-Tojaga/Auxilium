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


};






const signup = (dispatch) => {

};





const signin = (dispatch) => {

};







//if we want to sign out we just need to delete that verification token from async storage
const signout = (dispatch) => {

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