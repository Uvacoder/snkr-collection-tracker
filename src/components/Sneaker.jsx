import React from 'react'

export const Sneaker = ({ sneaker }) => {
    return (
        <div>
            <ul>
            <li>{sneaker.brand} {sneaker.model} '{sneaker.colorway}' - ${sneaker.price}</li>
            </ul>
        </div>
    )
}
