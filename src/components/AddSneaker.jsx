import React, { useState, useContext } from 'react'
import { Container, Button, Input, Space, Select, Modal } from '@mantine/core';
import { GlobalContext } from '../context/GlobalState';

export const AddSneaker = () => {
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [colorway, setColorway] = useState('');
    const [condition, setCondition] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');
    const [opened, setOpened] = useState(false);

    const { addSneaker } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        const newSneaker = {
            id: Math.floor(Math.random() * 100000000),
            image,
            brand,
            model,
            colorway,
            condition,
            size,
            price: +price
        }
        addSneaker(newSneaker);
    }


    return (
        <Container>
        <Modal
        size="xl"
        opened={opened}
        onClose={() => setOpened(false)}
        overlayOpacity={0.95}
        transition="slide-up"
        >
        <h2>Start adding some heat 👟🔥🔥</h2>
        <form onSubmit={onSubmit}>
        <label for="text">Image</label>
        <Input
        type="text"
        placeholder="Image Link"
        size="md"
        required
        value={image} onChange={(e) => setImage(e.target.value)}/>
        <Select
        label="Brand"
        placeholder="Select a brand"
        size="md"
        data={[
        { label: 'Adidas' },
        { label: 'Air Jordan' },
        { label: 'Nike' },
        { label: 'Yeezy' },
        ]}
        value={brand} onChange={(e) => setBrand(e.target.value)}/>
        <Space h="sm" />
        <label for="text">Model</label>
        <Input
        type="text"
        placeholder="Model"
        size="md"
        required
        value={model} onChange={(e) => setModel(e.target.value)}/>
        <Space h="sm" />
        <label for="text">Colorway</label>
        <Input
        type="text"
        placeholder="Colorway"
        size="md"
        required
        value={colorway} onChange={(e) => setColorway(e.target.value)}/>
        <Space h="md" />
        <label for="text">Condition</label>
        <Input
        type="text"
        placeholder="Condition"
        size="md"
        required
        value={condition} onChange={(e) => setCondition(e.target.value)}/>
        <Space h="sm" />
        <label for="text">Size</label>
        <Input
        type="number"
        placeholder="Size"
        size="md"
        value={size} onChange={(e) => setSize(e.target.value)}/>
        <Space h="sm" />
        <label for="text">Price</label>
        <Input
        type="number"
        placeholder="How much did you pay?"
        size="md"
        value={price} onChange={(e) => setPrice(e.target.value)}/>
        <br />
        <Button color="dark" size="md" type="submit">Add to collection</Button>
        </form>
        </Modal>
        <Button color="dark" size="md" onClick={() => setOpened(true)}>Add to your collection</Button>
        </Container>
    )
}