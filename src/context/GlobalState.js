import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer.js';

//Initial state
const initialState = {
    transactions: [
        {id:1, text: 'Magic Cards', amount: -50},
        {id:2, text: 'Grocery', amount: -90},
        {id:3, text: 'Salary', amount: 2000},
        {id:4, text: 'Bar', amount: -60},
    ]
};

//Create context

export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
                type: "DELETE_TRANSACTION",
                payload: id
            }) 
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
            
        })
        
    }
    
    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}