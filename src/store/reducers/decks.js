import {
    ACTION_SAVE_DECK,
    ACTION_DELETE_DECK,
    ACTION_UPDATE_DECK
} from '../actions/decks';


const initialState = {
    decks: JSON.parse(localStorage.getItem('decksStorage')) ? JSON.parse(localStorage.getItem('decksStorage')) : []
};


function updateTable(list, data) {

    return list.map(item => (item.id === data.id ? data : item));
}

function createTable(list, item) {
    return [...list, item]
}

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_SAVE_DECK:

            return {
                ...state,
                decks: createTable(state.decks, payload)
            };

        case ACTION_UPDATE_DECK:
            return {
                ...state,
                decks: updateTable(state.decks, payload)
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