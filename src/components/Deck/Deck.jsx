import React from 'react'
import './deck.css'
import { connect } from 'react-redux';



function Deck({ deck }) {

	console.log(deck)

	return (
		<div className='deck'>
			{deck.map(card => (

				<div key={card.id}>{card.name}</div>

			))}
		</div>
	)
}

function mapStateToProps({ deck }) {

	return {
		deck: deck.deck
	};
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Deck)