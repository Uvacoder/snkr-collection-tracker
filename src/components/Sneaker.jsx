import React, { useContext } from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { } from '@mantine/core';
import { GlobalContext } from '../context/GlobalState'

export const Sneaker = ({ sneaker }) => {
    const { deleteSneaker } = useContext(GlobalContext);
    return (
        <div>
            <div style={{ width: 340, margin: 'auto' }}>
            <Card shadow="sm" padding="lg">
            <Card.Section>
            <Image src="https://cdn.flightclub.com/3000/TEMPLATE/253215/1.jpg" height={250} alt="Norway" />
            </Card.Section>
            <Group position="apart" style={{ marginBottom: 5}}>
            <Text weight={500}>{sneaker.brand} {sneaker.model} '{sneaker.colorway}'</Text>
            <Badge color="green" variant="light">
            ${sneaker.price}
            </Badge>
            </Group>
            <Text size="sm" style={{ lineHeight: 1.5 }}>
            Size: {sneaker.size} <br />
            Condition: {sneaker.condition}
            </Text>
            <Button variant="light" color="red" fullWidth style={{ marginTop: 14 }} onClick={() => deleteSneaker(sneaker.id)}>
            Remove from your collection
            </Button>
            </Card>
            <br/>
            </div>
        </div>
    )
}
