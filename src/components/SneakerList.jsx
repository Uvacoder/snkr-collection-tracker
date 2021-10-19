import React, { useContext } from 'react'
import { Sneaker } from './Sneaker';
import { Container, SimpleGrid, Space } from '@mantine/core';
import { GlobalContext } from '../context/GlobalState'

export const SneakerList = () => {
    const { sneakers } = useContext(GlobalContext);
    const prices = sneakers.map(sneaker => sneaker.price);
    const total = prices.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const count = sneakers.length;

    return (
        
        <div>
            <Container>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
                <h2>You have {count} sneakers in your collection - Your sneaker collection is worth <span className="worth">${total}</span></h2>
            </Container>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SimpleGrid cols={4}>
                {sneakers.map(sneaker => (<Sneaker key={sneaker.id} sneaker={sneaker} />))}
                </SimpleGrid>
            </div>
        </div>
    )
}