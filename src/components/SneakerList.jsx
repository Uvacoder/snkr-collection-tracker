import React, { useContext } from 'react'
import { Sneaker } from './Sneaker';
import { GlobalContext } from '../context/GlobalState'

export const SneakerList = () => {
    const { sneakers } = useContext(GlobalContext);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ul>
            {sneakers.map(sneaker => (<Sneaker key={sneaker.id} sneaker={sneaker} />))}
            </ul>
        </div>
    )
}
