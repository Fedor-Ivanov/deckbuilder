import React from 'react'
import Cards from '../Cards/Cards'
import Deck from '../Deck/Deck'
import Filters from '../Filters/Filters'


function NewDeck({ finalCards, filters, selectedFaction }) {

	const multiPropsFilter = (products, filters) => {
		const filterKeys = Object.keys(filters);
		return products.filter(product => {
			return filterKeys.every(key => {
				if (!filters[key].length) return true;
				if (Array.isArray(product[key])) {
					return product[key].some(keyEle => filters[key] === keyEle);
				}
				return filters[key] === product[key];
			});
		});
	};


	const filteredFinalCards = Object.values(filters.selected) === '' ? finalCards : multiPropsFilter(finalCards, filters.selected)

	return (
		<>
			<Filters deckSelectedFaction={selectedFaction}></Filters>
			<div className='wrap'>
				<Cards className='cards' cards={filteredFinalCards}>
				</Cards>
				<Deck className='deck'>
				</Deck>
			</div>
		</>
	)
}

export default NewDeck
