import React from 'react'
import './cards.css'
import Card from '../Card/Card';


function Cards({ cards }) {

	return (
		<>
			<div>{cards.length}</div>
			<div className='cards'>

				{cards.map(card => (
					<Card
						key={card.id}
						card={card}
					></Card>
				))}
			</div>
		</>
	)
}



export default Cards