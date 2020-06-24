import React from 'react'
import './builder.css'

import Modal from '../Modal/Modal'
import ModalNewDeck from '../ModalNewDeck/ModalNewDeck'
import { toggleModal } from '../../store/actions/modal'
import { resetSelectedDeck } from '../../store/actions/filters'
import { resetDeck } from '../../store/actions/deck'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NewDeck from '../NewDeck/NewDeck'


function Builder({
	cards,
	isVisible,
	onToggleModal,
	selectedFaction,
	selectedLeader,
	onResetSelectedDeck,
	onResetDeck,
	deck
}) {

	const even = (element) => element.type === "Stratagem";

	let stratagemCards = cards.filter(item => item.type === 'Stratagem');

	let filteredDeckCards = cards.filter(function (item) {

		if (item.color === 'Gold') {
			return !deck.includes(item)
		}

		else if (item.color === 'Bronze') {
			if (deck.filter(deckItem => deckItem.name === item.name).length < 2) {
				return deck.filter(deckItem => deckItem.name === item.name)
			}
		}

	})

	let filteredCards = filteredDeckCards
		.filter(item => item.type !== 'Ability')
		.filter(item => item.provision !== '0')
		.filter(item => item.id !== '201725' && item.id !== '201731' && item.id !== '201737')


	filteredCards.sort((a, b) => {
		return +b.provision - +a.provision;
	})

	let finalCards = deck.some(even) ? filteredCards : stratagemCards.concat(filteredCards)

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
				isVisible && <Modal render={modal => (
					<ModalNewDeck modal={modal}></ModalNewDeck>
				)} ></Modal>
			}

			<Switch>
				<Route path={`${path}/new`}>

					{
						selectedFaction && selectedLeader && !isVisible &&
						<NewDeck finalCards={finalCards}></NewDeck>
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