import React, { Suspense } from 'react'
import './cards.css'
// import Card from '../Card/Card';
import { cardsIsLoading } from '../../store/actions/cards'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazyload'



const Card = React.lazy(() => import('../Card/Card'));



function Cards({ cards, isLoading }) {

	return (
		<div>

			<div>{cards.length}</div>

			<div className='cards'>

				{cards.map(card => (


					<Suspense fallback={<div>Loading...</div>}>
						<LazyLoad height={200} offset={100} once>

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


function mapStateToProps({ cards }) {

	return {
		isLoading: cards.isLoading
	};
}

const mapDispatchToProps = {
	cardsIsLoading: cardsIsLoading
};


export default connect(mapStateToProps, mapDispatchToProps)(Cards)