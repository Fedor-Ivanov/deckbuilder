import {
    ACTION_SAVE_DECK,
    ACTION_DELETE_DECK
} from '../actions/decks';


const initialState = {
    decks: JSON.parse(localStorage.getItem('decksStorage')) ? JSON.parse(localStorage.getItem('decksStorage')) : []
};


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_SAVE_DECK:

            return {
                decks: [
                    ...state.decks,
                    payload
                ]
            }

        case ACTION_DELETE_DECK:

            return {
                ...state,
                decks: state.decks.filter(item => item.id !== payload)
            };

        default:
            return state;
    }
}