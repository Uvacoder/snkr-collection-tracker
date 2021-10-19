import React, { useContext } from 'react'
import { Card, Image, Text, Badge, Button, Group, Space} from '@mantine/core';
import { } from '@mantine/core';
import { GlobalContext } from '../context/GlobalState'

export const Sneaker = ({ sneaker }) => {
    const { deleteSneaker } = useContext(GlobalContext);
    return (
        <div>
            <Space h="xl" />
            <div style={{ width: 340, margin: 'auto' }}>
            <Card shadow="sm" padding="lg">
            <Card.Section>
            <Image src={sneaker.image} height={250} alt={sneaker.brand} />
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
