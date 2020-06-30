import React from 'react'
import Cards from '../Cards/Cards'
import Deck from '../Deck/Deck'


function NewDeck({ finalCards }) {
	return (
		<div className='wrap'>
			<Cards className='cards' cards={finalCards}>
			</Cards>
			<Deck className='deck'>
			</Deck>
		</div>
	)
}

export default NewDeck
