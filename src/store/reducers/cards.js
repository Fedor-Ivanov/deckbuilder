import { ACTION_CARDS_IS_LOADING } from '../actions/cards';
import data from '../../data/cardlist-v6.2.0.json'

const initialState = {
    cards: data,
    // isLoading: false,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {

        // case ACTION_CARDS_IS_LOADING:

        //     return {
        //         ...state,
        //         isLoading: !state.isLoading
        //     }

        default:
            return state;
    }
}