import React, { useState, useContext } from 'react'
import { GlobalContext } from './context/GlobalState';

export const AddSneaker = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [colorway, setColorway] = useState('');
    const [condition, setCondition] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState(0);

    const { addSneaker } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        const newSneaker = {
            id: Math.floor(Math.random() * 100000000),
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
        <div>
            Add to collection
        <form onSubmit={onSubmit}>
        <div>
            <label for="text">Brand</label>
            <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" />
        </div>
        <div>
            <label for="text">Model</label>
            <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model" />
        </div>
        <div>
            <label for="text">Colorway</label>
            <input type="text" value={colorway} onChange={(e) => setColorway(e.target.value)} placeholder="Colorway" />
        </div>
        <div>
            <label for="text">Condition</label>
            <input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} placeholder="Condition" />
        </div>
        <div>
            <label for="text">Size</label>
            <input type="number" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Size" />
        </div>
        <div>
            <label for="price">How much did you pay? <br /></label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price..." />
        </div>
        <button>Add to collection</button>
        </form>
        </div>
    )
}
