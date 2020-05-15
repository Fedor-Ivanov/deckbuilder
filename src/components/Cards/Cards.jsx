import React from 'react'
import './cards.css'
import Card from '../Card/Card';


function Cards({ cards }) {

	return (
		<>
			<div>{cards.length}</div>

			{
				cards ? 
				
				<div className='cards'>

					{cards.map(card => (
						<Card
							key={card.id}
							card={card}
						></Card>
					))}
				</div>

				:

				'loading'

			}
			
		</>
	)
}



export default Cards