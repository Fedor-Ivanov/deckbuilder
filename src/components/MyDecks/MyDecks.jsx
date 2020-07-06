import React from 'react';
import { connect } from 'react-redux';
import { setLocalRemove } from '../../store/actions/decks'
import './mydecks.css'


function MyDecks({ decks, setLocalRemove }) {

    return (
        <div className='wrap'>
            {decks != -[] ?
                decks.map(deck => (
                    <div>
                        <h1 key={deck.id}>{deck.id}</h1>
                        <button key={deck.id} onClick={() => setLocalRemove(deck.id)}>delete deck</button>
                        {deck.cards.map(card => (
                            <p key={card.id}>{card.name}</p>
                        ))}
                    </div>
                ))
                :
                <p>no qweqwes</p>
            }
        </div>
    )
}


function mapStateToProps({ decks }) {

    return {
        decks: decks.decks
    };
}

const mapDispatchToProps = {
    setLocalRemove: setLocalRemove

};

export default connect(mapStateToProps, mapDispatchToProps)(MyDecks)