import React, { Suspense } from 'react'
import './cards.css'
// import Card from '../Card/Card';
import { cardsIsLoading } from '../../store/actions/cards'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazyload'



const Card = React.lazy(() => import('../Card/Card'));



function Cards({ cards, deck }) {

	// let qwe = cards.filter(item => !deck.includes(item))

	return (
		<div>

			<div>{cards.length}</div>

			<div className='cards'>

				{cards.map(card => (


					<Suspense key={card.id} fallback={<div>Loading...</div>}>
						<LazyLoad key={card.id} height={200} offset={100} once>



							<Card
								key={card.id}
								card={card}>
							</Card>

						</LazyLoad>
					</Suspense>

				))}

			</div>

		</div>
	)
}


function mapStateToProps({ cards, deck }) {

	return {
		isLoading: cards.isLoading,
		deck: deck.deck
	};
}

const mapDispatchToProps = {
	cardsIsLoading: cardsIsLoading
};


export default connect(mapStateToProps, mapDispatchToProps)(Cards)