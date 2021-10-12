import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'

export const SneakerList = () => {
    const { sneakers } = useContext(GlobalContext);

    return (
        <div>
            <ul>
            {sneakers.map(sneakers => (<li>{sneakers.brand} {sneakers.model} '{sneakers.colorway}' - ${sneakers.price}</li>))}
            </ul>
        </div>
    )
}
