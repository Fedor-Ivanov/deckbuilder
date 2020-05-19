import React from 'react'
import './cards.css'
import Card from '../Card/Card';
import { cardsIsLoading } from '../../store/actions/cards'

import { connect } from 'react-redux';


function Cards({ cards, isLoading }) {

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


function mapStateToProps({ cards }) {

	return {
		isLoading: cards.isLoading
	};
}

const mapDispatchToProps = {
	cardsIsLoading: cardsIsLoading
};


export default connect(mapStateToProps, mapDispatchToProps)(Cards)