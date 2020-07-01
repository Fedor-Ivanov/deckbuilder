import React from 'react';
import { connect } from 'react-redux';


function MyDecks({ decks }) {

    return (
        <div>
            {decks != -[] ?
                decks.map(deck => (
                    <div key={deck.id}>{deck.id}</div>
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

};

export default connect(mapStateToProps, mapDispatchToProps)(MyDecks)