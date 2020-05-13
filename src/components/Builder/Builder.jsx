import React from 'react'
import './builder.css'
import Cards from '../Cards/Cards'
import Deck from '../Deck/Deck'
import { connect } from 'react-redux';



function Builder({ cards }) {
	return (
		<div className='builder'>

			<Cards className='cards' cards={cards}>

			</Cards>
			<Deck className='deck'>

			</Deck>
		</div>
	)
}

function mapStateToProps({ cards, filters }) {

	return {
		cards: cards.cards,
		// selectedType: filters.selected.type,
		// selectedProvision: filters.selected.provision,
		// selectedFaction: filters.selected.faction,
		// selectedRarity: filters.selected.rarity
	};
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Builder)