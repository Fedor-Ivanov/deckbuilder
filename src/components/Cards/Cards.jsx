import React, { Suspense } from 'react'
import './cards.css'
import LazyLoad from 'react-lazyload'
import Modal from '../Modal/Modal'
import ModalCardDescription from '../ModalCardDescription/ModalCardDescription'

const Card = React.lazy(() => import('../Card/Card'));

function Cards({ cards }) {


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
				isVisible && <Modal render={modal => (
					<ModalCardDescription modal={modal} />
				)}></Modal>
			}

		</div>
	)
}


export default Cards
