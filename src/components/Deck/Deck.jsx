import React from 'react'
import './deck.css'
import { connect } from 'react-redux';
import { deckLock } from '../../store/actions/deck'


function Deck({ deck, deckFaction, deckLeader, isDeckLock, onDeckLock }) {

	const cardsProvision = deck
		.map(item => +item.provision)
		.reduce((prev, curr) => prev + curr, 0);

	const deckProvision = 150 + +deckLeader.provision - cardsProvision;

	const deckUnits = deck
		.map(item => item.type == "Unit")
		.filter(item => item === true).length;

	const deckCards = deck.length;

	const minCards = 25;

	const minUnits = 13;

	if (deckProvision < 0) {
		onDeckLock()
	}

	return (

		<>
			<div className='deck'>

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
					{deck.map(card => (
						<div key={card.id}>{card.name}</div>
					))}
				</div>

			</div>
		</>

	)
}

const deckWrap = {
	marginTop: '10px'
}


function mapStateToProps({ deck }) {

	return {
		deck: deck.deck,
		deckFaction: deck.deckFaction,
		deckLeader: deck.deckLeader,
		isDeckLock: deck.deckLocking,
	};
}

const mapDispatchToProps = {
	onDeckLock: deckLock
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck)