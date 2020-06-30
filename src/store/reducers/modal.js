import {
    ACTION_TOGGLE_MODAL,
    ACTION_CARD_MODAL,
    ACTION_NEW_DECK_MODAL
} from '../actions/modal';


const initialState = {
    isVisible: false,
    modalCard: null,
    modalCardId: null
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
                modalCard: payload,
                modalCardId: payload.id
            }

        case ACTION_NEW_DECK_MODAL:

            return {
                ...state,
                modalCard: null,
                modalCardId: 'new'
            }

        default:
            return state;
    }
}