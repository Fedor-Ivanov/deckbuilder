import React, { Suspense, useState } from 'react'
import './cards.css'
import { useEffect } from 'react';
import { connect } from 'react-redux';

const Card = React.lazy(() => import('../Card/Card'));


function Cards({ cards, filters }) {

	const [pagination, setPagination] = useState({
		currentPage: 1,
		itemsPerPage: 20
	})

	useEffect(() => {
		setPagination({
			...pagination,
			currentPage: 1
		})
	}, [filters])

	function changePage(direction) {
		if (direction === 'back') {
			setPagination({
				...pagination,
				currentPage: pagination.currentPage - 1
			});
		} else if (direction === 'next') {
			setPagination({
				...pagination,
				currentPage: pagination.currentPage + 1
			});
		}
	}

	return (
		<div>
			<div>{cards.length}</div>
			<div className='cards'>
				{cards.slice((pagination.currentPage * pagination.itemsPerPage) - pagination.itemsPerPage, pagination.currentPage * pagination.itemsPerPage).map(card => (
					<Suspense key={card.id} fallback={<div>Loading...</div>}>
						<Card
							key={card.id}
							card={card}>
						</Card>
					</Suspense>
				))}
				<div>
					{pagination.currentPage > 1 ?
						<button onClick={() => changePage('back')}>back</button>
						: null}
					{cards.length - 1 > pagination.currentPage * pagination.itemsPerPage ?
						<button onClick={() => changePage('next')}>next</button>
						: null}
				</div>
			</div>
		</div>
	)
}


function mapStateToProps({ filters }) {
	return {
		filters: filters.selected
	};
}

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(Cards)
