import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'

export const Sneaker = ({ sneaker }) => {
    const { deleteSneaker } = useContext(GlobalContext);
    return (
        <div>
            <ul>
            <li>{sneaker.brand} {sneaker.model} '{sneaker.colorway}' - ${sneaker.price} <button onClick={() => deleteSneaker(sneaker.id)}>Remove</button></li>
            </ul>
        </div>
    )
}
