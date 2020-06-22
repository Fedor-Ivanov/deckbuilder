import React, { Suspense } from 'react'
import './cards.css'
// import Card from '../Card/Card';
// import { cardsIsLoading } from '../../store/actions/cards'
// import { openModalCard } from '../../store/actions/modal'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazyload'
import Modal from '../Modal/Modal'


const Card = React.lazy(() => import('../Card/Card'));

function Cards({ cards, isVisible, modalCard }) {

	return (
		<div>

			<div>{cards.length}</div>

			<div className='cards'>
				{cards.map(card => (
					<Suspense key={card.id} fallback={<div>Loading...</div>}>
						<LazyLoad key={card.id} height={400} offset={400} once>

							<Card
								key={card.id}
								card={card}>
							</Card>

						</LazyLoad>
					</Suspense>
				))}
			</div>

			{
				isVisible && <Modal modalCard={modalCard}></Modal>
			}

		</div>
	)
}


function mapStateToProps({ cards, modal }) {

	return {
		isLoading: cards.isLoading,
		isVisible: modal.isVisible,
		modalCard: modal.modalCard
	};
}

const mapDispatchToProps = {
	// cardsIsLoading: cardsIsLoading,
	// openModalCard: openModalCard
};


export default connect(mapStateToProps, mapDispatchToProps)(Cards)