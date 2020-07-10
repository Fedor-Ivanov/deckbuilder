import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewDeck from '../NewDeck/NewDeck'
import { setDeck } from '../../store/actions/deck'


function DeckEditor({
    deck,
    finalCards,
    filters,
    setDeck,
    check
}) {


    useEffect(() => {

        setDeck(deck)
    }, [])


    return (
        <div>
            {check
                ?
                <NewDeck finalCards={finalCards} selectedFaction={deck.faction} filters={filters}></NewDeck>
                :
                'Loading'
            }

        </div>
    )
}

function mapStateToProps({ decks, deck }, { id }) {

    const existingDeck = decks.decks.find(deck => deck.id == id);

    const check = deck.deckId == existingDeck.id ? true : false;

    return {
        deck: existingDeck,
        check: check,
    };

}

const mapDispatchToprops = {
    setDeck: setDeck
};

export default connect(mapStateToProps, mapDispatchToprops)(DeckEditor);
