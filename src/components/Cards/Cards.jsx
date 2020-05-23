import React, { Suspense } from 'react';
import './cards.css'
// import Card from '../Card/Card';
import { cardsIsLoading } from '../../store/actions/cards'
import { connect } from 'react-redux';

const Card = React.lazy(() => import('../Card/Card'));


function Cards({ cards, isLoading }) {

	return (
		<>
			<div>{cards.length}</div>

			<div className='cards'>

				{cards.map(card => (
					<Suspense fallback={<div>Загрузка...</div>}>
						<Card
							key={card.id}
							card={card}
						></Card>
					</Suspense>
				))}

			</div>


		</>
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