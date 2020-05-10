import React from 'react'
import './cards.css'
import { connect } from 'react-redux';
import Card from '../Card/Card';


function Cards({ cards }) {

	console.log(cards)

	return (
		<div className='cards'>
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