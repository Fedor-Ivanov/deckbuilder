import {
    ACTION_ADD_CARD_TO_DECK,
    ACTION_SET_DECK_FACTION,
    ACTION_SET_DECK_LEADER,
    ACTION_RESET_DECK,
    ACTION_LOCK_DECK,
    ACTION_DELETE_CARD_FROM_DECK
} from '../actions/deck';


const initialState = {
    deck: [],
    deckFaction: null,
    deckLeader: null,
    deckLocking: false
};

function checkDupl(payload) {

    let duplicatedCard = payload.id + "_" + Date.now();

    // if (payload.color === 'Gold') {
    //     return false;
    // }

    // if (payload.color === 'Gold') {
    //     return null;
    // } else if (payload.color === 'Bronze') {
    //     alert('Bronze')
    // }

    return {
        ...payload,
        id: duplicatedCard
    };

}

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_ADD_CARD_TO_DECK:


            return {
                ...state,
                deck: [
                    ...state.deck,
                    state.deck.includes(payload) ? checkDupl(payload) : payload
                    // payload
                ]
            }

        case ACTION_SET_DECK_FACTION:

            return {
                ...state,
                deckFaction: payload
            }

        case ACTION_SET_DECK_LEADER:

            return {
                ...state,
                deckLeader: payload
            }

        case ACTION_RESET_DECK:

            return initialState;

        case ACTION_LOCK_DECK:

            return {
                ...state,
                deckLocking: true
            }

        case ACTION_DELETE_CARD_FROM_DECK:

            return {
                ...state,
                deck: state.deck.filter(item => item.id !== payload)
            }

        default:
            return state;
    }
}