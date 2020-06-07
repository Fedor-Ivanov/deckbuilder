import {
    ACTION_ADD_CARD_TO_DECK,
    ACTION_SET_DECK_FACTION,
    ACTION_SET_DECK_LEADER,
    ACTION_RESET_DECK,
    ACTION_LOCK_DECK
} from '../actions/deck';


const initialState = {
    deck: [],
    deckFaction: null,
    deckLeader: null,
    deckLocking: false
};

function checkDupl(payload) {

    payload.id = payload.id + '_2';

    return payload;

}

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_ADD_CARD_TO_DECK:

            console.log(state.deck.includes(payload))

            console.log(state.deck)

            return {
                ...state,
                deck: [
                    ...state.deck,
                    payload
                    // state.deck.includes(payload) ? checkDupl(payload) : payload
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

            return state;

        case ACTION_LOCK_DECK:

            return {
                ...state,
                deckLocking: true
            }

        default:
            return state;
    }
}