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

	console.log(filters.selected)

	const multiPropsFilter = (products, filters) => {
		const filterKeys = Object.keys(filters);
		return products.filter(product => {
			return filterKeys.every(key => {
				if (!filters[key].length) return true;
				// Loops again if product[key] is an array (for material attribute).
				if (Array.isArray(product[key])) {
					return product[key].some(keyEle => filters[key].includes(keyEle));
				}
				return filters[key].includes(product[key]);
			});
		});
	};

	return {
		// cards:
		// 	filters.selectedType == '' ? cards.cards : cards.cards.filter(item => item.type == filters.selectedType),

		// cards: Object.values(filters.selected) == '' ? cards.cards : multiPropsFilter(cards.cards, filters.selected),

		cards: cards.cards,

		selectedType: filters.selectedType,
		selectedProvision: filters.selectedProvision,
		selectedFaction: filters.selectedFaction,
		selectedRarity: filters.selectedRarity
	};
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Cards)