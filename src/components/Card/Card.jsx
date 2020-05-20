import React from 'react'
import './card.css'

function Card({ card }) {

    const test = {
        color: 'red',
        textAlign: 'center'
    };


    return (
        <div className='card'>

            <p style={test}>{card.name}</p>

            {/* <div className='card__name'>{card.name}</div>
            <div className='card__category'>{card.category}</div>
            <div className='card__ability'>{card.ability}</div>
            <div className='card__flavor'>{card.flavor}</div> */}




            {<img src={require(`../../images/cards/${card.artid}.jpg`)} alt="card" />}



        </div>
    )
}

export default Card
