import React, { useContext } from 'react'
import { Sneaker } from './Sneaker';
import { GlobalContext } from '../context/GlobalState'

export const SneakerList = () => {
    const { sneakers } = useContext(GlobalContext);

    return (
        <div>
            <ul>
            {sneakers.map(sneaker => (<Sneaker key={sneaker.id} sneaker={sneaker} />))}
            </ul>
        </div>
    )
}
