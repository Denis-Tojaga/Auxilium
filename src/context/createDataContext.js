import React, { useReducer } from "react";



//exporting a function that will be called with these three parameters
export default (reducerFunction, actions, defaultState) => {

    const Context = React.createContext();


    const Provider = ({ children }) => {

        //as soon as we run the runReducer function, it goes to reducerFuntion passing in this default prop and action prop
        const [state, dispatch] = useReducer(reducer, defaultState);


        //boundActions are actions that we'll use to somehow change our state
        //we copy actions that we recieve as a prop to new object boundActions 
        const boundActions = {};
        for (var key in actions)
            boundActions[key] = actions[key](dispatch);



        //exporting a provider that will have value of an object 
        //it will be available to all its children 
        return (
            <Context.Provider value={{ state, ...boundActions }} >
                {children}
            </Context.Provider>
        );
    };





    return { Context: Context, Provider: Provider };
};