import {
    ACTION_SAVE_DECK,
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

        default:
            return state;
    }
}