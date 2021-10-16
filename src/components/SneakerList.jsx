import React, { useContext } from 'react'
import { Sneaker } from './Sneaker';
import { Container, SimpleGrid } from '@mantine/core';
import { GlobalContext } from '../context/GlobalState'

export const SneakerList = () => {
    const { sneakers } = useContext(GlobalContext);

    return (
        <div>
            <Container>
                <h2>You have 0 sneakers in your collection</h2>
            </Container>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SimpleGrid cols={3}>
                {sneakers.map(sneaker => (<Sneaker key={sneaker.id} sneaker={sneaker} />))}
                </SimpleGrid>
            </div>
        </div>
    )
}