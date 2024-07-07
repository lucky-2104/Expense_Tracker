import React, { createContext, useReducer , useEffect } from 'react';
import AppReducer from './AppReducer';


//Intial State

const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || []
  };

//Create Context

export const GlobalContext = createContext(initialState);



//Provider Component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);
    
    //Actions
    function deleteTrans(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    
    }
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTrans,
            addTransaction
        }} >
            {children}
        </GlobalContext.Provider>
    );
}