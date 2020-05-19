import React from 'react'
import './builder.css'
import Cards from '../Cards/Cards'
import Deck from '../Deck/Deck'
import Modal from '../Modal/Modal'
import { toggleModal } from '../../store/actions/modal'
import { resetSelectedDeck } from '../../store/actions/filters'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { connect } from 'react-redux';


function Builder({ cards, isVisible, onToggleModal, selectedFaction, selectedLeader, onResetSelectedDeck }) {

	const { path, url } = useRouteMatch();

	function onNewDeckClick() {
		onResetSelectedDeck()
		onToggleModal()
	}

	return (
		<div className='builder'>
			<Link onClick={onNewDeckClick} to={`${url}/new`}>new deck</Link>
			{
				isVisible && <Modal onToggleModal={onToggleModal}></Modal>
			}
			<Switch>
				<Route exact path={`${path}/new`}>
					{
						selectedFaction && selectedLeader && !isVisible &&
						<>
							<Cards className='cards' cards={cards}>
							</Cards>
							<Deck className='deck'>
							</Deck>
						</>
					}
				</Route>

			</Switch>
		</div>
	)
}

function mapStateToProps({ cards, filters, modal }) {

	return {
		cards: cards.cards.filter(item => item.faction == 'Neutral').concat(cards.cards.filter(item => item.faction == filters.deckSelect.faction)),
		isVisible: modal.isVisible,
		selectedFaction: filters.deckSelect.faction,
		selectedLeader: filters.deckSelect.leader,
	};
}

const mapDispatchToProps = {
	onToggleModal: toggleModal,
	onResetSelectedDeck: resetSelectedDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder)