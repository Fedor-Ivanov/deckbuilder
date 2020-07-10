import React from 'react';
import { connect } from 'react-redux';
import { setLocalRemove } from '../../store/actions/decks'
import './mydecks.css'
import { Link } from 'react-router-dom';


function MyDecks({ decks, setLocalRemove }) {

    return (
        <div className='wrap'>
            {decks != -[] ?
                decks.map(deck => (
                    <div key={deck.id}>
                        <h1>{deck.title}</h1>
                        <Link to={`/builder/${deck.id}`}>edit deck</Link>
                        <button onClick={() => setLocalRemove(deck.id)}>delete deck</button>
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