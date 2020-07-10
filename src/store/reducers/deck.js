import {
    ACTION_ADD_CARD_TO_DECK,
    ACTION_SET_DECK_FACTION,
    ACTION_SET_DECK_LEADER,
    ACTION_RESET_DECK,
    ACTION_LOCK_DECK,
    ACTION_DELETE_CARD_FROM_DECK,
    ACTION_SET_ID_TO_DECK,
    ACTION_SET_TITLE_DECK,
    ACTION_GET_ID_TO_DECK,
    ACTION_GET_TITLE_DECK,
    ACTION_GET_CARDS_DECK,
    ACTION_GET_DECK_LEADER
} from '../actions/deck';


const initialState = {
    deckId: null,
    deckTitle: '',
    deck: [],
    deckFaction: null,
    deckLeader: null,
    deckLocking: false,
};

function checkDupl(payload) {

    let duplicatedCard = payload.id + "_" + Date.now();

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

        case ACTION_GET_DECK_LEADER:

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

        case ACTION_SET_ID_TO_DECK:

            return {
                ...state,
                deckId: Date.now()
            }

        case ACTION_GET_ID_TO_DECK:

            return {
                ...state,
                deckId: payload
            }

        case ACTION_SET_TITLE_DECK:

            return {
                ...state,
                deckTitle: payload
            }

        case ACTION_GET_TITLE_DECK:

            return {
                ...state,
                deckTitle: payload
            }

        case ACTION_GET_CARDS_DECK:

            return {
                ...state,
                deck: payload
            }

        default:
            return state;
    }
}