import React, { useContext } from 'react'
import { Sneaker } from './Sneaker';
import { SimpleGrid } from '@mantine/core';
import { GlobalContext } from '../context/GlobalState'

export const SneakerList = () => {
    const { sneakers } = useContext(GlobalContext);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SimpleGrid cols={3}>
            {sneakers.map(sneaker => (<Sneaker key={sneaker.id} sneaker={sneaker} />))}
            </SimpleGrid>
        </div>
    )
}