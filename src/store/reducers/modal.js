import {
    ACTION_TOGGLE_MODAL,
    ACTION_CARD_MODAL
} from '../actions/modal';


const initialState = {
    isVisible: false,
    modalCard: null
};

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_TOGGLE_MODAL:

            return {
                ...state,
                isVisible: !state.isVisible
            }

        case ACTION_CARD_MODAL:

            return {
                ...state,
                modalCard: payload
            }

        default:
            return state;
    }
}