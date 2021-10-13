import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    sneakers: [
    { id: 1, brand: 'Nike', model: 'Dunk Low', colorway: 'Michigan State', condition: 'new', size: 10, price: 300 },
    { id: 2, brand: 'Nike', model: 'Dunk Low', colorway: 'Georgetown', condition: 'new', size: 10, price: 211 },
    { id: 3, brand: 'Nike', model: 'Dunk Low', colorway: 'Black White', condition: 'new', size: 10, price: 279 },
    { id: 4, brand: 'Nike', model: 'Dunk Low', colorway: 'Michigan', condition: 'new', size: 10, price: 187 },
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteSneaker(id) {
        dispatch({
            type: 'DELETE_SNEAKER',
            payload: id
        });

    }

    return (<GlobalContext.Provider value={{
        sneakers: state.sneakers,
        deleteSneaker
    }}>
        {children}
    </GlobalContext.Provider>)

}