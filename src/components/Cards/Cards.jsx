import React from 'react';
import './cards.css'
import Card from '../Card/Card';
import { cardsIsLoading } from '../../store/actions/cards'
import { connect } from 'react-redux';


function Cards({ cards, isLoading }) {

	return (
		<div>

			<div>{cards.length}</div>

			<div className='cards'>

				{cards.map(card => (
					<Card
						key={card.id}
						card={card}
					></Card>
				))}

			</div>

		</div>
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