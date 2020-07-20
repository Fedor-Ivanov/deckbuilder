import {
    ACTION_SAVE_DECK,
    ACTION_DELETE_DECK,
    ACTION_UPDATE_DECK
} from '../actions/decks';


const initialState = {
    decks: JSON.parse(localStorage.getItem('decksStorage')) ? JSON.parse(localStorage.getItem('decksStorage')) : []
};


function updateDecks(list, data) {

    return list.map(item => (item.id === data.id ? data : item));
}

function createDeck(list, item) {
    return [...list, item]
}

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_SAVE_DECK:

            return {
                ...state,
                decks: createDeck(state.decks, payload)
            };

        case ACTION_UPDATE_DECK:
            return {
                ...state,
                decks: updateDecks(state.decks, payload)
            };

        case ACTION_DELETE_DECK:

            return {
                ...state,
                decks: state.decks.filter(item => item.id !== payload)
            };

        default:
            return state;
    }
}