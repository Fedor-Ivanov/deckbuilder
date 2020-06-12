import React from 'react'
import './builder.css'
import Cards from '../Cards/Cards'
import Deck from '../Deck/Deck'
import Modal from '../Modal/Modal'
import { toggleModal } from '../../store/actions/modal'
import { resetSelectedDeck } from '../../store/actions/filters'
import { resetDeck } from '../../store/actions/deck'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { connect } from 'react-redux';


function Builder({ cards, isVisible, onToggleModal, selectedFaction, selectedLeader, onResetSelectedDeck, onResetDeck, deck }) {


	let qwe = cards.filter(function (item) {
		if (item.color === 'Gold') {
			return !deck.includes(item)
		}
		else if (item.color === 'Bronze') {

			if (deck.filter(deckItem => deckItem.name === item.name).length < 2) {
				return deck.filter(deckItem => deckItem.name === item.name)
			}



		}
	})

	qwe.sort((a, b) => (+a.provision - +b.provision));

	const { path, url } = useRouteMatch();

	function onNewDeckClick() {
		onResetSelectedDeck()
		onToggleModal()
		onResetDeck()
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
						<div className='wrap'>
							<Cards className='cards' cards={qwe}>
							</Cards>
							<Deck className='deck'>
							</Deck>
						</div>
					}
				</Route>

			</Switch>
		</div>
	)
}

function mapStateToProps({ cards, filters, modal, deck }) {

	return {
		cards: cards.cards.filter(item => item.faction === 'Neutral').concat(cards.cards.filter(item => item.faction === filters.deckSelect.faction)),
		isVisible: modal.isVisible,
		selectedFaction: filters.deckSelect.faction,
		selectedLeader: filters.deckSelect.leader,
		deck: deck.deck
	};
}

const mapDispatchToProps = {
	onToggleModal: toggleModal,
	onResetSelectedDeck: resetSelectedDeck,
	onResetDeck: resetDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder)