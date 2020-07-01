import React from 'react'
import './deck.css'
import { connect } from 'react-redux';
import { deckLock, deleteCardFormDeck } from '../../store/actions/deck'
import { setlocal } from '../../store/actions/decks'


function Deck({
	deck,
	deckFaction,
	deckLeader,
	isDeckLock,
	onDeckLock,
	onDeleteCardFormDeck,
	deckId,
	setlocal
}) {

	const cardsProvision = deck
		.map(item => +item.provision)
		.reduce((prev, curr) => prev + curr, 0);

	const deckProvision = 150 + +deckLeader.provision - cardsProvision;

	const deckUnits = deck
		.map(item => item.type === "Unit")
		.filter(item => item === true).length;

	const deckCards = deck.length;

	const minCards = 25;

	const minUnits = 13;

	if (deckProvision < 0) {
		onDeckLock()
	}

	function onSaveDeck() {
		let deckItem = {
			id: deckId,
			faction: deckFaction,
			leader: deckLeader,
			cards: deck
		}
		setlocal(deckItem);
	}

	return (

		<>
			<div className='deck'>
				<div className="deck__wrap">

					{
						isDeckLock && <div>go play</div>
					}

					<button onClick={onSaveDeck}>save</button>

					<div>
						<span>Faction - </span>
						<span>{deckFaction}</span>
					</div>
					<div>
						<span>Leader - </span>
						<span>{deckLeader.name}</span>
					</div>
					<div>
						<span>Provision - </span>
						<span style={deckProvision < 0 ? { color: 'red' } : { color: 'black' }}>
							{deckProvision}
						</span>
					</div>
					<div>
						<span>Cards - </span>
						<span>{deckCards}</span>
						{deckCards <= minCards && <span>/ {minCards}</span>}
					</div>
					<div>
						<span>Units - </span>
						<span>{deckUnits}</span>
						{deckUnits <= minUnits && <span>/ {minUnits}</span>}
					</div>

					<div style={deckWrap}>
						{deck.map(card => card === false ? "" : (
							<div style={deckCard} key={card.id}>
								<span>{card.name}</span>
								<span onClick={() => onDeleteCardFormDeck(card.id)}>X</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</>

	)
}

const deckWrap = {
	marginTop: '10px'
}

const deckCard = {
	display: 'flex',
	justifyContent: 'space-between'
}

function mapStateToProps({ deck }) {

	return {
		deck: deck.deck,
		deckId: deck.deckId,
		deckFaction: deck.deckFaction,
		deckLeader: deck.deckLeader,
		isDeckLock: deck.deckLocking,
	};
}

const mapDispatchToProps = {
	onDeckLock: deckLock,
	onDeleteCardFormDeck: deleteCardFormDeck,
	setlocal: setlocal
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck)