import React from 'react'
import './deck.css'
import { connect } from 'react-redux';


function Deck({ deck, deckFaction, deckLeader }) {

	const sum = deck
		.map(item => +item.provision)
		.reduce((prev, curr) => prev + curr, 0);

	return (

		<>
			{sum > 150 ? alert('test') : ''}

			<div className='deck'>
				<div>{deckFaction}</div>
				<div>{deckLeader}</div>
				<div>{sum}</div>
				{deck.map(card => (

					<div key={card.id}>{card.name}</div>

				))}
			</div>
		</>

	)
}

function mapStateToProps({ deck }) {

	return {
		deck: deck.deck,
		deckFaction: deck.deckFaction,
		deckLeader: deck.deckLeader
	};
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Deck)