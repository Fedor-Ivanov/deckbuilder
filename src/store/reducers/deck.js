import {
    ACTION_ADD_CARD_TO_DECK,
    ACTION_SET_DECK_FACTION,
    ACTION_SET_DECK_LEADER
} from '../actions/deck';


const initialState = {
    deck: [],
    deckFaction: null,
    deckLeader: null
};

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_ADD_CARD_TO_DECK:

            return {
                ...state,
                deck: [
                    ...state.deck,
                    payload
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

        default:
            return state;
    }
}