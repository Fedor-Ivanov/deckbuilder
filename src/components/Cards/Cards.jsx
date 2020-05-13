import React from 'react'
import './cards.css'
import Card from '../Card/Card';


function Cards({ cards }) {

	return (
		<div className='cards'>
			<div>{cards.length}</div>
			{cards.map(card => (
				<Card
					key={card.id}
					card={card}
				></Card>
			))}
		</div>
	)
}



export default Cards