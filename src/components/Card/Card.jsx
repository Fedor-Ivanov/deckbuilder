import React from 'react'
import './card.css'

function Card({ card }) {
    return (
        <div className='card'>
            <div className='card__name'>{card.name}</div>
            <div className='card__category'>{card.category}</div>
            <div className='card__ability'>{card.ability}</div>
            <div className='card__flavor'>{card.flavor}</div>

        </div>
    )
}

export default Card
