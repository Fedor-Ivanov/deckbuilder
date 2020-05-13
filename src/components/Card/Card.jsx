import React from 'react'
import './card.css'

function Card({ card }) {
    return (
        <div className='card'>
            {card.name}
        </div>
    )
}

export default Card
