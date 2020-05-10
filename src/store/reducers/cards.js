import { } from '../actions/cards';
import data from '../../data/cardlist-v6.2.0.json'

const initialState = {
    cards: data
};

export default function (state = initialState, { type, payload }) {
    switch (type) {

        default:
            return state;
    }
}