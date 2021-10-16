import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    sneakers: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, () =>{
        const localData = localStorage.getItem('state');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state]);

    // Actions
    function deleteSneaker(id) {
        dispatch({
            type: 'DELETE_SNEAKER',
            payload: id
        });

    }

    function addSneaker(sneaker) {
        dispatch({
            type: 'ADD_SNEAKER',
            payload: sneaker
        });

    }

    return (<GlobalContext.Provider value={{
        sneakers: state.sneakers,
        deleteSneaker,
        addSneaker
    }}>
        {children}
    </GlobalContext.Provider>)
}