import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Worth = () => {
    const { sneakers } = useContext(GlobalContext);
    const prices = sneakers.map(sneaker => sneaker.price);
    const total = prices.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Your sneaker collection is worth <span className="worth">${total}</span></h2>
        </div>
    )
}