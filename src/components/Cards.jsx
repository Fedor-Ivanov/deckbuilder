import React from 'react'
import { connect } from 'react-redux';
import Card from './Card';


function Cards({ cards }) {

	console.log(cards)

	return (
		<div>
			{cards.map(card => (
				<Card
					key={card.id}
					card={card}
				></Card>
			))}
		</div>
	)
}

function mapStateToProps({ cards }) {
	return {
		cards: cards.cards
	};
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Cards)