import React from 'react'
import './cards.css'
import { connect } from 'react-redux';
import Card from '../Card/Card';


function Cards({ cards }) {

	return (
		<div className='cards'>
			<div>{cards.length}</div>
			{cards.map(card => (
				<Card
					key={card.id}
					card={card}
				></Card>
			))}
		</div>
	)
}

function mapStateToProps({ cards, filters }) {
	return {
		cards:
			filters.selectedType == '' ? cards.cards : cards.cards.filter(item => item.type == filters.selectedType),
		selectedType: filters.selectedType,
		selectedProvision: filters.selectedProvision,
		selectedFaction: filters.selectedFaction,
		selectedRarity: filters.selectedRarity
	};
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Cards)