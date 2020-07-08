import React from 'react'
import './builder.css'
import { toggleModal, openNewDeckModal } from '../../store/actions/modal'
import { resetSelectedDeck } from '../../store/actions/filters'
import { resetDeck } from '../../store/actions/deck'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import NewDeck from '../NewDeck/NewDeck'
import MyDecks from '../MyDecks/MyDecks'


function Builder({
	cards,
	onToggleModal,
	selectedFaction,
	selectedLeader,
	onResetSelectedDeck,
	onResetDeck,
	deck,
	onOpenNewDeckModal,
	deckId,
	filters
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
		onOpenNewDeckModal()
	}

	return (
		<div className='builder'>


			<Switch>

				<Route exact path={`${path}`}>
					<Link onClick={onNewDeckClick} to={`${url}/new`}>new deck</Link>
					{' '}
					<Link to={`${url}/mydecks`}>my decks</Link>
				</Route>

				<Route path={`${path}/new`}>
					{
						selectedFaction && selectedLeader && deckId &&
						<NewDeck finalCards={finalCards} selectedFaction={selectedFaction} filters={filters}></NewDeck>
					}
				</Route>
				<Route path={`${path}/mydecks`}>
					<MyDecks></MyDecks>
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
		deck: deck.deck,
		deckId: deck.deckId,
		filters: filters
	};
}

const mapDispatchToProps = {
	onToggleModal: toggleModal,
	onResetSelectedDeck: resetSelectedDeck,
	onResetDeck: resetDeck,
	onOpenNewDeckModal: openNewDeckModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder)