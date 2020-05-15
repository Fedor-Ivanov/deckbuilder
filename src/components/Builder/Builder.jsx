import React from 'react'
import './builder.css'
import Cards from '../Cards/Cards'
import Deck from '../Deck/Deck'
import Modal from '../Modal/Modal'
import { toggleModal } from '../../store/actions/modal'

import { connect } from 'react-redux';



function Builder({ cards, isVisible, onToggleModal }) {

	return (
		<div className='builder'>

			<button onClick={onToggleModal}>new deck</button>


			{
				isVisible && <Modal onToggleModal={onToggleModal}></Modal>
			}



			{/* <Cards className='cards' cards={cards}>

			</Cards>
			<Deck className='deck'>

			</Deck> */}
		</div>
	)
}

function mapStateToProps({ cards, filters, modal }) {

	return {
		cards: cards.cards,
		isVisible: modal.isVisible,
		// selectedType: filters.selected.type,
		// selectedProvision: filters.selected.provision,
		// selectedFaction: filters.selected.faction,
		// selectedRarity: filters.selected.rarity
	};
}

const mapDispatchToProps = {
	onToggleModal: toggleModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder)