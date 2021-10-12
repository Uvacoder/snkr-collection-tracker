import React from 'react'

export const AddSneaker = () => {
    return (
        <div>
            Add to collection
        <form>
        <div>
            <label for="text">Brand</label>
            <input type="text" placeholder="Brand" />
        </div>
        <div>
            <label for="text">Model</label>
            <input type="text" placeholder="Model" />
        </div>
        <div>
            <label for="text">Colorway</label>
            <input type="text" placeholder="Colorway" />
        </div>
        <div>
            <label for="text">Condition</label>
            <input type="text" placeholder="Condition" />
        </div>
        <div>
            <label for="text">Size</label>
            <input type="text" placeholder="Size" />
        </div>
        <div>
            <label for="amount">How much did you pay? <br /></label>
            <input type="number" placeholder="Enter amount..." />
        </div>
        <button>Add to collection</button>
        </form>
        </div>
    )
}
