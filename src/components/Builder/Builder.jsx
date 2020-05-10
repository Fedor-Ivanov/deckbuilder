import React from 'react'
import './builder.css'
import Filters from '../Filters/Filters'
import Cards from '../Cards/Cards'
import Deck from '../Deck/Deck'


function Builder() {
	return (
		<div className='builder'>
			<Filters>

			</Filters>
			<Cards className='cards'>

			</Cards>
			<Deck className='deck'>

			</Deck>
		</div>
	)
}

export default Builder
