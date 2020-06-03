import React from 'react'
import './deck.css'
import { connect } from 'react-redux';


function Deck({ deck, deckFaction, deckLeader }) {

	const sum = deck
		.map(item => +item.provision)
		.reduce((prev, curr) => prev + curr, 0);

	return (

		<>
			{sum + +deckLeader.provision > 150 + +deckLeader.provision ? alert('test') : ''}

			<div className='deck'>
				<div>{deckFaction}</div>
				<div>{deckLeader.name}</div>
				<div>{sum + +deckLeader.provision}</div>
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