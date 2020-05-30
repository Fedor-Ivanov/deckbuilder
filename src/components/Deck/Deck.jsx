import React from 'react'
import './deck.css'
import { connect } from 'react-redux';


function Deck({ deck, deckFaction, deckLeader }) {

	console.log(deckFaction)
	console.log(deckLeader)


	return (

		<>
			<div>{deckFaction}</div>
			<div>{deckLeader}</div>

			<div className='deck'>
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