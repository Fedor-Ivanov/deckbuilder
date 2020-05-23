import { ACTION_ADD_CARD_TO_DECK } from '../actions/deck';


const initialState = {
    deck: []
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

        default:
            return state;
    }
}